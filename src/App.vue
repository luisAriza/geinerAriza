<template>
	<!--<nav>
	<RouterLink to="/">Home</RouterLink>
	<RouterLink to="/about">About</RouterLink>
	</nav> -->
	<!-- <RouterView></RouterView> -->
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
			<a href="#" class="channel telegram">
				<div class="content">
					<h3>
						Únete GRATIS a mi <strong class="highlight">COMUNIDAD</strong> de
						<strong>TELEGRAM</strong>
					</h3>
					<p>Grupo de apoyo - Múltiples cuentas de ingreso - Asesoría.</p>
				</div>
				<IconTelegram class="icon-mask" />
			</a>
			<a href="#" class="channel instagram">
				<div class="content">
					<h3>Sígueme en mi canal de <strong>INSTAGRAM</strong></h3>
					<p>
						<strong class="highlight">CLASES GRATUITAS</strong> para empezar a
						<strong>ganar dinero</strong> en línea.
					</p>
				</div>
				<IconInstagram class="icon-mask" />
			</a>
			<a href="#" class="channel youtube">
				<div class="content">
					<h3>Suscríbete a mi canal de <strong>YOUTUBE</strong></h3>
					<p>
						<strong>APRENDE PASO A PASO</strong> como
						<strong class="highlight">ganar dinero en línea</strong>
						desde cero.
					</p>
				</div>
				<IconYoutube class="icon-mask" />
			</a>
			<a href="#" class="channel tiktok">
				<div class="content">
					<h3>Sígueme en <strong>TIKTOK</strong></h3>
					<p>
						Para ver mis <strong class="highlight">RESULTADOS</strong>,
						<strong class="highlight">TESTIMONIOS</strong>, consejos,
						estrategias, tips.
					</p>
				</div>
				<IconTiktok class="icon-mask" />
			</a>
			<a href="#" class="channel facebook">
				<div class="content">
					<h3>Sígueme en <strong>FACEBOOK</strong></h3>
					<p>
						Para conocer un poco
						<strong class="highlight">MI HISTORIA</strong> y cómo construí un
						<strong>estilo de vida digital</strong>.
					</p>
				</div>
				<IconFacebook class="icon-mask" />
			</a>
			<a href="#" class="channel whatsapp">
				<div class="content">
					<h3><strong class="highlight">¡CHATEA CONMIGO!</strong></h3>
					<p>
						¿Quieres empezar a generar altos ingresos en línea con poca
						inversión y sin importar tu experiencia o conocimientos actuales?
					</p>
				</div>
				<IconWhatsapp class="icon-mask" />
			</a>
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
			@apply text-2xl text-primary mb-2;
		}
		& p {
			@apply font-body text-lg mb-6;
		}
		& .networking {
			@apply flex gap-6 items-center;
		}
		& svg {
			@apply w-7 h-7 fill-white opacity-75;
		}
	}
	#body {
		@apply w-full grid gap-16;
	}
	.description {
		@apply w-full py-10 px-6 grid gap-5 rounded-xl font-body font-light text-[.94rem] text-center drop-shadow-card bg-seconLight50;
	}
	.channels {
		@apply w-full grid gap-8;
		& .channel {
			@apply flex items-center gap-2 py-6 px-4 rounded-xl border border-white bg-gradient-to-br from-seconLight to-seconDark transition-all duration-200 hover:drop-shadow-card hover:border-seconLight hover:to-seconLight;
		}
		& .content {
			@apply w-3/4 text-center;
			& h3 {
				@apply text-base leading-5 mb-3;
			}
			& p {
				@apply font-body font-light text-sm;
			}
			& strong {
				@apply font-bold;
			}
			& .highlight {
				@apply uppercase text-primary;
			}
		}
		& .icon-mask {
			@apply w-1/4 h-full max-h-24 fill-primary opacity-25;
		}
		& .channel:hover .icon-mask {
			@apply opacity-75;
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
