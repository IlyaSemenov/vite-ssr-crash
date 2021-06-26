import viteSSR from "vite-ssr"

import App from "./App.vue"
import Home from "./pages/index.vue"

const routes = [
	{ path:'/', component: Home }
]

export default viteSSR(App, { routes })
