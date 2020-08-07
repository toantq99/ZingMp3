// Libs
import React from "react";
// Components
import CommentItem from "@DetailPage/components/CommentItem";
// Types
import { Comment } from "@constants/types/songDetailTypes";

interface Props {
	list: Comment[];
}

const Comments: React.FC<Props> = ({ list }) => {
	return (
		<div className="comments-wrapper">
			<h2>Bình luận</h2>
			{list.map((cmt, id) => (
				<CommentItem cmt={cmt} key={id} />
			))}
		</div>
	);
};

export default Comments;
