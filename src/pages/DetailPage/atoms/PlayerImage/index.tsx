import React from "react";

const PlayerImage = () => {
	return (
		<img
			src={
				(song as SongDetail).album
					? (song as SongDetail).album.cover_medium
					: cover
			}
			alt="spinner"
		/>
	);
};

export default PlayerImage;
