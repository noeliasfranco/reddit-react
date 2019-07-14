import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Post from './Post';
import autobind from 'class-autobind';

class Sidebar extends Component {
    static propTypes = {
        posts: PropTypes.array,
        markAsRead: PropTypes.func
    };

    constructor(props) {
        super(props);
        autobind(this);
    }


    render() {
        let { posts, markAsRead } = this.props;

        return(
            <aside className="col sidebar">
                <header className="sidebar--title">Reddit Posts</header>
                <div className="sidebar--content">
                    <div className="sidebar--content-inner-content">
                        {
                            posts.map(function(post) {
                                return (
                                    <Post item={post} key={post.id} markAsRead={markAsRead}/>
                                )
                            })
                        }
                    </div>
                </div>
            </aside>
        );
    }
}

export default Sidebar;
