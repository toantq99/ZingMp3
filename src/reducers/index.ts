import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import detailReducer from "./detailReducer";
import favReducer from "./favReducer";
import searchReducer from "./searchReducer";
import albumReducer from "./albumReducer";
export default combineReducers({
	home: homeReducer,
	detail: detailReducer,
	album: albumReducer,
	favList: favReducer,
	search: searchReducer,
});
