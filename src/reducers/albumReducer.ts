import { albumActionTypes } from "../actions/types";

interface AlbumState {
	isLoading: boolean;
	detail: {
		artist: {
			name: string;
		};
		tracks: {
			data: [{}];
		};
	};
}

interface Action {
	type: string;
	payload: any;
}

const initialState: AlbumState = {
	isLoading: false,
	detail: { artist: { name: "" }, tracks: { data: [{}] } },
};

export default (state = initialState, action: Action) => {
	switch (action.type) {
		case albumActionTypes.GET_ALBUM_DETAIL:
			return { ...state, detail: action.payload };
		case albumActionTypes.SET_LOADING_ALBUM:
			return { ...state, isLoading: action.payload };
		default:
			return state;
	}
};
