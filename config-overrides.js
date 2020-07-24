import { override, addWebpackAlias } from "customize-cra";
import { resolve } from "path";

export default override(
	addWebpackAlias({
		"@actions": resolve(__dirname, "./src/actions"),
		"@hooks": resolve(__dirname, "./src/hooks"),
		"@mocks": resolve(__dirname, "./src/mocks"),
		"@pages": resolve(__dirname, "./src/pages"),
		"@HomePage": resolve(__dirname, "./src/pages/HomePage"),
		"@DetailPage": resolve(__dirname, "./src/pages/DetailPage"),
		"@SearchPage": resolve(__dirname, "./src/pages/SearchPage"),
		"@GlobalComponents": resolve(__dirname, "./src/pages/GlobalComponents"),
	})
);
