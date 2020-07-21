import React from "react";
import "./style.scss";
export default function NewsHeader({ content }) {
	return (
		<div className="news-header">
			<span>{content}</span>
		</div>
	);
}
