import { AlbumDetail, Album } from "../types/albumTypes";
import { SongDetail, Singer, Comment } from "../types/songDetailTypes";
import { FavList } from "../types/favListTypes";
export type RootState = {
	search: SearchState;
	album: AlbumState;
	detail: SongDetailState;
	home: HomeState;
	favList: FavListState;
};

export interface AlbumState {
	isLoading: boolean;
	detail: AlbumDetail;
}

export type HomeState = {
	suggestList: {
		isLoading: boolean;
		[key: string]: any;
	};
	collection: {
		isLoading: boolean;
		[key: string]: any;
	};
	chart: {
		songChart: {
			isLoading: boolean;
			data: SongDetail[];
		};
		artistChart: {
			isLoading: boolean;
			data: Singer[];
		};
	};
	weekChart: {
		isLoading: boolean;
		albums: Album[];
		tracks: SongDetail[];
	};
};

export type SearchState = {
	isLoading: boolean;
	data: {
		data: SongDetail[];
		total: number;
	};
};

export type SongDetailState = {
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
		data: Comment[];
	};
};
export type FavListState = FavList;
