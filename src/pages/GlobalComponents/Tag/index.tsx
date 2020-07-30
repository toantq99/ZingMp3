import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Tag: React.FC<{ content: string }> = ({ content }) => {
	return (
		<Link to="/" className="tag">
			{content}
		</Link>
	);
};
export default Tag;
