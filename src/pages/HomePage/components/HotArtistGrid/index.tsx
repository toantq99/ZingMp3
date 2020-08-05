import React from "react";

const HotArtistGrid = () => {
	return (
		<div className="hot-artist-grid-wrapper">
			{rest.map((item, id) => (
				<HotArtistItem key={id} item={item} width={100} height={100} />
			))}
		</div>
	);
};

export default HotArtistGrid;
