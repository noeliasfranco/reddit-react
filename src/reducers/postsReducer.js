import * as types from '../actions/actionTypes';

export const posts = (state = [], action) => {
    switch (action.type) {
        case types.LOAD_POSTS_SUCCESS:
            return Object.assign({}, state, action.posts);

        default:
            return state;
    }
};