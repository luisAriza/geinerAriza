<template>
	<header id="header">
		<figure class="profile">
			<img src="/profile.webp" alt="foto del perfil" width="160" height="160" />
		</figure>
		<h1 class="title">
			<strong>Geiner Ariza</strong>
		</h1>
		<h2>@geinerariza</h2>
		<p>Emprendedor | marketer | asesor</p>
		<figure class="networking">
			<IconInstagram class="icon" />
			<IconFacebook class="icon" />
			<IconTelegram class="icon" />
			<IconYoutube class="icon" />
			<IconTiktok class="icon" />
			<IconWhatsapp class="icon" />
		</figure>
	</header>
	<Content>
		<template #icon-instagram>
			<IconInstagram class="icon-mask" />
		</template>
		<template #icon-facebook>
			<IconFacebook class="icon-mask" />
		</template>
		<template #icon-telegram>
			<IconTelegram class="icon-mask" />
		</template>
		<template #icon-youtube>
			<IconYoutube class="icon-mask" />
		</template>
		<template #icon-tiktok>
			<IconTiktok class="icon-mask" />
		</template>
		<template #icon-whatsapp>
			<IconWhatsapp class="icon-mask" />
		</template>
	</Content>
	<footer id="footer">
		<a href="https://luisariza.com" target="_blank">
			<p>Designed and Developed by</p>
			<strong>Luis Ariza</strong>
		</a>
	</footer>
</template>

<script setup>
	import Content from "./Content.vue";
	import IconInstagram from "./icons/IconInstagram.vue";
	import IconFacebook from "./icons/IconFacebook.vue";
	import IconTelegram from "./icons/IconTelegram.vue";
	import IconYoutube from "./icons/IconYoutube.vue";
	import IconTiktok from "./icons/IconTiktok.vue";
	import IconWhatsapp from "./icons/IconWhatsapp.vue";
</script>

<style scoped lang="postcss">
	#header {
		@apply w-full grid justify-items-center;
		& .profile {
			@apply w-40 h-40 drop-shadow-card mb-6;
			& img {
				@apply w-full;
			}
		}
		& .title {
			@apply text-4xl uppercase tracking-wider drop-shadow-title mb-2;
		}
		& h2 {
			@apply text-2xl text-primary mb-2;
		}
		& p {
			@apply font-body text-lg mb-6;
		}
		& .networking {
			@apply flex gap-6 items-center;
		}
		& .icon {
			@apply w-7 h-7 fill-white opacity-60 hover:opacity-100;
		}
	}
	.icon-mask {
		@apply w-1/4 h-full max-h-24 fill-white opacity-25 transition-all duration-300;
	}
	.channel:hover .icon-mask {
		@apply fill-primary opacity-75;
	}
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
