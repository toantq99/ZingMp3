// Libs
import React from "react";
import { Progress } from "antd";
import { SmileTwoTone } from "@ant-design/icons";
// Utils
import { formatDuration } from "@AlbumPage/utils";

interface Props {
	currentTime: number;
	duration: number;
}

const TrackProgress: React.FC<Props> = ({ currentTime, duration }) => (
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
