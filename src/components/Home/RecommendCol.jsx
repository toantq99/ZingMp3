import React from "react";
import Banner from "./Banner";
import Chart from "./Chart/Chart";
import LoveCollection from "./Collection/LoveCollection";
import HotVideoCollection from "./Collection/HotVideoCollection";
import HotAlbumCollection from "./Collection/HotAlbumCollection";
import SongList from "./SongList/SongList";
import HotArtist from "./Collection/HotArtist";
export default function RecommendCol() {
	return (
		<div>
			<Banner />
			<Chart />
			<LoveCollection />
			<HotVideoCollection />
			<HotAlbumCollection />
			<div className="row">
				<div
					className="col col-0-5"
					style={{ paddingRight: 15, borderRight: "1px solid gray" }}
				>
					<SongList name="Nhạc việt hot" />
				</div>
				<div className="col col-0-5">
					<SongList name="Nhạc việt mới" />
				</div>
			</div>
			<HotArtist />
		</div>
	);
}
