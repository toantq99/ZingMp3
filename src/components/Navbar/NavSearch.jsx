import React from "react";

export default function Search() {
	return (
		<span
			className="d-flex bg-light align-center"
			style={{
				height: 30,
				width: 355,
			}}
		>
			<input
				type="text"
				placeholder="Nhập nội dung cần tìm"
				style={{
					width: 321,
					height: 30,
					border: "none",
					outline: "none",
					padding: "0 10px",
					background: "padding-box",
				}}
			/>
			<button
				style={{
					width: 34,
					border: "none",
					background: "none",
					padding: 0,
					display: "inline-block",
				}}
			>
				<i className="material-icons">search</i>
			</button>
		</span>
	);
}
