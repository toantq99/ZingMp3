// Libs
import React from "react";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
// Components
import PaginateButton from "@SearchPage/components/PaginateButton";
// Types
import { PaginateProps } from "../PaginateBot";
// Hooks
import { useEventListener } from "@hooks/useEventListener";
// SCSS
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
		<span className="paginate-aside-wrapper">
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
		</span>
	);
};
export default PaginateAside;
