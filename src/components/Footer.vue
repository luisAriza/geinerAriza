<template>
	<footer id="footer">
		<a href="https://luisariza.com" target="_blank">
			<p>Designed and Developed by</p>
			<strong>Luis Ariza</strong>
		</a>
	</footer>
</template>

<script setup></script>

<style scoped lang="postcss">
	#footer {
		@apply w-full text-white opacity-25 text-center;
		& p {
			@apply w-[8.5rem] mx-auto font-body text-[.65rem] mb-2;
		}
		& strong {
			@apply text-xl tracking-wider;
		}
	}
</style>
