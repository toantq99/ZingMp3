import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	PlusOutlined,
	DownloadOutlined,
	ShareAltOutlined,
	DeleteFilled,
} from "@ant-design/icons";
import "./style.scss";

import { addFav, removeFav } from "@actions/favListAction";
import { SongDetail } from "@constants/types/songDetailTypes";
import { RootState } from "@constants/state";

interface Props {
	item: SongDetail;
	size?: string;
}

const ButtonGroup: React.FC<Props> = ({ item, size }) => {
	const dispatch = useDispatch();
	const isAdded = useSelector((state: RootState) =>
		state.favList.includes(item.id)
	);

	return (
		<span className={size ? "large" : "small"}>
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
			<button className="btn-icon" title="Tải xuống" disabled>
				<DownloadOutlined />
			</button>
			<a href={item.link} target="_blank" rel="noopener noreferrer">
				<button className="btn-icon" title="Liên kết">
					<ShareAltOutlined />
				</button>
			</a>
		</span>
	);
};
export default ButtonGroup;
