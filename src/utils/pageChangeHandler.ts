export const pageChangeHandler = (history: any) => (
	_query: string,
	_pageToGo: number,
	_pageSize: number
) => {
	history.push(
		`/tim-kiem/?query=${_query}&page=${_pageToGo}&limit=${_pageSize}`
	);
	window.scrollTo({ top: 0, behavior: "smooth" });
};
