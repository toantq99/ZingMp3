// Libs
import React from "react";
// Types
import { Comment } from "@constants/types/songDetailTypes";
// SCSS
import "./style.scss";

const CommentContent: React.FC<{ cmt: Comment }> = ({ cmt }) => {
	return (
		<div className="comment-content-wrapper">
			<h3 className="info">
				{cmt.author.name}
				<small>{cmt.date}</small>
			</h3>
			<div>{cmt.text}</div>
		</div>
	);
};

export default CommentContent;
