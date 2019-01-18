import { FooterConstants, NewsConstants } from "../../store/constants";
import axios from "axios";
export const updatePageNumber = pageNumber => {
  return {
    type: FooterConstants.UPDATE_PAGE_NUMBER,
    payload: pageNumber
  };
};
