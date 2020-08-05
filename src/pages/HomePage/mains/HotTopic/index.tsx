import React from "react";

import HotTopicItem from "@HomePage/components/HotTopicItem";
import TitleWithArrow from "@GlobalComponents/mains/TitleWithArrow";
import HotTopicLink from "@HomePage/atoms/HotTopicLink";

const HotTopic: React.FC = () => {
	return (
		<div className="hot-topic-wrapper">
			<TitleWithArrow title="CHỦ ĐỀ HOT" />
			{[1, 2, 3, 4, 5].map((item, id) => (
				<HotTopicItem key={id} item={item} />
			))}
			<HotTopicLink />
		</div>
	);
};

export default HotTopic;
