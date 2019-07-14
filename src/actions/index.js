import postService from '../services/postService';
import * as types from './actionTypes';


export function loadPostsSuccess(posts) {
    return {
        type: types.LOAD_POSTS_SUCCESS,
        posts
    };
}

export function loadPostsError(error) {
    return {
        type: types.LOAD_POSTS_ERROR,
        error
    };
}


export function loadPosts() {
  return dispatch => {
    return postService.loadPosts()
        .then(response => {
          dispatch(loadPostsSuccess(response));
        })
        .catch(function(response) {
          dispatch(loadPostsError(response));
        });
  };
}