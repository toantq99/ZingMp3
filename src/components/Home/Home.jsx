import React from "react";
import RecommendCol from "./RecommendCol";
import TrendCol from "./TrendCol";
import Partner from "./Partner";

export default function Home() {
	return (
		<div>
			<div className="row">
				<div className="col col-2">
					<RecommendCol />
				</div>

				<div className="col col-1">
					<TrendCol />
				</div>
			</div>
			<div className="row">
				<div className="col col-0" style={{ padding: 10 }}>
					<Partner />
				</div>
			</div>
		</div>
	);
}
