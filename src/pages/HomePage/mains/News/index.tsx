import React from "react";
import TitleWithArrow from "@GlobalComponents/mains/TitleWithArrow";
import NewsItem from "@HomePage/components/NewsItem";
import NewsHeader from "@HomePage/components/NewsHeader";

const News: React.FC = () => {
	return (
		<div className="news-wrapper">
			<TitleWithArrow title="Tin tức âm nhạc" />
			<NewsHeader
				content={"Giải mã kỷ lục 500 triệu lượt nghe của ‘Sóng gió’"}
			/>
			{[1, 2, 3, 4, 5].map((item) => (
				<NewsItem key={item} />
			))}
		</div>
	);
};
export default News;
