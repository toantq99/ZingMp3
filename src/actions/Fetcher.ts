import axios from "axios";

interface Parameter {
	url: string;
	params?: {
		q?: string;
		limit?: number;
		index?: number;
	};
	useProxy?: boolean;
}
export const fetcher = ({ url, params, useProxy = false }: Parameter) =>
	axios({
		method: "GET",
		url: useProxy ? proxy + url : url,
		headers: {
			"content-type": "application/octet-stream",
			"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
			"x-rapidapi-key": "3319f523f7msh49e3d6c5c3ee4b4p19f9fajsn66e90ad6334c",
			useQueryString: true,
		},
		params: params,
	});

export const proxy = "https://sheltered-inlet-83781.herokuapp.com/";
