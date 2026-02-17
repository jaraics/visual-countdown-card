import { defineConfig } from "@rspack/cli";

export default defineConfig({
	devtool: false,
	entry: {
		main: "./src/visual-countdown-card.js",
	},
	output: {
		clean: true,
		filename: "visual-countdown-card.js",
	},
});
