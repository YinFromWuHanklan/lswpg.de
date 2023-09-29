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
		<div>
			<img src={kontaktseidemann} alt="Kontakt Seidemann" height=250>
		</div>
		<div class="cta_text">
			<h2>Kontaktieren Sie uns!</h2>
			<p>Sie haben Fragen, ein konkretes Anliegen oder möchten direkt mit uns in Kontakt treten? Wir freuen uns auf Ihre Nachricht und melden uns schnellstmöglich bei Ihnen.</p>
		</div>
		<div>
			<img src={kontaktlinner} alt="Kontakt Linner" height=250>
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

		.cta_text {
			padding: 0 1.5rem;
		}
	}
</style>
	