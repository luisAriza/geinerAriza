<template>
	<Header>
		<IconInstagram class="icon" />
		<IconFacebook class="icon" />
		<IconTelegram class="icon" />
		<IconYoutube class="icon" />
		<IconTiktok class="icon" />
		<IconWhatsapp class="icon" />
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
</template>

<script setup>
	import Header from "@components/Header.vue";
	import Content from "@components/Content.vue";
	import Footer from "@components/Footer.vue";
	import IconInstagram from "@components/icons/IconInstagram.vue";
	import IconFacebook from "@components/icons/IconFacebook.vue";
	import IconTelegram from "@components/icons/IconTelegram.vue";
	import IconYoutube from "@components/icons/IconYoutube.vue";
	import IconTiktok from "@components/icons/IconTiktok.vue";
	import IconWhatsapp from "@components/icons/IconWhatsapp.vue";
</script>

<style scoped lang="postcss"></style>
