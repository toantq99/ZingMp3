import React from "react";
import "./style.scss";
import { Comment } from "@constants/types/songDetailTypes";
import CommentContent from "../CommentContent";

interface Props {
	cmt: Comment;
}

const CommentItem: React.FC<Props> = ({ cmt }) => {
	return (
		<div className="comment-item-wrapper">
			<img src={cmt.author.picture} alt="avatar" id="avatar" />
			<CommentContent />
		</div>
	);
};

export default CommentItem;
