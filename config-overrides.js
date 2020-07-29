// import { override, addWebpackAlias } from "customize-cra";
// import { resolve } from "path";

const { override, addWebpackAlias } = require("customize-cra");
const { resolve } = require("path");

module.exports = override(
	addWebpackAlias({
		"@constants": resolve(__dirname, "./src/constants"),
		"@actions": resolve(__dirname, "./src/actions"),
		"@hooks": resolve(__dirname, "./src/hooks"),
		"@HOCs": resolve(__dirname, "./src/HOCs"),
		"@mocks": resolve(__dirname, "./src/mocks"),
		"@pages": resolve(__dirname, "./src/pages"),
		"@HomePage": resolve(__dirname, "./src/pages/HomePage"),
		"@DetailPage": resolve(__dirname, "./src/pages/DetailPage"),
		"@SearchPage": resolve(__dirname, "./src/pages/SearchPage"),
		"@GlobalComponents": resolve(__dirname, "./src/pages/GlobalComponents"),
	})
);
