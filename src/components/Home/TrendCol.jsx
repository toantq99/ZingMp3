import React from "react";
import HotTopicList from "./HotTopic/HotTopicList";
import JustForYou from "./JustForYou";
import WeekChart from "./WeekChart/WeekChart";
import NewsList from "./News/NewsList";

export default function TrendCol() {
	return (
		<div>
			<div className="col-0 ">
				<JustForYou />
			</div>
			<div className="col-0">
				<HotTopicList />
			</div>
			<div className="col-0">
				<WeekChart name="#zingchart tuần - bài hát" />
			</div>
			<div className="col-0">
				<WeekChart name="#zingchart tuần - mv" type="mv" />
			</div>
			<div className="col-0">
				<WeekChart name="#zingchart tuần - album" type="album" />
			</div>
			<div className="col-0">
				<NewsList />
			</div>
		</div>
	);
}
