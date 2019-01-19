import { NewsConstants } from "../../store/constants";

const NewsReducer = (state = {}, action) => {
  switch (action.type) {
    case NewsConstants.UPDATE_POSTS:
      state = Object.assign({}, state, action.payload);
      break;
    case NewsConstants.UP_VOTE:
      state = Object.assign({}, state, { hits: action.payload });
      break;
    case NewsConstants.HIDE:
      state = Object.assign({}, state, { hits: action.payload });
      break;
    case NewsConstants.UPDATE_PAGE_NUMBER:
      state = Object.assign({}, state, { pageNumber: action.payload });
      break;
    default:
      state = Object.assign({}, state);
  }
  return state;
};
export default NewsReducer;
