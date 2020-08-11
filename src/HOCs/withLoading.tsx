import React from "react";
import { Spin } from "antd";

const withLoading = (isLoading: boolean, key?: number, height?: number) => (
	Component: any
) => {
	if (isLoading)
		return (
			<div
				className="spin-wrapper"
				style={{
					margin: "20px 0",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
					height: height || 300,
				}}
				key={key}
			>
				<Spin size="large" />
			</div>
		);
	else return Component;
};
export default withLoading;
