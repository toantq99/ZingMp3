import {
	detailActionTypes,
	SongDetailAction,
	SimilarSongAction,
	CommentAction,
	EmptyAction,
} from "@constants/types/songDetailTypes";
import { SongDetailState } from "@constants/state";
import { LoadingAction } from "@constants/types/loadingTypes";
import { emptySongDetail } from "@constants/emptyValue/songDetail";

const initialState: SongDetailState = {
	song: {
		isLoading: false,
		data: emptySongDetail,
	},
	similar: { isLoading: false, data: [] },
	comments: { isLoading: false, data: [] },
};

export default (
	state = initialState,
	action:
		| LoadingAction
		| SongDetailAction
		| SimilarSongAction
		| CommentAction
		| EmptyAction
) => {
	switch (action.type) {
		case detailActionTypes.GET_SONG_DETAIL:
			return {
				...state,
				song: {
					...state.song,
					data: action.payload,
				},
			};
		case detailActionTypes.SET_LOADING_SONG_DETAIL:
			return {
				...state,
				song: {
					...state.song,
					isLoading: action.payload,
				},
			};
		case detailActionTypes.GET_SIMILAR_SONG:
			return {
				...state,
				similar: {
					...state.similar,
					data: action.payload,
				},
			};
		case detailActionTypes.SET_LOADING_SIMILAR:
			return {
				...state,
				similar: {
					...state.similar,
					isLoading: action.payload,
				},
			};
		case detailActionTypes.GET_COMMENTS:
			return {
				...state,
				comments: {
					...state.comments,
					data: action.payload,
				},
			};
		case detailActionTypes.SET_LOADING_COMMENTS:
			return {
				...state,
				comments: {
					...state.comments,
					isLoading: action.payload,
				},
			};
		case detailActionTypes.EMPTY_DETAIL:
			return initialState;
		default:
			return state;
	}
};
