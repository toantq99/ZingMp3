import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import detailReducer from "./detailReducer";
import favReducer from "./favReducer";
import searchReducer from "./searchReducer";
export default combineReducers({
	home: homeReducer,
	detail: detailReducer,
	favList: favReducer,
	search: searchReducer,
});
