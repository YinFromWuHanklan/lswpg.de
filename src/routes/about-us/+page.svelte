<svelte:head>
	<title>About us</title>
	<meta name="description" content="About us" />
</svelte:head>

<div class="intro">
	<div class="shadowbox">
		<h1>About us</h1>
	</div>
</div>

<div class="content">
	<p>
		Unsere Kanzlei zeichnet sich durch eine dynamische Struktur aus. Mit fundiertem Fachwissen und Leidenschaft für die Prüfung und Bewertung von Unternehmen in verschiedenen Wirtschaftszweigen sind wir Ihr verlässlicher Ansprechpartner.
	</p>
	<p>
		Unsere langjährige Erfahrung, fundierten Fachkenntnisse und spezialisierten Branchenkenntnisse in den Bereichen Kredit-, Finanzdienstleistungs- und Wertpapierinstituten sowie Leasinggesellschaften qualifizieren uns als Ihren professionellen Partner auf höchstem Niveau.
	</p>
	<p>
		Wir verstehen die spezifischen Anforderungen und regulatorischen Herausforderungen, denen unsere Mandanten gegenüberstehen, und bieten maßgeschneiderte Lösungen, die ihnen helfen, ihre Ziele zu erreichen.
	</p>
	<p>
		Unser Engagement für Exzellenz spiegelt sich in der Qualität unserer Arbeit wider. Wir sind stolz darauf, unseren Mandanten durch fundierte Analysen, klare Kommunikation und effiziente Prozesse zu unterstützen.
	</p>
</div>

<style lang="scss">
	.intro {
		background-image: url('$lib/images/business-2846221_1920.jpg');
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
		width: 80%;
		margin: 2rem auto;
		border: 1px solid #FFF;
		padding: 2rem;

		@media (max-width: 672px) {
			width: fit-content;
			margin: 1rem;
			padding: 1.2rem;
		}
	}
</style>
