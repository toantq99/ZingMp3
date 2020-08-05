import React from "react";
import { Pagination } from "antd";

export interface PaginateProps {
	total: number;
	page: number;
	pageSize: number;
	query: string;
	pageChangeHandler: (
		_query: string,
		_pageToGo: number,
		_pageSize?: number
	) => void;
}

const PaginateBot: React.FC<PaginateProps> = ({
	total,
	page,
	pageSize,
	query,
	pageChangeHandler,
}) => {
	return (
		<Pagination
			total={total}
			showSizeChanger
			showQuickJumper
			current={page}
			defaultPageSize={pageSize}
			showTotal={() => `Tổng số ${total} kết quả`}
			onChange={(_page: number, _pageSize?: number) =>
				pageChangeHandler(query, _page, _pageSize)
			}
			onShowSizeChange={(_currentSize, newSize) =>
				pageChangeHandler(query, page, newSize)
			}
		/>
	);
};
export default PaginateBot;
