<script>
	import kontaktseidemann from '$lib/images/seidemann-kontakt.jpg'
	import kontaktlinner from '$lib/images/linner-kontakt.jpg'
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Kontakt" />
</svelte:head>

	<div class="intro">
		<div class="shadowbox">
			<h1>Kontakt</h1>
		</div>
	</div>

	<div class="outer_wrap">
		<div class="content">
			<div class="lg">
				<img src={kontaktseidemann} alt="Kontakt Seidemann" height=250>
				<div>
					<a href="https://www.linkedin.com/in/andreas-seidemann-632226229/" target="_blank" rel=”noreferrer”>
						<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
					</a>
				</div>
			</div>
			<div class="cta_text">
				<h2>Kontaktieren Sie uns!</h2>
				<p>Sie haben Fragen, ein konkretes Anliegen oder möchten direkt mit uns in Kontakt treten? Wir freuen uns auf Ihre Nachricht und melden uns schnellstmöglich bei Ihnen.</p>
				<p>T +49 89 541 96 13 30</p>
				<p>F +49 89 541 96 13 39</p>
				<div class="cta_link"><a href="mailto:info@lswpg.de">info@lswpg.de</a></div>
			</div>
			<div class="mobile_wrap">
				<div class="mobile contact_element">
					<img src={kontaktseidemann} alt="Kontakt Seidemann" height=250>
					<a href="https://www.linkedin.com/in/andreas-seidemann-632226229/" target="_blank" rel=”noreferrer”><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
				</div>
				<div class="contact_element">
					<img src={kontaktlinner} alt="Kontakt Linner" height=250>
					<a href="https://www.linkedin.com/in/corinna-linner-08483153/" target="_blank" rel=”noreferrer”><svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
				</div>
			</div>
		</div>
	</div>

<style lang="scss">
	.intro {
		background-image: url('$lib/images/telephone-586266_1920.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		height: 30vh;

		.shadowbox {
			background-color: #252d36;
			opacity: 0.6;
			height: 30vh;
			display: flex;
			align-items: center;
			justify-content: center;
		
		}
	}

	.outer_wrap {
		border: 4px solid #00336A;
		border-radius: 5px;
		margin: 0.8rem;

		.content {
			border: 1px solid #FFF;
			border-radius: 2px;
			background-color: #00336A;
			color: #FFF;
			display: flex;
			flex-direction: row;
			justify-content: center;
			padding: 2rem;
			color: #FFF;

			img {
				border: 1px solid #FFF;
				border-radius: 5px;
			}

			svg {
				fill: #FFF;
				margin: 1rem 0;
			}

			@media (max-width: 1055px) {
				flex-direction: column;

				.contact_element {
					display: flex;
					flex-direction: column;
					padding: 1rem;
				}
			}

			.cta_text {
				padding: 0 1.5rem;
			}

			.cta_link {
				padding: 1rem;
				background-color: #00336A;
				width: fit-content;
				border: 1px solid #FFF;
				border-radius: 10px;
				margin: 1rem 0;

				&:hover {
					background-color: #db5461;
				}

				a {
					color: #FFF;
				}
			}

			.lg {
				@media (max-width: 1055px) {
					display: none;
				}
			}

			.mobile {
				@media (min-width: 1056px) {
					display: none;
				}
			}
		}

		@media (max-width: 1055px) {
			.mobile_wrap {
				display: flex;
				flex-flow: row wrap;
				justify-content: space-between;
			}
		}

		@media (max-width: 672px) {
			.content {
				padding: 1.5rem;

				.cta_text {
					padding: 0;
				}
			}
		}
	}
</style>
	