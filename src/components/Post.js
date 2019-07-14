import React, { Component } from 'react'
import PropTypes from 'prop-types';
import moment from 'moment';

class Post extends Component {
    static propTypes = {
        item: PropTypes.object
    };

    render() {
        let { item } = this.props;

        return(
            <div>
                <div>{item.author} <span>{moment(item.created_utc, 'X').fromNow()}</span></div>
                <div>
                    <img src={item.thumbnail}/>
                    <p>{item.title}</p>
                </div>
                <div>
                    <span>Dismiss Post</span>
                    <span>{item.num_comments} comments</span>
                </div>
            </div>
        );
    }
}

export default Post;
