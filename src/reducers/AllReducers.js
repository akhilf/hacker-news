import { combineReducers } from "redux";
import NewsReducer from "../containers/news/NewsReducer";
import FooterReducer from "../components/footer/FooterReducer";
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const AllReducers = combineReducers({
  NewsState: NewsReducer,
  FooterState: FooterReducer
});

export default AllReducers;
