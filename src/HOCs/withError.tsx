import React from "react";
import { Empty } from "antd";
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
				style={{
					margin: "20px 0",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					height: height || 300,
				}}
			>
				<Empty
					key={key}
					image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
					imageStyle={{
						height: 60,
					}}
					description={
						<>
							<strong>{title}</strong>
							<br />
							<strong>Không có dữ liệu</strong>
							<br />
							Code: {error.code} - {error.type}: {error.message}
						</>
					}
				/>
			</div>
		);
	else return Component;
};
export default withError;
