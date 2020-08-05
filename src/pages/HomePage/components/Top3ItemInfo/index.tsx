import React from "react";

const Top3ItemInfo = () => {
	return (
		<div className="top3-item-info-wrapper">
			<img src={item.album.cover_small} alt="singer img" className="img" />
			<div className="info">
				<div className="title">{item.title_short}</div>
				<small>{item.artist.name}</small>
			</div>
		</div>
	);
};

export default Top3ItemInfo;
