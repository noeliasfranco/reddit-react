import React, { Component } from 'react'
import PropTypes from 'prop-types';
import autobind from 'class-autobind';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Sidebar from '../components/Sidebar';
import DetailedView from '../components/DetailedView';
import { loadPosts } from '../actions/index';

class Main extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      loadPosts: PropTypes.func
    }).isRequired
  };

  constructor(props) {
      super(props);
      this.state = {
          posts : [],
          selectedPost: null
      };
      autobind(this);
  }

  componentDidMount() {
      this.props.actions.loadPosts();
  }

  componentWillReceiveProps(nextProps, nextContext) {
      if(nextProps.posts) {
          this.mapInitialPosts(nextProps.posts);
      }
  }

  mapInitialPosts(posts) {
      let postsData = posts.data.children;
      let formattedPosts = postsData.map(function(post){
          let data = post.data;
          return {
              author_fullname: data.author_fullname,
              author: data.author,
              id: data.id,
              preview: data.preview,
              thumbnail: data.thumbnail,
              title: data.title,
              url: data.url,
              created: data.created,
              created_utc: data.created_utc,
              num_comments: data.num_comments,
              subreddit: data.subreddit,
              dismiss: false,
              unread: true
          }
      });
      this.setState({posts: formattedPosts});
  }

    markAsRead(item) {
        if(!item.unread) {
            this.setState({selectedPost: item});
            return;
        }

        let posts = [...this.state.posts];
        let index = posts.findIndex(el => el.id === item.id);
        posts[index].unread = false;
        this.setState({ posts: posts, selectedPost: item });
    }

    dismissPost(item) {
        this.setState({
            posts: this.state.posts.filter((post) => post.id !== item.id)
        });
    }

    dismissAll() {
      this.setState({posts: []});
    }

    render() {
      let { posts, selectedPost } = this.state;
      return(
        <div className="flex-grid">
            <Sidebar
                posts={posts}
                markAsRead={this.markAsRead}
                dismissPost={this.dismissPost}
                dismissAll={this.dismissAll}
            />
            <DetailedView
                item={selectedPost}
            />
        </div>
   );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ loadPosts }, dispatch)
  };
}

function mapStatesToProps(state, ownProps) {
  return {
    posts: (state.reducers.posts ? state.reducers.posts : [])
  };
}

export default connect(mapStatesToProps, mapDispatchToProps)(Main);