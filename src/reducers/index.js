import { combineReducers } from "redux";
import musicListReducer from "./musicListReducer";
import musicDetailReducer from "./musicDetailReducer";
import favListReducer from "./favListReducer";
export default combineReducers({
	musicList: musicListReducer,
	detailPage: musicDetailReducer,
	favList: favListReducer,
});
