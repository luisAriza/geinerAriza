<template>
	<BaseLayout>
		<Header>
			<figure class="profile">
				<img
					src="/profile.webp"
					alt="foto del perfil"
					width="160"
					height="160"
				/>
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
		</Header>
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
		<Footer />
	</BaseLayout>
</template>

<script setup>
	import Header from "./Header.vue";
	import Content from "./Content.vue";
	import Footer from "./Footer.vue";
	import IconInstagram from "./icons/IconInstagram.vue";
	import IconFacebook from "./icons/IconFacebook.vue";
	import IconTelegram from "./icons/IconTelegram.vue";
	import IconYoutube from "./icons/IconYoutube.vue";
	import IconTiktok from "./icons/IconTiktok.vue";
	import IconWhatsapp from "./icons/IconWhatsapp.vue";
</script>

<style scoped lang="postcss">
	.icon {
		@apply w-7 h-7 fill-white opacity-60 hover:opacity-100;
	}
	.icon-mask {
		@apply w-1/4 h-full max-h-24 fill-white opacity-25 transition-all duration-300;
	}
	.channel:hover .icon-mask {
		@apply fill-primary opacity-75;
	}
</style>
