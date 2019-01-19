import { NewsConstants } from "../../store/constants";
import axios from "axios";

export const getNews = page => {
  return dispatch => {
    const { UPDATE_POSTS, NEWS_BASE_URL } = NewsConstants;
    const url = `${NEWS_BASE_URL}${page}`;
    axios.get(url).then(res => {
      console.log(res.data);
      dispatch({
        type: UPDATE_POSTS,
        payload: res.data
      });
    });
  };
};

export const upVote = posts => {
  const { UP_VOTE } = NewsConstants;
  return {
    type: UP_VOTE,
    payload: posts
  };
};

export const hide = posts => {
  const { HIDE } = NewsConstants;
  return {
    type: HIDE,
    payload: posts
  };
};

export const updatePageNumber = pageNumber => {
  return {
    type: NewsConstants.UPDATE_PAGE_NUMBER,
    payload: pageNumber
  };
};
