import React from "react";
import {
	PlusOutlined,
	DownloadOutlined,
	ShareAltOutlined,
} from "@ant-design/icons";
import "./style.scss";

export default function ButtonGroup() {
	return (
		<span>
			<button className="btn-icon" title="Thêm vào danh sách yêu thích">
				<PlusOutlined />
			</button>
			<button className="btn-icon" title="Tải xuống">
				<DownloadOutlined />
			</button>
			<button className="btn-icon" title="Chia sẻ">
				<ShareAltOutlined />
			</button>
		</span>
	);
}
