import React from "react";

const PlayerInfo = () => {
	return (
		<div className="player-info-wrapper">
			<h2>{song.title}</h2>
			<h4>{song.artist ? song.artist.name : null}</h4>
		</div>
	);
};

export default PlayerInfo;
