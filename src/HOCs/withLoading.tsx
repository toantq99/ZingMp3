import React from "react";
import { Skeleton } from "antd";

const withLoading = (isLoading: boolean, key?: number, height?: number) => (
	Component: any
) => {
	if (isLoading)
		return (
			<div
				className="spin-wrapper"
				style={{
					margin: "20px 0",
					height: height || 300,
				}}
				key={key}
			>
				<Skeleton active />
			</div>
		);
	else return Component;
};
export default withLoading;
