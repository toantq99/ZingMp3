import { useState } from "react";

export function useChartTop5(initialValue) {
	const [list, setList] = useState(initialValue);
	return {
		list,
		addList: (item) => {
			list.pop();
			setList([item, ...list]);
		},
	};
}
