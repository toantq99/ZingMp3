import { HomeState } from "@constants/State";
import { EMPTY_ALBUM } from "@constants/EmptyValues/Album";
import { EMPTY_TRACK_DETAIL } from "@constants/EmptyValues/Track";
import { ActionType_Home } from "@constants/ActionTypes/HomeActions";

const initialState: HomeState = {
	suggestList: {},
	collection: {},
	trackChart: { data: [], isLoading: false },
	artistChart: { data: [], isLoading: false },
	weekChart: {
		albums: {
			isLoading: false,
			data: [EMPTY_ALBUM],
		},
		tracks: {
			isLoading: false,
			data: [EMPTY_TRACK_DETAIL],
		},
	},
};

export default (state = initialState, action: any) => {
	switch (action.type) {
		case ActionType_Home.suggestList.GET_SUGGESTLIST:
			return {
				...state,
				suggestList: {
					...state.suggestList,
					[action.payload.query]: {
						...state.suggestList[action.payload.query],
						data: action.payload.data,
						error: action.payload.error,
					},
				},
			};
		case ActionType_Home.suggestList.SET_LOADING_SUGGESTLIST:
			return {
				...state,
				suggestList: {
					...state.suggestList,
					[action.payload.query]: {
						...state.suggestList[action.payload.query],
						isLoading: action.payload.isLoading,
					},
				},
			};
		case ActionType_Home.collection.GET_COLLECTION:
			return {
				...state,
				collection: {
					...state.collection,
					[action.payload.query]: {
						...state.collection[action.payload.query],
						data: action.payload.data,
						error: action.payload.error,
					},
				},
			};
		case ActionType_Home.collection.SET_LOADING_COLLECTION:
			return {
				...state,
				collection: {
					...state.collection,
					[action.payload.query]: {
						...state.collection[action.payload.query],
						isLoading: action.payload.isLoading,
					},
				},
			};
		case ActionType_Home.trackChart.GET_TRACKCHART:
			return {
				...state,
				trackChart: {
					...state.trackChart,
					data: action.payload.data,
					error: action.payload.error,
				},
			};
		case ActionType_Home.trackChart.SET_LOADING_TRACKCHART:
			return {
				...state,
				trackChart: {
					...state.trackChart,
					isLoading: action.payload,
				},
			};

		case ActionType_Home.artistChart.GET_ARTISTCHART:
			return {
				...state,
				artistChart: {
					...state.artistChart,
					data: action.payload.data,
					error: action.payload.error,
				},
			};
		case ActionType_Home.artistChart.SET_LOADING_ARTISTCHART:
			return {
				...state,
				artistChart: {
					...state.artistChart,
					isLoading: action.payload,
				},
			};
		case ActionType_Home.weekChart.GET_WEEKCHART_TRACKS:
			return {
				...state,
				weekChart: {
					...state.weekChart,
					tracks: {
						...state.weekChart.tracks,
						data: action.payload.data,
						error: action.payload.error,
					},
				},
			};
		case ActionType_Home.weekChart.SET_LOADING_WEEKCHART_TRACKS:
			return {
				...state,
				weekChart: {
					...state.weekChart,
					tracks: {
						...state.weekChart.tracks,
						isLoading: action.payload,
					},
				},
			};

		case ActionType_Home.weekChart.GET_WEEKCHART_ALBUMS:
			return {
				...state,
				weekChart: {
					...state.weekChart,
					albums: {
						...state.weekChart.albums,
						data: action.payload.data,
						error: action.payload.error,
					},
				},
			};
		case ActionType_Home.weekChart.SET_LOADING_WEEKCHART_ALBUMS:
			return {
				...state,
				weekChart: {
					...state.weekChart,
					albums: {
						...state.weekChart.albums,
						isLoading: action.payload,
					},
				},
			};
		default:
			return state;
	}
};
