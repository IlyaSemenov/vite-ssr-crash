<script lang="ts">
import { onServerPrefetch } from "vue"

// This causes hard crash (process exit) during SSR.
// Note that this is not even calling the function.
// Simply importing it (and accessing it somehow - so that it's not skipped by tree shaking) causes the problem.
console.log(onServerPrefetch)
</script>

<template>
	<div>Hello</div>
</template>
