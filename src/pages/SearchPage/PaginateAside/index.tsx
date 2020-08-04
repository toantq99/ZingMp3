import React from "react";
import { PaginateProps } from "../PaginateBot";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import { Button } from "antd";
import { useEventListener } from "@hooks/useEventListener";
import "./style.scss";
const PaginateAside: React.FC<PaginateProps> = ({
	total,
	page,
	pageSize,
	query,
	pageChangeHandler,
}) => {
	const hasNext = page * pageSize < total;
	const hasPrevious = page > 1;
	useEventListener("keydown", (e: KeyboardEvent) => {
		if (e.keyCode === 33 && hasNext) {
			pageChangeHandler(query, page + 1, pageSize);
		} else if (e.keyCode === 34 && hasPrevious) {
			pageChangeHandler(query, page - 1, pageSize);
		}
	});

	return (
		<div className="paginate-aside-wrapper">
			<Button
				type="primary"
				shape="circle"
				icon={<LeftCircleFilled />}
				disabled={!hasPrevious}
				size="large"
				title="Trang trước"
				onClick={() => pageChangeHandler(query, page - 1, pageSize)}
			/>
			<Button
				type="primary"
				shape="circle"
				icon={<RightCircleFilled />}
				disabled={!hasNext}
				size="large"
				title="Trang sau"
				onClick={() => pageChangeHandler(query, page + 1, pageSize)}
			/>
		</div>
	);
};
export default PaginateAside;
