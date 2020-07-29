export interface SongDetail {
	id: string;
	link: string;
	artist: Singer;
}
// export interface AlbumAction {
// 	type: string;
// 	payload: AlbumDetail;
// }
export interface SongDetailState {
	song: {
		isLoading: boolean;
		data: SongDetail;
	};
	similar: {
		isLoading: boolean;
		data: SongDetail[];
	};
	comments: {
		isLoading: boolean;
		data: [];
	};
}

export interface Singer {
	id: string;
	name: string;
	link: string;
	picture: string;
}
