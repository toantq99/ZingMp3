const path = require("path");

module.exports = {
	webpack: {
		alias: {
			"@constants": path.resolve(__dirname, "./src/constants"),
			"@actions": path.resolve(__dirname, "./src/actions"),
			"@images": path.resolve(__dirname, "./src/images"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@HOCs": path.resolve(__dirname, "./src/HOCs"),
			"@mocks": path.resolve(__dirname, "./src/mocks"),
			"@utils": path.resolve(__dirname, "./src/utils"),
			"@HomePage": path.resolve(__dirname, "./src/pages/HomePage"),
			"@DetailPage": path.resolve(__dirname, "./src/pages/DetailPage"),
			"@SearchPage": path.resolve(__dirname, "./src/pages/SearchPage"),
			"@AlbumPage": path.resolve(__dirname, "./src/pages/AlbumPage"),
			"@GlobalComponents": path.resolve(
				__dirname,
				"./src/pages/GlobalComponents"
			),
		},
	},
};
