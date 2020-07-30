import React from "react";
import { Input } from "antd";
import { useHistory } from "react-router-dom";

const NavSearch: React.FC = () => {
	const history = useHistory();
	return (
		<Input.Search
			placeholder="Nhập nội dung cần tìm"
			onSearch={(value) =>
				history.push(`/tim-kiem/?query=${value}&page=1&limit=20`)
			}
		/>
	);
};
export default NavSearch;
