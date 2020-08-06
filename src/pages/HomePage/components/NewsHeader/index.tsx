// Libs
import React from "react";
// SCSS
import "./style.scss";

const NewsHeader: React.FC<{ content: string }> = ({ content }) => {
	return (
		<div className="news-header-wrapper">
			<img
				src="https://znews-photo.zadn.vn/w480/Uploaded/wyhktpu/2020_07_15/Song_gio_thumb.jpg"
				alt="news-header"
			/>
			<div>{content}</div>
		</div>
	);
};

export default NewsHeader;
