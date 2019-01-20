import React, { Component } from "react";
import PostEntity from "./postEntity";
import "./post.css";
import postModel from "./postModel";

class Post extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const postEntity = new PostEntity(this.props);
    const { upvoteUrl } = postModel;
    const {
      author,
      num_comments,
      objectID,
      points,
      siteName,
      title,
      url
    } = postEntity;

    return (
      <div className="post">
        <div>{num_comments}</div>
        <div className="votearrow">
          <span>{points}</span>
          <img
            className="upvote"
            src={upvoteUrl}
            alt="uparrow"
            onClick={() => this.props.upVote(objectID)}
          />
        </div>
        <div>
          <p>
            <a>{title} </a>
            {url && (
              <span className="urlTitle">
                ( <a href={url}>{siteName}</a>) by &nbsp;
              </span>
            )}
            <span className="details">
              <a href="#">{author} </a>{" "}
              <span className="urlTitle">7 hours ago </span>[
              <span onClick={() => this.props.hide(objectID)} className="hide">
                {" "}
                hide{" "}
              </span>{" "}
              ]
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Post;
