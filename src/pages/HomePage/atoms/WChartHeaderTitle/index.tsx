import React from "react";
const WChartHeaderItemTitle = () => {
	return (
		<Link
			to={item.type === "track" ? `/bai-hat/${item.id}` : `/album/${item.id}`}
		>
			{type === WeekChartType.Track
				? (item as SongDetail).title_short
				: (item as Album).title}
		</Link>
	);
};

export default WChartHeaderItemTitle;
