try {
  db.createUser({
    user: "username",
    pwd: "secret",
    roles: [
      {
        role: "readWrite",
        db: "univision"
      }
    ]
  });

  const feeds = [
    {
      _id: ObjectId("5cb578dd64cb2f553de7072a"),
      url: "https://www.reddit.com/.rss",
      description: "reddit: the front page of the internet",
      baseUrl: "https://www.reddit.com/",
      name: "reddit.com",
      createdAt: ISODate("2019-04-16T06:40:29.793Z"),
      __v: 0
    },
    {
      _id: ObjectId("5cb5792664cb2f553de7072b"),
      url: "http://feeds.washingtonpost.com/rss/rss_comic-riffs",
      description: "Comics",
      baseUrl: "https://www.washingtonpost.com",
      name: "washingtonpost.com",
      createdAt: ISODate("2019-04-16T06:41:42.860Z"),
      __v: 0
    },
    {
      _id: ObjectId("5cb579a764cb2f553de7072e"),
      url: "http://feeds.bbci.co.uk/news/rss.xml",
      description: "BBC News - Home",
      baseUrl: "https://www.bbc.co.uk/news/",
      name: "bbc.co.uk",
      createdAt: ISODate("2019-04-16T06:43:51.021Z"),
      __v: 0
    },
    {
      _id: ObjectId("5cb57a6764cb2f553de7072f"),
      url: "https://www.wired.com/feed",
      description: "Feed: All Latest",
      baseUrl: "https://www.wired.com/latest",
      name: "wired.com",
      createdAt: ISODate("2019-04-16T06:47:03.946Z"),
      __v: 0
    },
    {
      _id: ObjectId("5cb57aa064cb2f553de70730"),
      url: "https://www.npr.org/rss/rss.php?id=1001",
      description: "News : NPR",
      baseUrl: "https://www.npr.org/templates/story/story.php?storyId=1001",
      name: "npr.org",
      createdAt: ISODate("2019-04-16T06:48:00.630Z"),
      __v: 0
    },
    {
      _id: ObjectId("5cb57ae564cb2f553de70731"),
      url: "http://rss.cnn.com/rss/cnn_world.rss",
      description: "CNN.com - RSS Channel - World",
      baseUrl: "https://www.cnn.com/world/index.html",
      name: "cnn.com",
      createdAt: ISODate("2019-04-16T06:49:09.470Z"),
      __v: 0
    },
    {
      _id: ObjectId("5cb57af764cb2f553de70732"),
      url: "https://feeds.a.dj.com/rss/RSSOpinion.xml",
      description: "RSSOpinion",
      baseUrl: "http://online.wsj.com/page/2_0006.html",
      name: "online.wsj.com",
      createdAt: ISODate("2019-04-16T06:49:27.819Z"),
      __v: 0
    },
    {
      _id: ObjectId("5cb57b0164cb2f553de70733"),
      url: "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
      description: "NYT > Home Page",
      baseUrl: "http://www.nytimes.com/pages/index.html?partner=rss&emc=rss",
      name: "nytimes.com",
      createdAt: ISODate("2019-04-16T06:49:37.934Z"),
      __v: 0
    },
    {
      _id: ObjectId("5cb57b2664cb2f553de70734"),
      url: "http://www.espn.com/espn/rss/news",
      description: "www.espn.com - TOP",
      baseUrl: "http://www.espn.com",
      name: "espn.com",
      createdAt: ISODate("2019-04-16T06:50:14.969Z"),
      __v: 0
    },
    {
      _id: ObjectId("5cb57ec064cb2f553de70736"),
      url: "http://rss.cnn.com/rss/cnn_topstories.rss",
      description: "CNN.com - RSS Channel - HP Hero",
      baseUrl: "https://www.cnn.com/index.html",
      name: "cnn.com",
      createdAt: ISODate("2019-04-16T07:05:36.466Z"),
      __v: 0
    },
    {
      _id: ObjectId("5cb57ef064cb2f553de70737"),
      url: "https://www.reddit.com/.rss",
      description: "reddit: the front page of the internet",
      baseUrl: "https://www.reddit.com/",
      name: "reddit.com",
      createdAt: ISODate("2019-04-16T07:06:24.776Z"),
      __v: 0
    },
    {
      _id: ObjectId("5cb580451896f4361424cfe8"),
      url: "http://feeds.washingtonpost.com/rss/rss_comic-riffs",
      description: "Comics",
      baseUrl: "https://www.washingtonpost.com",
      name: "washingtonpost.com",
      createdAt: ISODate("2019-04-16T07:12:05.753Z"),
      __v: 0
    },
    {
      _id: ObjectId("5cb580891896f4361424cfe9"),
      url: "http://feeds.bbci.co.uk/news/rss.xml",
      description: "BBC News - Home",
      baseUrl: "https://www.bbc.co.uk/news/",
      name: "bbc.co.uk",
      createdAt: ISODate("2019-04-16T07:13:13.317Z"),
      __v: 0
    },
    {
      _id: ObjectId("5cb580fa1896f4361424cfea"),
      url: "https://feeds.a.dj.com/rss/RSSWSJD.xml",
      description: "WSJ.com: WSJD",
      baseUrl: "http://online.wsj.com",
      name: "online.wsj.com",
      createdAt: ISODate("2019-04-16T07:15:06.986Z"),
      __v: 0
    },
    {
      _id: ObjectId("5cb5815deba4cb3eeb98c9a2"),
      url: "https://www.npr.org/rss/rss.php?id=1001",
      description: "News : NPR",
      baseUrl: "https://www.npr.org/templates/story/story.php?storyId=1001",
      name: "npr.org",
      createdAt: ISODate("2019-04-16T07:16:45.442Z"),
      __v: 0
    },
    {
      _id: ObjectId("5cb5821deba4cb3eeb98c9a3"),
      url: "http://www.espn.com/espn/rss/news",
      description: "www.espn.com - TOP",
      baseUrl: "http://www.espn.com",
      name: "espn.com",
      createdAt: ISODate("2019-04-16T07:19:57.907Z"),
      __v: 0
    }
  ];

  db.feeds.insertMany(feeds);
} catch (err) {
  console.error(err);
}
