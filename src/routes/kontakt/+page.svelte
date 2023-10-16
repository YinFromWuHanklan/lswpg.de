<script>
	import kontaktseidemann from '$lib/images/seidemann-kontakt.jpg';
	import kontaktlinner from '$lib/images/linner-kontakt.jpg';
	import Intro from '../../lib/Intro.svelte';
	import Background from '../../lib/Background.svelte';
	import BgKontakt from '$lib/images/intro-bg-kontakt.jpg';
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
			<div class="lg">
				<img src={kontaktlinner} alt="Kontakt Linner" height=250 class="kontakt_photo">
				<div>
					<a href="https://www.linkedin.com/in/corinna-linner-08483153/" target="_blank" rel=”noreferrer”><svg xmlns="http://www.w3.org/2000/svg" height="2.5em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
				</div>
			</div>
			<div class="cta_text">
				<p>Sie haben Fragen, ein konkretes Anliegen oder möchten direkt mit uns in Kontakt treten? Wir freuen uns auf Ihre Nachricht und melden uns schnellstmöglich bei Ihnen.</p>
				<div class="cta_details">
					<p class="cta_link"><a href="tel:+4989541961330">T +49 89 541 96 13 30</a></p>
					<p>F +49 89 541 96 13 39</p>
					<p class="cta_link"><a href="mailto:info@lswpg.de">info@lswpg.de</a></p>
				</div>
			</div>
			<div class="mobile_wrap">
				<div class="mobile contact_element">
					<img src={kontaktlinner} alt="Kontakt Linner" height=250 class="kontakt_photo">
					<div><a href="https://www.linkedin.com/in/corinna-linner-08483153/" target="_blank" rel=”noreferrer”><svg xmlns="http://www.w3.org/2000/svg" height="2.5em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a></div>
				</div>
				<div class="contact_element">
					<img src={kontaktseidemann} alt="Kontakt Seidemann" height=250 class="kontakt_photo">
					<div><a href="https://www.linkedin.com/in/andreas-seidemann-632226229/" target="_blank" rel=”noreferrer”><svg xmlns="http://www.w3.org/2000/svg" height="2.5em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a></div>
				</div>
			</div>
		</div>
	</Background>

<style lang="scss">

	img {
		width: 100vw;
		z-index: -1;
	}

	.content {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 1rem 2rem;
		width: 60%;
		margin: 0 auto;

		.kontakt_photo {
			border: 1px solid #FFF;
			border-radius: 5px;
			width: auto;
		}

		svg {
			fill: #FFF;
			margin: 1rem 0;
		}

		.mobile {
			display: none;
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

					svg {
						height: 3rem;
					}
				}
			}
		}
	}
		
</style>
	