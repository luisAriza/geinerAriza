<template>
	<div class="container">
		<HomeLayout />
	</div>
</template>

<script setup>
	import HomeLayout from "@components/HomeLayout.vue";
</script>

<style scoped lang="postcss">
	.container {
		@apply grid gap-20;
	}
</style>
