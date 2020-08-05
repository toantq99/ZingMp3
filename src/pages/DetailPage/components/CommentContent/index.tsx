import React from "react";

const CommentContent = () => {
	return (
		<div className="comment-content-wrapper">
			<h3>
				{cmt.author.name}
				<small>{cmt.date}</small>
			</h3>
			<div>{cmt.text}</div>
		</div>
	);
};

export default CommentContent;
