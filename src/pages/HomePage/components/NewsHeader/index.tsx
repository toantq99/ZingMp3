import React from "react";
import "./style.scss";
const NewsHeader: React.FC<{ content: string }> = ({ content }) => {
	return (
		<div className="news-header-wrapper">
			<span>{content}</span>
		</div>
	);
};

export default NewsHeader;
