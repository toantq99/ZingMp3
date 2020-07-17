// import React from "react";
// import Tag from "../../Static/Tag";
// import { datetimeFormat } from "../../../utils/index";
// import Top5List from "./Top5List";
// import Top3List from "./Top3List";

// export default function Chart() {
// 	return (
// 		<div className="col-0 chart-container">
// 			<div className="col-0 p-relative">
// 				<img
// 					src="https://www.xmple.com/wallpaper/gradient-black-violet-linear-2048x1152-c2-351044-0b040d-a-60-f-14.svg"
// 					height={280}
// 					width={650}
// 					alt="chart"
// 				/>
// 				<span
// 					className="p-absolute d-flex"
// 					style={{ top: 10, left: 10, alignItems: "baseline" }}
// 				>
// 					<Tag content="#zingchart" />
// 					<small className="text-gray" style={{ marginLeft: 10 }}>
// 						{datetimeFormat(new Date())}{" "}
// 						<span
// 							className="material-icons icon text-light"
// 							style={{ marginTop: -3 }}
// 						>
// 							play_circle_outline
// 						</span>
// 					</small>
// 				</span>
// 				<Top3List />
// 			</div>
// 			<div className="col-0">
// 				<Top5List />
// 			</div>
// 		</div>
// 	);
// }

import React from "react";
import Tag from "../../Static/Tag";
import { datetimeFormat } from "../../../utils/index";
import Top5List from "./Top5List";
import Top3List from "./Top3List";
import "../../../css/Chart.css";

export default function Chart() {
	return (
		<div className="col-0 ">
			<div className="col-0 chart-container">
				<div style={{ alignItems: "baseline" }}>
					<Tag content="#zingchart" />
					<small className="text-gray" style={{ marginLeft: 10 }}>
						{datetimeFormat(new Date())}{" "}
						<span
							className="material-icons icon text-light"
							style={{ marginTop: -3 }}
						>
							play_circle_outline
						</span>
					</small>
				</div>
				<div className="chart-top3-list">
					<Top3List />
				</div>
			</div>
			<div className="col-0">
				<Top5List />
			</div>
		</div>
	);
}
