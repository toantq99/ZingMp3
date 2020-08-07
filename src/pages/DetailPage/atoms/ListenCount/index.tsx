// Libs
import React from "react";

const ListenCount: React.FC = () => {
	const fakeCount = Math.floor(Math.random() * 30000000);
	return <span>{fakeCount} lượt nghe</span>;
};

export default React.memo(ListenCount);
