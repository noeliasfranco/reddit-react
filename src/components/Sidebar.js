import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Post from './Post';

class Sidebar extends Component {
    static propTypes = {
        posts: PropTypes.array
    };

    render() {
        let { posts } = this.props;

        return(
            <aside className="col sidebar">
                <header>Reddit Posts</header>
                {
                    posts.map(function(post) {
                        return (
                            <Post item={post}/>
                        )
                    })
                }
            </aside>
        );
    }
}

export default Sidebar;
