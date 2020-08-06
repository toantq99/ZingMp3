// Libs
import React from "react";
// Components
import TitleWithArrow from "@GlobalComponents/mains/TitleWithArrow";
import HotTopicItem from "@HomePage/components/HotTopicItem";
import HotTopicLink from "@HomePage/atoms/HotTopicLink";
// SCSS
import "./style.scss";

const HotTopic: React.FC = () => {
	return (
		<div className="hot-topic-wrapper">
			<TitleWithArrow title="CHỦ ĐỀ HOT" />
			{[1, 2, 3, 4, 5].map((id) => (
				<HotTopicItem key={id} />
			))}
			<HotTopicLink />
		</div>
	);
};

export default HotTopic;
