<template>
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
				<slot name="icon-telegram" />
			</a>
			<a href="#" class="channel instagram">
				<div class="content">
					<h3>Sígueme en mi canal de <strong>INSTAGRAM</strong></h3>
					<p>
						<strong class="highlight">CLASES GRATUITAS</strong> para empezar a
						<strong>ganar dinero</strong> en línea.
					</p>
				</div>
				<slot name="icon-instagram" />
			</a>
			<a href="#" class="channel youtube">
				<div class="content">
					<h3>Suscríbete a mi canal de <strong>YOUTUBE</strong></h3>
					<p>
						<strong class="highlight">APRENDE PASO A PASO</strong> como
						<strong>ganar dinero en línea</strong>
						desde cero.
					</p>
				</div>
				<slot name="icon-youtube" />
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
				<slot name="icon-tiktok" />
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
				<slot name="icon-facebook" />
			</a>
			<a href="#" class="channel whatsapp">
				<div class="content">
					<h3><strong class="highlight">¡CHATEA CONMIGO!</strong></h3>
					<p>
						¿Quieres empezar a generar altos ingresos en línea con poca
						inversión y sin importar tu experiencia o conocimientos actuales?
					</p>
				</div>
				<slot name="icon-whatsapp" />
			</a>
		</section>
		<section class="video">
			<video src=""></video>
		</section>
	</main>
</template>

<script setup></script>

<style scoped lang="postcss">
	#body {
		@apply w-full grid gap-16;
	}
	.description {
		@apply w-full py-10 px-6 grid gap-5 rounded-xl font-body font-light text-[.94rem] text-center drop-shadow-card bg-seconLight50;
	}
	.channels {
		@apply w-full grid gap-8;
		& .channel {
			@apply flex items-center gap-2 py-6 px-4 rounded-xl border border-white bg-gradient-to-br from-seconLight to-seconDark transition-all hover:drop-shadow-card hover:border-seconLight hover:to-seconLight;
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
	}
</style>
