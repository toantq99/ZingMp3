// Libs
import React from "react";
import { Empty } from "antd";
// Components
import withFetching from "@HOCs/withFetching";
import CommentItem from "@DetailPage/components/CommentItem";
import TitleWithArrow from "@GlobalComponents/mains/TitleWithArrow";
// Types
import { Comment } from "@constants/DataTypes/TrackTypes";
import { IFetchAndLoading } from "@constants/State";

interface Props {
	list: IFetchAndLoading<Comment>;
}

const Comments: React.FC<Props> = ({ list }) => {
	const { data = [], error, isLoading = true } = list;
	return withFetching({ isLoading, error })(
		<div className="comments-wrapper">
			<TitleWithArrow title="Bình luận" />
			{data.length ? (
				data.map((cmt, id) => <CommentItem cmt={cmt} key={id} />)
			) : (
				<Empty />
			)}
		</div>
	);
};

export default Comments;
