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

	<div class="content">
		<div class="lg">
			<img src={kontaktseidemann} alt="Kontakt Seidemann" height=250>
			<div class="cta_link"><a href="https://www.xing.com/profile/Andreas_Seidemann3" target="_blank" rel=”noreferrer”>Xing</a></div>
			<div class="cta_link"><a href="https://www.linkedin.com/in/andreas-seidemann-632226229/" target="_blank" rel=”noreferrer”>LinkedIn</a></div>
		</div>
		<div class="cta_text">
			<h2>Kontaktieren Sie uns!</h2>
			<p>Sie haben Fragen, ein konkretes Anliegen oder möchten direkt mit uns in Kontakt treten? Wir freuen uns auf Ihre Nachricht und melden uns schnellstmöglich bei Ihnen.</p>
			<div class="cta_link"><a href="mailto:info@lswpg.de">info@lswpg.de</a></div>
		</div>
		<div class="mobile contact_element">
			<img src={kontaktseidemann} alt="Kontakt Seidemann" height=250>
			<div class="mobile_wrap">
				<div class="cta_link"><a href="https://www.xing.com/profile/Andreas_Seidemann3" target="_blank" rel=”noreferrer”>Xing</a></div>
				<div class="cta_link"><a href="https://www.linkedin.com/in/andreas-seidemann-632226229/" target="_blank" rel=”noreferrer”>LinkedIn</a></div>
			</div>
		</div>
		<div class="contact_element">
			<img src={kontaktlinner} alt="Kontakt Linner" height=250>
			<div class="mobile_wrap">
				<div class="cta_link"><a href="https://www.xing.com/profile/Corinna_Linner/cv" target="_blank" rel=”noreferrer”>Xing</a></div>
				<div class="cta_link"><a href="https://www.linkedin.com/in/corinna-linner-08483153/" target="_blank" rel=”noreferrer”>LinkedIn</a></div>
			</div>
		</div>
	</div>

<style lang="scss">
	.intro {
		background-image: url('$lib/images/telephone-586266_1920.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		// width: 90vw;
		height: 30vh;

		.shadowbox {
			background-color: #252d36;
			opacity: 0.6;
			// width: 90vw;
			height: 30vh;
			display: flex;
			align-items: center;
			justify-content: center;
		
		}
	}

	.content {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin: 2rem;
		padding: 2rem;
		color: #FFF;

		@media (max-width: 1055px) {
			flex-direction: column;

			.contact_element {
				display: flex;
				flex-direction: row;
				padding: 1rem;

				.mobile_wrap {
					margin-left: 1rem;
				}
			}
		}

		.cta_text {
			padding: 0 1.5rem;
		}

		.cta_link {
			padding: 1rem;
			background-color: #db5461;
			width: fit-content;
			border: 1px solid #FFF;
			border-radius: 10px;
			margin: 1rem 0;
			&:hover {
				border: 2px solid #FFF;
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
</style>
	