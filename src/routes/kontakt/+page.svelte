<script>
	import kontaktseidemann from '$lib/images/seidemann-kontakt.jpg';
	import kontaktlinner from '$lib/images/linner-kontakt.jpg';
	import Intro from '../../lib/Intro.svelte';
	import Background from '../../lib/Background.svelte';
	import BgKontakt from '$lib/images/intro-bg-kontakt.jpg';
	import Linkedin from '../../lib/icons/Linkedin.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Kontakt" />
</svelte:head>

<Intro>
	<img slot="intro_bg" src={BgKontakt} alt="Kontakt Linner Seidemann Wirtschaftsprüfung" />
</Intro>

<Background>
	<h1 slot="section_title">Kontaktieren Sie uns!</h1>
	<div slot="section_content" class="content">
		<div class="lg contact_element">
			<img src={kontaktlinner} alt="Kontakt Linner" height="250" class="kontakt_photo" />
			<div class="contact_info">
				<p>WP Corinna Linner</p>
				<a
					href="https://www.linkedin.com/in/corinna-linner-08483153/"
					target="_blank"
					rel="”noreferrer”"><Linkedin /></a
				>
			</div>
		</div>
		<div class="cta_text">
			<p>
				Sie haben Fragen, ein konkretes Anliegen oder möchten direkt mit uns in Kontakt treten? Wir
				freuen uns auf Ihre Nachricht und melden uns schnell<nobr />stmöglich bei Ihnen.
			</p>
			<div class="cta_details">
				<p class="cta_link"><a href="tel:+4989541961330">T +49 89 599 88 483</a></p>
				<p class="cta_link"><a href="mailto:info@lswpg.de">info@lswpg.de</a></p>
			</div>
		</div>
		<div class="mobile_wrap">
			<div class="mobile contact_element">
				<img src={kontaktlinner} alt="Kontakt Linner" height="250" class="kontakt_photo" />
				<div class="contact_info">
					<p>WP Corinna Linner</p>
					<a
						href="https://www.linkedin.com/in/corinna-linner-08483153/"
						target="_blank"
						rel="”noreferrer”"><Linkedin /></a
					>
				</div>
			</div>
			<div class="contact_element">
				<img src={kontaktseidemann} alt="Kontakt Seidemann" height="250" class="kontakt_photo" />
				<div class="contact_info">
					<p>WP Andreas Seidemann</p>
					<a
						href="https://www.linkedin.com/in/andreas-seidemann-632226229/"
						target="_blank"
						rel="”noreferrer”"><Linkedin /></a
					>
				</div>
			</div>
		</div>
	</div>
</Background>

<style lang="scss">
	img {
		width: 100vw;
		z-index: -1;
	}

	h1 {
		margin: 3rem 1rem 0;
	}

	.content {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 1rem 2rem;
		width: 60%;
		margin: 0 auto;

		.kontakt_photo {
			border: 1px solid #fff;
			border-radius: 5px;
			width: auto;
		}

		.mobile {
			display: none;
		}

		.contact_element {
			text-align: center;
			.contact_info {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				padding: 1rem;

				p {
					margin: 0;
					margin-right: 1rem;
					font-size: 1rem;
				}
			}
		}

		.cta_text {
			padding: 0 1.5rem;

			.cta_details {
				text-align: center;
				padding: 1rem 2rem;
				width: fit-content;
				margin: 1rem auto 2rem;

				p,
				a {
					font-size: 1.2rem;
				}
			}
		}

		@media (max-width: 1055px) {
			flex-direction: column;
			width: 80%;

			.lg {
				display: none;
			}

			.mobile_wrap {
				display: flex;
				flex-flow: row wrap;
				justify-content: space-between;

				.mobile {
					display: block;
				}
			}
		}

		@media (max-width: 672px) {
			flex-direction: column;
			width: 100%;
			padding: 1.5rem;

			.cta_text {
				padding: 0;
			}

			.mobile_wrap {
				.contact_element {
					margin: 2rem auto;

					.kontakt_photo {
						height: 300px;
					}

					.contact_info {
						padding: 0.8rem 0;
						text-align: center;
					}
				}
			}
		}
	}
</style>
