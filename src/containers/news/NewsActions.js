import { NewsConstants } from "../../store/constants";
import axios from "axios";

export const getNews = page => {
  return dispatch => {
    const { UPDATE_POSTS, NEWS_BASE_URL } = NewsConstants;
    const url = `${NEWS_BASE_URL}${page}`;
    axios.get(url).then(data => {
      console.log(data);
      dispatch({
        type: UPDATE_POSTS,
        payload: data
      });
    });
  };
};
