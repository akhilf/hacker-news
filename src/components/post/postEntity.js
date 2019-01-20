function PostEntity(props) {
  const {
    author,
    comment_text,
    created_at,
    created_at_i,
    num_comments,
    objectID,
    parent_id,
    points,
    title,
    url
  } = props;

  this.title = title;
  this.url = url;
  this.comment_text = comment_text;
  this.author = author;
  this.created_at = created_at;
  this.created_at_i = created_at_i;
  this.num_comments = num_comments;
  this.objectID = objectID;
  this.parent_id = parent_id;
  this.points = points;
  this.siteName = getSiteName(url);

  function getSiteName(url) {
    let hostname;
    if (url) {
      if (url.indexOf("//") > -1) {
        hostname = url.split("/")[2];
      } else {
        hostname = url.split("/")[0];
      }
      hostname = hostname.split(":")[0];
      hostname = hostname.split("?")[0];
      return hostname;
    } else {
      return "";
    }
  }
}

export default PostEntity;
