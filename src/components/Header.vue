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
			<slot />
		</figure>
	</header>
</template>

<script setup></script>

<style lang="postcss">
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
			@apply w-7 h-7 fill-white opacity-75 hover:opacity-100;
		}
	}
</style>
