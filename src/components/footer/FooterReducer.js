import { FooterConstants } from "../../store/constants";

const FooterReducer = (state = {}, action) => {
  //   let { pageNumber } = action.payload;
  switch (action.type) {
    case FooterConstants.UPDATE_PAGE_NUMBER:
      state = Object.assign({}, state, { pageNumber: action.payload });
      break;
    default:
      state = Object.assign({}, state);
  }
  return state;
};
export default FooterReducer;
