<script>
	import LinnerSeidemannLogoBig from '$lib/images/Logo_Linner_Seidemann_2023_white.png';
	import IntroVid from '$lib/images/intro-video.mp4';
	import Background from '../lib/Background.svelte';
	import IntroVidImage from '$lib/images/intro-mobil.jpg';

	let screenSize;

	let isAccepted = false;

	function handleCookie() {
		isAccepted = !isAccepted;
	}
</script>

<svelte:head>
	<title>Linner | Seidemann Wirtschaftsprüfung</title>
	<meta name="description" content="Linner | Seidemann Wirtschaftsprüfung" />
</svelte:head>

<svelte:window bind:innerWidth={screenSize} />
{#if screenSize <= 672}
<div class="video_wrapper">
	<img src={IntroVidImage} alt="Linner Seidemann Wirtschaftsprüfung Intro mobil" class="intro_vid_img">
	<div class="intro_vid_text">
		excellence<br />
		service<br />
		passion
	</div>
</div>
{/if}
{#if screenSize > 672}
<div class="video_wrapper">
	<video id="background-video" autoplay loop muted poster={IntroVidImage}>
		<source src={IntroVid} type="video/mp4">
		Your browser does not support HTML5 video.
	</video>
	<div class="intro_vid_text">
		excellence<br />
		service<br />
		passion
	</div>
</div>
{/if}

<h1>Linner Seidemann Wirtschaftsprüfung</h1>

<img src={LinnerSeidemannLogoBig} alt="Linner Seidemann Wirtschaftsprüfung Logo" />

<Background>
	<div slot="section_content" class="content">
		<div class="content_split">
			<p>
				Unsere Kanzlei zeichnet sich durch eine dynamische Struktur aus. Mit fundiertem Fachwissen und Leidenschaft für die Prüfung und Bewertung von Unternehmen in verschiedenen Wirtschaftszweigen sind wir Ihr verlässlicher Ansprechpartner.
			</p>
			<p>
				Unsere langjährige Erfahrung, fundierten Fachkenntnisse und spezialisierten Branchenkenntnisse in den Bereichen Kredit-, Finanzdienstleistungs- und Wertpapierinstituten sowie Leasinggesellschaften qualifizieren uns als Ihren professionellen Partner auf höchstem Niveau.
			</p>
		</div>
		<hr>
		<div class="content_split">
			<p>
				Wir verstehen die spezifischen Anforderungen und regulatorischen Herausforderungen, denen unsere Mandanten gegenüberstehen, und bieten maßgeschneiderte Lösungen, die ihnen helfen, ihre Ziele zu erreichen.
			</p>
			<p>
				Unser Engagement für Exzellenz spiegelt sich in der Qualität unserer Arbeit wider. Wir sind stolz darauf, unseren Mandanten durch fundierte Analysen, klare Kommunikation und effiziente Prozesse zu unterstützen.
			</p>
		</div>
	</div>
</Background>

<div class="cookies" class:accepted={isAccepted}>
	<p>Mit der Verwendung unserer Webseite erklären Sie sich mit den Datenschutzbedingungen einverstanden. <a href="/datenschutz">Mehr erfahren</a></p>
    <button id="toggle" on:click={handleCookie}>Einverstanden</button>
</div>

<style lang="scss">
	.video_wrapper {
		position: relative;
		overflow: hidden;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50vh;

		video {
			object-fit: cover;
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
		}

		.intro_vid_img {
			display: none;
		}

		.intro_vid_text {
			position: relative;
			color: #FFF;
			text-shadow: 1px 1px 2px #00336A;
			font-size: 2.5rem;
    		background: rgb(0, 82, 121, 80%);
    		padding: 1rem 2rem 1.5rem;
			text-transform: uppercase;
		}
	}

	h1 {
		display: none;
	}

	img {
		width: 60%;
		margin: 0 auto;
	}

	.content {
		width: 80%;
		margin: 0 auto;
		padding: 2rem 0;
		
		.content_split {
			display: flex;
			flex-direction: row;

			p {
				width: 50%;
				padding: 0 2rem;
			}
		}

		hr {
			margin: 3rem 2rem;
		}
	}

	.cookies {
		position: sticky;
    	bottom: 0;
    	background: #152b43;
    	text-align: center;
    	padding: 1.5rem;
    	padding-top: 0;
    	color: #FFF;
    	border-top: 1px solid #FFF;
    	border-bottom: 1px solid #FFF;
	}

	.accepted {
		display: none;
	}

	@media (max-width: 1055px) {
		img {
			width: 80%;
		}

		.content {
			.content_split {
				flex-direction: column;

				p {
					width: 100%;
					margin: 1.5rem 0;
				}
			}

			hr {
				display: none;
			}
		}
	}

	@media (max-width: 672px) {
		.video_wrapper {
			height: auto;

			#background-video {
				display: none !important;
				pointer-events: none;
			}

			.intro_vid_img {
				display: flex;
				pointer-events: none;
			}

			.intro_vid_text {
				position: absolute;
				background: none;
				font-size: 1.8rem;
			}
		}

		img {
			width: 100%;
		}

		.content {
			width: 100%;
		}
	}
</style>
