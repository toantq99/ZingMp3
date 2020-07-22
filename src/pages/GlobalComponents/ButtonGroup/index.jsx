import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	PlusOutlined,
	DownloadOutlined,
	ShareAltOutlined,
	DeleteFilled,
} from "@ant-design/icons";
import "./style.scss";

import { addFav, removeFav } from "../../../actions/favListAction";

export default function ButtonGroup({ item }) {
	const dispatch = useDispatch();
	const isAdded = useSelector((state) => state.favList.includes(item.id));
	return (
		<span>
			{isAdded ? (
				<button
					className="btn-icon"
					title="Xóa khỏi danh sách yêu thích"
					onClick={() => dispatch(removeFav(item))}
				>
					<DeleteFilled />
				</button>
			) : (
				<button
					className="btn-icon"
					title="Thêm vào danh sách yêu thích"
					onClick={() => dispatch(addFav(item))}
				>
					<PlusOutlined />
				</button>
			)}

			<button className="btn-icon" title="Tải xuống">
				<DownloadOutlined />
			</button>
			<button className="btn-icon" title="Chia sẻ">
				<ShareAltOutlined />
			</button>
		</span>
	);
}
