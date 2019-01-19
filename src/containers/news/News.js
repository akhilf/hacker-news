import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as NewsActions from "./NewsActions";

import Post from "../../components/post/Post";
import NewsModel from "./NewsModel";

class News extends Component {
  componentDidMount() {
    const { actions, NewsState } = this.props;
    this.upVote = this.upVote.bind(this);
    this.hide = this.hide.bind(this);
    this.loadNextPage = this.loadNextPage.bind(this);
    const { pageNumber } = NewsState;
    actions.getNews(pageNumber);
  }

  upVote(id) {
    const { actions, NewsState } = this.props;
    const { hits = {} } = NewsState;
    const data = hits.map(hit => {
      if (hit.objectID === id) {
        hit.points = hit.points + 1;
      }
      return hit;
    });
    actions.upVote(data);
  }

  hide(id) {
    const { actions, NewsState } = this.props;
    const { hits = {} } = NewsState;
    const data = hits.filter(hit => hit.objectID !== id);
    actions.hide(data);
  }

  loadNextPage() {
    const { actions, NewsState } = this.props;
    const { pageNumber } = NewsState;
    const { updatePageNumber, getNews } = actions;
    updatePageNumber(pageNumber + 1);
    getNews(pageNumber + 1);
  }

  render() {
    const { NewsState } = this.props;
    const { hits = {} } = NewsState;
    const { more } = NewsModel;
    return (
      <React.Fragment>
        {" "}
        <div className="news">
          {hits &&
            hits.map(hit => (
              <Post
                {...hit}
                key={hit.objectID}
                upVote={this.upVote}
                hide={this.hide}
              />
            ))}
        </div>
        <div onClick={this.loadNextPage} className="more-container">
          {more}
        </div>
      </React.Fragment>
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
