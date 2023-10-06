<script>
	import welcome_fallback from '$lib/images/Logo_Linner_Seidemann_2023_white.png';
</script>

<svelte:head>
	<title>Linner Seidemann Wirtschaftsprüfung</title>
	<meta name="description" content="Linner Seidemann Wirtschaftsprüfung" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
	</h1>

	<div class="outer_box">
		<div class="inner_box">
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
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

	.outer_box {
		width: 80%;
		margin: 2rem auto;
		border: 4px solid #00336A;
		border-radius: 5px;

		@media (max-width: 672px) {
			width: fit-content;
			margin: 0.8rem;
		}

		.inner_box {
			border: 1px solid #FFF;
			border-radius: 2px;
			background-color: #00336A;
			color: #FFF;
			padding: 1.5rem;
		}
	}
</style>
