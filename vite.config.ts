import Vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"
import ViteSSR from "vite-ssr/plugin"

export default defineConfig({
	plugins: [ViteSSR(), Vue()],
	resolve: {
		alias: {
			// This is somehow affecting module resolution, causing crash in SSR
			// See also pages/index.vue
			whatever: 'any-string-with-vite-ssr-in-it'
		}
	},
})
