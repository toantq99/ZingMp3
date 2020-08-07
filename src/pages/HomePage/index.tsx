// Libs
import React from "react";
// Components
import CarouselBanner from "./mains/CarouselBanner";
import Chart from "./mains/Chart";
import CollectionList from "./mains/CollectionList";
import SuggestList from "./mains/SuggestList";
import HotArtist from "./mains/HotArtist";
import JustForYou from "./mains/JustForYou";
import HotTopic from "./mains/HotTopic";
import WeekChartList from "./mains/WeekChartList";
import News from "./mains/News";
import Partner from "./mains/Partner";
// SCSS
import "./style.scss";

const HomePage: React.FC = () => {
	return (
		<div className="home-page-wrapper">
			<div className="home-left">
				<CarouselBanner />
				<Chart />
				<CollectionList />
				<SuggestList />
				<HotArtist />
			</div>
			<div className="home-right">
				<JustForYou />
				<HotTopic />
				<WeekChartList />
				<News />
			</div>
			<div className="home-bot">
				<Partner />
			</div>
		</div>
	);
};

export default HomePage;
