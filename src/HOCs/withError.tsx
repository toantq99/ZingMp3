import React from "react";
import { Result } from "antd";
import { FetchError } from "@constants/DataTypes/HomeTypes";

const withError = (
	error: FetchError | undefined,
	title?: string,
	key?: number,
	height?: number
) => (Component: any) => {
	if (error)
		return (
			<div
				className="empty-wrapper"
				key={key}
				style={{
					margin: "20px 0",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					height: height || 300,
				}}
			>
				<Result
					status="error"
					title={title}
					subTitle={`Code: ${error.code} - ${error.type}: ${error.message}`}
				/>
				,
			</div>
		);
	else return Component;
};
export default withError;
