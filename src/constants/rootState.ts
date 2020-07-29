import { AlbumState } from "./albumTypes";
import { FavListState } from "./favListTypes";
import { SongDetailState } from "./songDetailTypes";
export interface RootState {
	search: {};
	album: AlbumState;
	detail: SongDetailState;
	home: {};
	favList: FavListState;
}
