import React, { Component } from "react";
import PostEntity from "./postEntity";
import "./post.css";
import votearrow from "./grayarrow2x.gif";

class Post extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const postEntity = new PostEntity(this.props);
    const {
      author,
      comment_text,
      created_at,
      created_at_i,
      num_comments,
      objectID,
      parent_id,
      points,
      story_id,
      story_text,
      story_title,
      story_url,
      siteName,
      title,
      url
    } = postEntity;

    return (
      <div className="post">
        <div>{num_comments}</div>
        <div className="votearrow">
          <span>{points}</span>
          <img src={votearrow} alt="uparrow" />
        </div>
        <div>
          <p>
            <a href={url}>{title}</a>
            &nbsp;(
            <a className="urlTitle" href={url}>
              {siteName}
            </a>
            )
          </p>
          <p>
            <span>&nbsp;{points} points by </span>
            <a href="user?id=dcgudeman">{author}</a>
            <span>
              <a href="item?id=18920106">7 hours ago </a>
            </span>
            <a href="hide?id=18920106&amp;goto=news"> hide</a>
            <a href="item?id=18920106">370&nbsp;comments</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Post;
