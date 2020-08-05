import React from "react";
import { Progress } from "antd";
import { SmileTwoTone } from "@ant-design/icons";
import { formatDuration } from "@AlbumPage/utils";

const TrackProgress: React.FC<> = () => (
	<Progress
		type="circle"
		percent={(currentTime * 100) / duration}
		width={40}
		format={() =>
			currentTime < duration ? (
				formatDuration(currentTime)
			) : (
				<SmileTwoTone twoToneColor="#52c41a" />
			)
		}
	/>
);

export default TrackProgress;
