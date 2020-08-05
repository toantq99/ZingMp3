import React from "react";

const WCharHeaderImage = () => {
	return (
		<div
			className="wchart-header-image-wrapper"
			style={{
				background: `linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url("${
					item.type === "track"
						? (item as SongDetail).album.cover
						: (item as Album).cover
				}")`,
			}}
		></div>
	);
};
export default WCharHeaderImage;
