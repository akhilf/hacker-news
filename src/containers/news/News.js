import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as NewsActions from "./NewsActions";

import Post from "../../components/post/Post";

class News extends Component {
  componentDidMount() {
    const { actions, FooterState } = this.props;
    const { pageNumber } = FooterState;
    actions.getNews(pageNumber);
  }
  render() {
    const { NewsState } = this.props;
    const { data = {} } = NewsState;

    const { hits } = data;

    return (
      <div className="news">
        {hits && hits.map(hit => <Post {...hit} key={hit.objectID} />)}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  NewsState: state.NewsState,
  FooterState: state.FooterState
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(NewsActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
