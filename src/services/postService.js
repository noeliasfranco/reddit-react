import fetch from 'isomorphic-fetch';
import * as endpoints from './apiEndpoints';
import * as apiMethods from './apiMethods';
import ApiBase from './apiBase';

class PostService {
    static loadPosts() {
        const request = ApiBase.doRequest(apiMethods.HTTP_GET, endpoints.GET_POSTS, null, null);
        return new Promise((resolve, reject) => {
            return fetch(request)
                .then((response) => {
                    if (response.ok) {
                        return resolve(response.json());
                    } else {
                        return reject(response);
                    }
                });
        });
    }
}

export default PostService;
