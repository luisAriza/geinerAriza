<template>
	<!--<nav>
<RouterLink to="/">Home</RouterLink>
<RouterLink to="/about">About</RouterLink>
</nav> -->
	<header class="header">
		<figure class="profile">
			<img src="/profile.png" alt="foto del perfil" width="160" height="160" />
		</figure>
		<h1 class="title">
			<strong>Geiner Ariza</strong>
		</h1>
		<h2>@geinerariza</h2>
		<p>Emprendedor | marketer | asesor</p>
		<figure class="networking">
			<IconInstagram></IconInstagram><IconFacebook></IconFacebook
			><IconTelegram></IconTelegram><IconYoutube></IconYoutube
			><IconTiktok></IconTiktok>
		</figure>
	</header>
	<RouterView></RouterView>
</template>

<script setup>
	import { RouterLink, RouterView } from "vue-router";
	import IconInstagram from "./components/icons/IconInstagram.vue";
	import IconFacebook from "./components/icons/IconFacebook.vue";
	import IconTelegram from "./components/icons/IconTelegram.vue";
	import IconYoutube from "./components/icons/IconYoutube.vue";
	import IconTiktok from "./components/icons/IconTiktok.vue";
</script>

<style scoped lang="postcss">
	.header {
		@apply w-full grid justify-items-center;
	}
	.profile {
		@apply w-40 h-40 drop-shadow-card mb-6;
		& img {
			@apply w-full;
		}
	}
	.title {
		@apply text-4xl uppercase tracking-wider drop-shadow-title mb-2;
	}
	h2 {
		@apply text-xl text-primary mb-2;
	}
	p {
		@apply font-body text-base mb-6;
	}
	.networking {
		@apply flex gap-6 items-center;
	}
</style>
