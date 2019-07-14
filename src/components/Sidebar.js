import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Post from './Post';
import autobind from 'class-autobind';

class Sidebar extends Component {
    static propTypes = {
        posts: PropTypes.array,
        markAsRead: PropTypes.func,
        dismissPost: PropTypes.func,
        dismissAll: PropTypes.func
    };

    constructor(props) {
        super(props);
        autobind(this);
    }

    render() {
        let { posts, markAsRead, dismissPost } = this.props;

        return(
            <aside className="col sidebar">
                <header className="sidebar--title">Reddit Posts</header>
                <div className="sidebar--content">
                    <div className="sidebar--content-inner-content">
                        {
                            posts.map(function(post) {
                                return (
                                    <Post
                                        item={post}
                                        key={post.id}
                                        markAsRead={markAsRead}
                                        dismissPost={dismissPost}/>
                                )
                            })
                        }
                    </div>
                </div>
                {
                    posts.length > 0 &&
                    <footer className="sidebar--footer">
                        <span onClick={()=> this.props.dismissAll()}>Dismiss All</span>
                    </footer>
                }
            </aside>
        );
    }
}

export default Sidebar;
