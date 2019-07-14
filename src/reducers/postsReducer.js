import * as types from '../actions/actionTypes';
import initialState from './initialState';

export const posts = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_POSTS_SUCCESS:
            return Object.assign({}, state, {
                posts: action.posts
            });

        default:
            return state;
    }
};