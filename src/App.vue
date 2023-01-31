<template>
	<!--<nav>
	<RouterLink to="/">Home</RouterLink>
	<RouterLink to="/about">About</RouterLink>
	</nav> -->
	<!-- <RouterView></RouterView> -->
	<header id="header">
		<figure class="profile">
			<img src="/profile.png" alt="foto del perfil" width="160" height="160" />
		</figure>
		<h1 class="title">
			<strong>Geiner Ariza</strong>
		</h1>
		<h2>@geinerariza</h2>
		<p>Emprendedor | marketer | asesor</p>
		<figure class="networking">
			<IconInstagram />
			<IconFacebook />
			<IconTelegram />
			<IconYoutube />
			<IconTiktok />
		</figure>
	</header>
	<main id="body">
		<article class="description">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non
				ultricies diam. Vivamus lacinia, sem et euismod luctus.
			</p>
			<p>
				tortor nisi commodo nisi, sit amet accumsan est urna sit amet tellus.
				Etiam lectus dolor.
			</p>
			<p>posuere et tempus vel, posuere vitae quam.</p>
		</article>
		<section class="channels">
			<article class="telegram">
				<div class="content">
					<h3>
						Únete GRATIS a mi <strong>COMUNIDAD</strong> de
						<strong>TELEGRAM</strong>
					</h3>
					<p>Grupo de apoyo - Múltiples cuentas de ingreso - Asesoría</p>
				</div>
				<IconTelegram class="icon-mask" />
			</article>
			<article class="instagram">
				<div class="content">
					<h3>Sígueme en mi canal de INSTAGRAM</h3>
					<p>CLASES GRATUITAS para empezar a ganar dinero en línea</p>
				</div>
				<IconInstagram class="icon-mask" />
			</article>
			<article class="youtube">
				<div class="content">
					<h3>Suscríbete a mi canal de YOUTUBE</h3>
					<p>APRENDE PASO A PASO como ganar dinero en línea desde cero</p>
				</div>
				<IconYoutube class="icon-mask" />
			</article>
			<article class="tiktok">
				<div class="content">
					<h3>Sígueme en TIKTOK</h3>
					<p>
						Para ver mis RESULTADOS, TESTIMONIOS, consejos, estrategias, tips
					</p>
				</div>
				<IconTiktok class="icon-mask" />
			</article>
			<article class="facebook">
				<div class="content">
					<h3>Sígueme en fACEBOOK</h3>
					<p>
						Para conocer un poco MI HISTORIA y cómo construí un estilo de vida
						digital
					</p>
				</div>
				<IconFacebook class="icon-mask" />
			</article>
			<article class="whatsapp">
				<div class="content">
					<h3>¡CHATEA CONMIGO!</h3>
					<p>
						¿Quieres empezar a generar altos ingresos en línea con poca
						inversión y sin importar tu experiencia o conocimientos actuales?
					</p>
				</div>
				<IconWhatsapp class="icon-mask" />
			</article>
		</section>
		<section class="video">
			<video src=""></video>
		</section>
	</main>
	<footer id="footer">
		<a href="https://luisariza.com" target="_blank">
			<p>Designed and Developed by</p>
			<strong>Luis Ariza</strong>
		</a>
	</footer>
</template>

<script setup>
	// import { RouterLink, RouterView } from "vue-router";
	import IconInstagram from "./components/icons/IconInstagram.vue";
	import IconFacebook from "./components/icons/IconFacebook.vue";
	import IconTelegram from "./components/icons/IconTelegram.vue";
	import IconYoutube from "./components/icons/IconYoutube.vue";
	import IconTiktok from "./components/icons/IconTiktok.vue";
	import IconWhatsapp from "./components/icons/IconWhatsapp.vue";
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
			@apply text-xl text-primary mb-2;
		}
		& p {
			@apply font-body text-base mb-6;
		}
		& .networking {
			@apply flex gap-6 items-center;
		}
		& svg {
			@apply fill-white;
		}
	}
	#body {
		@apply w-full grid gap-10;
	}
	.description {
		@apply w-full py-10 px-6 grid gap-5 rounded-xl font-body font-light text-[.94rem] text-center drop-shadow-card bg-seconLight50;
	}
	.channels {
		@apply w-full grid gap-6;
		& article {
			@apply flex items-center py-5 px-4 rounded-xl border-[1.5px] border-white bg-gradient-to-br from-seconLight to-seconDark;
		}
		& .content {
			@apply w-3/4 text-center;
		}
		& h3 {
			@apply text-[.94rem] leading-5 mb-3;
		}
		& p {
			@apply font-body font-light text-xs;
		}
		& .icon-mask {
			@apply w-1/4 h-full max-h-24 fill-primary opacity-20;
		}
	}
	#footer {
		@apply w-full text-primary opacity-50 text-center;
		& p {
			@apply w-[8.5rem] mx-auto font-body text-[.65rem] mb-2;
		}
		& strong {
			@apply text-xl tracking-wider;
		}
	}
</style>
