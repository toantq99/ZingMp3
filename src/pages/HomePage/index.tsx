import React from "react";
import CarouselBanner from "./mains/CarouselBanner";
import Chart from "./mains/Chart";
import CollectionList from "./mains/CollectionList";
import SuggestList from "./mains/SuggestList";
import WeekChartList from "./mains/WeekChartList";
import HotArtist from "./mains/HotArtist";
import HotTopic from "./mains/HotTopic";
import News from "./mains/News";
import Partner from "./mains/Partner";

import "./style.scss";

const HomePage: React.FC = () => {
	return (
		<div className="home-page-wrapper">
			<CarouselBanner />
			<Chart />
			<CollectionList />
			<SuggestList />
			<HotArtist />
			<HotTopic />
			<WeekChartList />
			<News />
			<Partner />
		</div>
	);
};

export default HomePage;
