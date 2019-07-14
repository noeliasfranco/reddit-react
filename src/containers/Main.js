import React, { Component } from 'react'
import PropTypes from 'prop-types';

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

  componentDidMount() {
      this.props.actions.loadPosts();
  }

  render() {
   return(
       <div className="flex-grid">
         <Sidebar />
         <DetailedView />
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