import * as endpoints from './apiEndpoints';

const defaultHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

class ApiBase {
  /**
   * Base method to call an API endpoint. You only need to pass the required parameters and will reply the response accordingly.
   * @param method
   * @param url
   * @param params
   * @param body
   * @returns {Request.<T>|*}
   */
  static doRequest(method, url, params = null, body = null) {
    let options = {
      method: method,
      headers: defaultHeaders
    };

    if (body) {
      options = Object.assign({}, options, {
        body: JSON.stringify(body)
      });
    }

    let fullUrl = `${endpoints.BASE_URL}${url}`;

    /*if (params) {
      const queryStrParams = queryString.stringify(params);
      fullUrl = fullUrl.concat(`?${queryStrParams}`);
    }*/

    return new Request(fullUrl, options);
  }

}

export default ApiBase;
