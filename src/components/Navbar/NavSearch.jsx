import React from "react";

export default function NavSearch() {
	return (
		<span className="d-flex bg-light align-center nav-search">
			<input type="text" placeholder="Nhập nội dung cần tìm" />
			<button>
				<i className="material-icons">search</i>
			</button>
		</span>
	);
}
