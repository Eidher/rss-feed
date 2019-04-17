import { http, parseRssFeed } from "../../utils";
import dispatchers from "./dispatchers";

let page = 1;
const size = 6;
const httpClient = http({
  baseURL: process.env.REACT_APP_BASE_API_URL
});

export const updateLinkList = feed => dispatch => {
  const { updateLinks } = dispatchers(dispatch);

  // Defaulting the payload to error
  let payload = { feedId: feed.id, items: [], isError: true };

  // Parsing the rss feed url
  parseRssFeed(feed.url)
    .then(response => {
      // [TODO]: Maybe here, it would be good to add some validations to the response...

      // Mapping response
      const items = response.items.slice(0, 6).map(item => {
        return {
          title: item.title,
          url: item.link
        };
      });

      // Adding the feed links to the payload
      payload = { feedId: feed.id, items, isError: false };
    })
    .catch(err => {
      // [TODO]: Log this error... ;)
    })
    .finally(() => {
      // Dispatching the items to be stored
      updateLinks(payload);
    });
};

export const getFeeds = () => dispatch => {
  const { setLoading, setListError, addFeeds } = dispatchers(dispatch);

  setLoading(true);
  setListError();

  const from = size * page - size;
  page++;

  httpClient
    .get("/feeds", {
      params: {
        from,
        size
      }
    })
    .then(response => {
      const { data: feeds } = response;
      const hasMore = feeds.length === size;

      // Assigning flag isError equal false to the feed by default
      // this flag will be updated if there's an error fetching the feed links
      const mappedFeeds = feeds.map(feed => ({
        ...feed,
        isError: false
      }));

      // Storing feeds in store
      addFeeds(mappedFeeds, hasMore);

      // Setting the feed isLoading flag to false
      setLoading(false);
    })
    .catch(err => {
      // Setting error to store
      setListError(err);
      page--;
    })
    .finally(() => {
      // Setting isLoading flag to false always
      setLoading(false);
    });
};

const saveFeed = feed => {
  return httpClient
    .post("/feeds", {
      data: feed
    })
    .then(response => {
      const {
        data: {
          feed: { _id: id, name }
        }
      } = response;
      return { ...feed, id, name };
    });
};

export const addFeed = url => dispatch => {
  const { setFormError, addFeed, setAddingFeed } = dispatchers(dispatch);

  setFormError();
  setAddingFeed(true);

  parseRssFeed(url)
    .then(data => {
      return {
        url,
        description: data.title,
        baseUrl: data.link
      };
    })
    .then(saveFeed)
    .then(addFeed)
    .catch(err => {
      let error = err;
      if (err.type === "rss") {
        error = "RSS Feed Url is invalid. Please with another one.";
      }
      setFormError(error);
    })
    .finally(() => {
      setAddingFeed(false);
    });
};

export const cleanFormError = () => dispatch => {
  dispatchers(dispatch).setFormError();
};
