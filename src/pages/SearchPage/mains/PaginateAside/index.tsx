import React from "react";
import { PaginateProps } from "../PaginateBot";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import { useEventListener } from "@hooks/useEventListener";
import "./style.scss";
import PaginateButton from "@SearchPage/components/PaginateButton";
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
			<PaginateButton
				icon={<LeftCircleFilled />}
				title="Trang trước"
				onClick={() => pageChangeHandler(query, page - 1, pageSize)}
				disabled={!hasPrevious}
			/>
			<PaginateButton
				icon={<RightCircleFilled />}
				title="Trang sau"
				onClick={() => pageChangeHandler(query, page + 1, pageSize)}
				disabled={!hasNext}
			/>
		</div>
	);
};
export default PaginateAside;
