<script lang="ts">
import { defineComponent, onServerPrefetch, ref } from "vue"

export default defineComponent({
	setup() {
		const data = ref("initial")
		onServerPrefetch(async () => {
			data.value = "server"
		})
		return { data }
	},
})
</script>

<template>
	<div>data = {{ data }}</div>
</template>
