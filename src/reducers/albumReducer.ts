import { albumActionTypes, AlbumAction } from "@constants/types/albumTypes";
import { AlbumState } from "@constants/state";
import { LoadingAction } from "@constants/types/loadingTypes";
import { emptyAlbumDetail } from "@constants/emptyValue/album";

const initialState: AlbumState = {
	isLoading: false,
	detail: emptyAlbumDetail,
};

export default (state = initialState, action: AlbumAction | LoadingAction) => {
	switch (action.type) {
		case albumActionTypes.GET_ALBUM_DETAIL:
			return { ...state, detail: action.payload };
		case albumActionTypes.SET_LOADING_ALBUM:
			return { ...state, isLoading: action.payload };
		default:
			return state;
	}
};
