import { homeActionTypes } from "../actions/types";

const initialState = {
	suggestList: {},
	collection: {},
	chart: { songChart: null, artistChart: null },
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
		case homeActionTypes.collection.GET_COLLECTION:
			return {
				...state,
				collection: {
					...state.collection,
					[action.payload.query]: action.payload.data,
				},
			};

		case homeActionTypes.chart.GET_SONG_CHART:
			return {
				...state,
				chart: { ...state.chart, songChart: action.payload },
			};
		case homeActionTypes.chart.GET_ARTIST_CHART:
			return {
				...state,
				chart: {
					...state.chart,
					artistChart: action.payload,
				},
			};
		case homeActionTypes.weekChart.GET_WEEK_CHART:
			return {
				...state,
				weekChart: {
					...state.weekChart,
					[action.payload.name]: action.payload.data,
				},
			};
		default:
			return state;
	}
};
