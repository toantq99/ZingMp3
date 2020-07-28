import React from "react";

export default function SongInfo({ song }) {
	return (
		<>
			<h2>
				{song.title} - {song.artist.name}
			</h2>
			<div className="info">
				<span>Album: </span>
				<span>{song.album.title}</span>
			</div>
			<div className="info">
				<span>Release Date: </span>
				<span>{song.release_date}</span>
			</div>
		</>
	);
}
