// Libs
import React from "react";
import { Pagination } from "antd";
// SCSS
import "./style.scss";
import { usePageChangeHandler } from "@hooks/usePageChangeHandler";
export interface PaginateProps {
	total: number;
	page: number;
	pageSize: number;
	query: string;
}

const PaginateBot: React.FC<PaginateProps> = ({
	total,
	page,
	pageSize,
	query,
}) => {
	const pageChangeHandler = usePageChangeHandler();
	return (
		<Pagination
			total={total}
			showSizeChanger
			showQuickJumper
			current={page}
			defaultPageSize={pageSize}
			showTotal={() => `Tổng số ${total} kết quả`}
			onChange={(_page: number, _pageSize: number = pageSize) =>
				pageChangeHandler(query, _page, _pageSize)
			}
			onShowSizeChange={(_currentSize, newSize) =>
				pageChangeHandler(query, page, newSize)
			}
			className="paginate-bot-wrapper"
		/>
	);
};
export default PaginateBot;
