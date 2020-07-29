import React from "react";
import { Link } from "react-router-dom";

export default function SongInfo({ song }) {
	return (
		<>
			<h2>
				{song.title} - {song.artist.name}
			</h2>
			<div className="info">
				<span>Album: </span>
				<span>
					<Link to={`/album/${song.album.id}`}>{song.album.title}</Link>
				</span>
			</div>
			<div className="info">
				<span>Release Date: </span>
				<span>{song.release_date}</span>
			</div>
		</>
	);
}
