import React from "react";
import "./style.scss";

export default function NavSearch() {
	return (
		<span className="d-flex bg-light text-dark align-center nav-search">
			<input type="text" placeholder="Nhập nội dung cần tìm" />
			<button>
				<i className="material-icons">search</i>
			</button>
		</span>
		// <Input.Search placeholder="input search text" onSearch={() => {}} />
	);
}
