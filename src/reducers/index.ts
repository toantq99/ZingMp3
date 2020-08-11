import { combineReducers } from "redux";
import homeReducer from "./HomeReducer";
import detailReducer from "./DetailReducer";
import favReducer from "./FavReducer";
import searchReducer from "./SearchReducer";
import albumReducer from "./AlbumReducer";
import authReducer from "./AuthReducer";
export default combineReducers({
	home: homeReducer,
	detail: detailReducer,
	album: albumReducer,
	favList: favReducer,
	search: searchReducer,
	auth: authReducer,
});
