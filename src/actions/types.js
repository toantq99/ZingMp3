const homeActionTypes = {
	suggest: {
		GET_HOT: "GET_HOT",
		GET_NEW: "GET_NEW",
	},
	collection: {
		GET_COLLECTION: "GET_COLLECTION",
	},
	chart: {
		GET_CHART_TOP3: "GET_CHART_TOP3",
		GET_CHART_TOP5: "GET_CHART_TOP5",
	},
	weekChart: {
		GET_WEEK_CHART: "GET_WEEK_CHART",
	},
};

const detailActionTypes = {
	GET_SONG_DETAIL: "GET_SONG_DETAIL",
	GET_SIMILAR_SONG: "GET_SIMILAR_SONG",
	GET_COMMENTS: "GET_COMMENTS",
};

const favActionTypes = {
	ADD_FAV: "ADD_FAV",
	REMOVE_FAV: "REMOVE_FAV",
	GET_FAV: "GET_FAV",
};

export { homeActionTypes, detailActionTypes, favActionTypes };
