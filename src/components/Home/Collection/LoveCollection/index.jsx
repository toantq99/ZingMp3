import React from "react";
import CollectionItem from "../CollectionItem";
import { Row } from "antd";

const collection = new Array(8);
collection.fill({ name: "Nghe là muốn... yêu ngay" });

export default function LoveCollection() {
	return (
		<div>
			<h2 className="text-upper">Yêu thì có sao</h2>
			<Row gutter={[16, 16]}>
				{collection.map((item, id) => (
					<CollectionItem
						key={id}
						item={item}
						width={150}
						height={150}
						src="https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/e/4/a/ce4ad9f00a799de5b4aa76b911f347c3.jpg"
					/>
				))}
			</Row>
		</div>
	);
}
