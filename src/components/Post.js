import React, { Component } from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';

class Post extends Component {
    static propTypes = {
        item: PropTypes.object,
        markAsRead: PropTypes.func,
        dismissPost: PropTypes.func
    };

    markAsRead() {
        let { item } = this.props;
        this.props.markAsRead(item);
    }


    render() {
        let { item } = this.props;

        return(
            <div className="post">
                <div className="post--header">
                    {
                        item.unread &&
                        <span className="unread"></span>
                    }
                    <span className="post--header-author">{item.author}</span>
                    <span className="post--header-time">{moment(item.created_utc, 'X').fromNow()}</span>
                </div>
                <div className="post--content">
                    <img src={item.thumbnail} alt=""/>
                    <p className="post--content-title" title={item.title}>{item.title}</p>
                    <span className="arrow-right" onClick={()=> this.markAsRead()}></span>
                </div>
                <div className="post--footer">
                    <button className="post--footer-dismiss" onClick={()=> this.props.dismissPost(item)}>Dismiss Post</button>
                    <span className="post--footer-comments">{item.num_comments} comments</span>
                </div>
            </div>
        );
    }
}

export default Post;
