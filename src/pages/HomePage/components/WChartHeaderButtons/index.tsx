// Libs
import React, { useState } from "react";
import classNames from "classnames";
// SCSS
import "./style.scss";

const WChartHeaderButtons: React.FC = () => {
	const [active, setActive] = useState(0);
	return (
		<div className="wchart-header-buttons-wrapper">
			{["Việt Nam", "US-UK", "K-Pop"].map((item, id) => (
				<button
					key={id}
					className={classNames({ active: id === active })}
					onClick={() => setActive(id)}
				>
					{item}
				</button>
			))}
		</div>
	);
};

export default WChartHeaderButtons;
