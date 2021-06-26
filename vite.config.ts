import Vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import { defineConfig } from "vite"
import ViteSSR from "vite-ssr/plugin"

export default defineConfig({
	plugins: [ViteSSR(), Vue()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
})
