import React from "react";

export default function TrackInfo({ track, album }) {
	return (
		<div className="album-info-wrapper">
			<h2>
				{track.title} - {(track.artist || {}).name}
			</h2>
			<div className="info">
				<span>Album: </span>
				<strong>{album.title}</strong>
			</div>
			<div className="info">
				<span>Release Date: </span>
				<strong>{album.release_date}</strong>
			</div>
		</div>
	);
}
