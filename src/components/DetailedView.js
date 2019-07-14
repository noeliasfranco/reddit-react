import React, { Component } from 'react'
import PropTypes from 'prop-types';
import moment from "moment";

class DetailedView extends Component {
    static propTypes = {
        item: PropTypes.object
    };

    renderPreview(item) {
        if(item.preview && item.preview.reddit_video_preview) {
            return (
                <video src={item.preview.reddit_video_preview.fallback_url} controls autoPlay></video>
            );
        } else {
            return (
                <img src={item.url} alt=""/>
            );
        }
    }

    render() {
        let { item } = this.props;

        if(item) {
            return(
                <section className="col main">
                    <p className="main--header">{item.author_fullname} <span className="main--header-time">{moment(item.created_utc, 'X').fromNow()}</span></p>
                    <p className="main--title">{item.title}</p>
                    <div className="main--preview">
                        {
                            this.renderPreview(item)
                        }
                    </div>
                </section>
            );
        } else {
            return(
                <section className="col main"></section>
            );
        }

    }
}

export default DetailedView;
