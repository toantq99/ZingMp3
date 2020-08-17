// Libs
import React from "react";
// Components
import CommentContent from "../CommentContent";
// Types
import { Comment } from "@constants/DataTypes/TrackTypes";
// SCSS
import "./style.scss";

const CommentItem: React.FC<{ cmt: Comment }> = ({ cmt }) => {
	return (
		<div className="comment-item-wrapper">
			<img
				src={cmt.author.picture}
				alt="avatar"
				className="avatar"
				loading="lazy"
			/>
			<CommentContent cmt={cmt} />
		</div>
	);
};

export default CommentItem;
