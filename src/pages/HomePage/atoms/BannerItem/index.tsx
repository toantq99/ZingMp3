// Libs
import React from "react";

const BannerItem: React.FC<{ item: { image: string } }> = ({ item }) => {
	return (
		<img
			src={item.image}
			alt="main-banner"
			width="100%"
			className="banner-item-wrapper"
		/>
	);
};

export default BannerItem;
