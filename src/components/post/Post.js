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
          <img className="upvote" src={votearrow} alt="uparrow" onClick={()=>this.props.upVote(objectID)}/>
        </div>
        <div>
          <p>
            <a href={url}>{title} </a>
            {url && ( <span>
              ( <a className="urlTitle" href={url}>
                 {siteName}
              </a>)
            </span>
            )}
          </p>
          <p className="details">
            <span>{points} points by </span>
            <a href="#">{author} </a> 7 hours ago
            <span onClick={()=>this.props.hide(objectID)} className="hide"> hide </span>
            <span>370 comments</span>
          </p>
        </div>
      </div>
        );
    }
}

export default Post;