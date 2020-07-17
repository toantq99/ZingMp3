import React from "react";

export default function Partner() {
	return (
		<div className="d-flex justify-bw align-center">
			<h3 className="text-upper">Đối tác</h3>
			<div>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
					<img
						key={item}
						src="https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/doi-tac/universal.jpeg"
						alt="Universal"
						width={76}
						height={43}
						style={{ border: "1px solid black", margin: "0 3px" }}
					/>
				))}
			</div>
		</div>
	);
}
