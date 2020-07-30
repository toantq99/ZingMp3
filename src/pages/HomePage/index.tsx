import React from "react";
import CarouselBanner from "./dumps/CarouselBanner";
import Chart from "./mains/Chart";
import CollectionList from "./mains/CollectionList";
import SuggestList from "./mains/SuggestList";
import WeekChartList from "./mains/WeekChartList";
import HotArtist from "./mains/HotArtist";
import HotTopic from "./components/HotTopic";
import News from "./components/News";
import Partner from "./dumps/Partner";

import "./style.scss";

const HomePage: React.FC = () => {
	return (
		<div className="home-page-wrapper">
			<div className="col-span-2">
				<div className="section">
					<CarouselBanner />
				</div>
				<div className="section">
					<Chart />
				</div>
				<div className="section">
					<CollectionList />
				</div>
				<div className="section">
					<SuggestList />
				</div>
				<div className="section">
					<HotArtist />
				</div>
			</div>
			<div className="col-span-1">
				<div className="section">
					<HotTopic />
				</div>
				<div className="section">
					<WeekChartList />
				</div>
				<div className="section">
					<News />
				</div>
			</div>
			<div className="col-span-3">
				<Partner />
			</div>
		</div>
	);
};

export default HomePage;
