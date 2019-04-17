import axios from "axios";

const http = (config = {}) => {
  /**
   * Creates an instance of BaseHttpClient.
   */
  const httpClient = axios;
  const configuration = {
    baseURL: "",
    headers: {
      "content-type": "application/json"
    }
  };

  Object.assign(configuration, config);

  /**
   * Creates a HTTP request
   *
   * @param {string} url
   * @param {object} config - https://www.npmjs.com/package/axios
   */
  const request = (url, method, config) => {
    const requestObject = {
      method,
      url
    };

    Object.assign(requestObject, configuration, config);
    return httpClient(requestObject);
  };

  /**
   * Creates a GET request
   *
   * @param {string} url
   * @param {object} config - https://www.npmjs.com/package/axios
   */
  const get = (url, config) => {
    return request(url, "get", config);
  };

  /**
   * Creates a POST request
   *
   * @param {string} url
   * @param {object} config - https://www.npmjs.com/package/axios
   */
  const post = (url, config) => {
    return request(url, "post", config);
  };

  /**
   * Creates a DELETE request
   *
   * @param {string} url
   * @param {object} config - https://www.npmjs.com/package/axios
   */
  const remove = (url, config) => {
    return request(url, "delete", config);
  };

  /**
   * Creates a HEAD request
   *
   * @param {string} url
   * @param {object} config - https://www.npmjs.com/package/axios
   */
  const head = (url, config) => {
    return request(url, "head", config);
  };

  /**
   * Creates a OPTIONS request
   *
   * @param {string} url
   * @param {object} config - https://www.npmjs.com/package/axios
   */
  const options = (url, config) => {
    return request(url, "options", config);
  };

  /**
   * Creates a PUT request
   *
   * @param {string} url
   * @param {object} config - https://www.npmjs.com/package/axios
   */
  const put = (url, config) => {
    return request(url, "put", config);
  };

  /**
   * Creates a PATCH request
   *
   * @param {string} url
   * @param {object} config - https://www.npmjs.com/package/axios
   */
  const patch = (url, config) => {
    return request(url, "patch", config);
  };

  return {
    request,
    get,
    post,
    remove,
    head,
    options,
    put,
    patch
  };
};

export default http;
