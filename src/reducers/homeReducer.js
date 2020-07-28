import { homeActionTypes } from "../actions/types";

const initialState = {
	suggestList: { isLoading: false },
	collection: { isLoading: false },
	chart: {
		songChart: { data: [], isLoading: false },
		artistChart: { data: [], isLoading: false },
	},
	weekChart: {},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case homeActionTypes.suggest.GET_SUGGEST:
			return {
				...state,
				suggestList: {
					...state.suggestList,
					[action.payload.query]: action.payload.data,
				},
			};
		case homeActionTypes.suggest.SET_LOADING_SUGGEST:
			return {
				...state,
				suggestList: {
					...state.suggestList,
					isLoading: action.payload,
				},
			};

		case homeActionTypes.collection.GET_COLLECTION:
			return {
				...state,
				collection: {
					...state.collection,
					[action.payload.query]: action.payload.data,
				},
			};
		case homeActionTypes.collection.SET_LOADING_COLLECTION:
			return {
				...state,
				collection: {
					...state.collection,
					isLoading: action.payload,
				},
			};

		case homeActionTypes.chart.GET_SONG_CHART:
			return {
				...state,
				chart: {
					...state.chart,
					songChart: { ...state.chart.songChart, data: action.payload },
				},
			};
		case homeActionTypes.chart.SET_LOADING_SONGCHART:
			return {
				...state,
				chart: {
					...state.chart,
					songChart: { ...state.chart.songChart, isLoading: action.payload },
				},
			};

		case homeActionTypes.chart.GET_ARTIST_CHART:
			return {
				...state,
				chart: {
					...state.chart,
					artistChart: { ...state.chart.artistChart, data: action.payload },
				},
			};
		case homeActionTypes.chart.SET_LOADING_ARTISTCHART:
			return {
				...state,
				chart: {
					...state.chart,
					artistChart: {
						...state.chart.artistChart,
						isLoading: action.payload,
					},
				},
			};

		case homeActionTypes.weekChart.GET_WEEK_CHART:
			return {
				...state,
				weekChart: {
					...state.weekChart,
					[action.payload.type]: action.payload.data,
				},
			};

		case homeActionTypes.weekChart.SET_LOADING_WEEKCHART:
			return {
				...state,
				weekChart: {
					...state.weekChart,
					isLoading: action.payload,
				},
			};
		default:
			return state;
	}
};
