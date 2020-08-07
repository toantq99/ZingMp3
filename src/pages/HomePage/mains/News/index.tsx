// Libs
import React from "react";
// Components
import TitleWithArrow from "@GlobalComponents/mains/TitleWithArrow";
import NewsHeader from "@HomePage/components/NewsHeader";
import NewsItem from "@HomePage/components/NewsItem";
// SCSS
import "./style.scss";

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
