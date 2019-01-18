import { NewsConstants } from "../../store/constants";

const NewsReducer = (state = {}, action) => {
  let obj = action.payload;
  switch (action.type) {
    case NewsConstants.UPDATE_POSTS:
      state = Object.assign({}, state, obj);
      break;
    default:
      state = Object.assign({}, state);
  }
  return state;
};
export default NewsReducer;
