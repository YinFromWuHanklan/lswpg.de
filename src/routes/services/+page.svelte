<script>
	import Accordion from '../../lib/Accordion.svelte';
	import Intro from '../../lib/Intro.svelte';
	import Background from '../../lib/Background.svelte';
	import BgServices from '$lib/images/intro-bg-services.jpg';
</script>

<svelte:head>
	<title>Services</title>
	<meta name="description" content="Services" />
</svelte:head>

<Intro>
	<img slot="intro_bg" src={BgServices} alt="Services Linner Seidemann Wirtschaftsprüfung" />
</Intro>

<Background>
	<h1 slot="section_title">Services</h1>
	<div slot="section_content" class="content">
		<Accordion>
		<div slot="head" class="acc_head">
			<svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M480 48c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48V96H224V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V96H112V24c0-13.3-10.7-24-24-24S64 10.7 64 24V96H48C21.5 96 0 117.5 0 144v96V464c0 26.5 21.5 48 48 48H304h32 96H592c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM240 416H208c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zM128 400c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM560 256c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H528c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32zM256 176v32c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM112 160c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32zM256 304c0 8.8-7.2 16-16 16H208c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zM112 320H80c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z"/></svg>
			<h2>AUDIT – FINANCIAL SERVICES</h2>
		</div>
		<ul slot="details">
				<li>
					Jahres- und Konzernabschlussprüfung von
					<ul>
						<li>Wertpapierinstituten</li>
						<li>Finanzdienstleistungsinstituten</li>
						<li>Kreditinstituten</li>
						<li>Kapitalverwaltungsgesellschaften</li>
						<li>Leasinggesellschaften</li>
					</ul>
				</li>
				<li>
					WpHG-Prüfung
					<ul>
						<li>Prüfung nach § 89 Abs. 1 Satz 1 WpHG</li>
					</ul>
				</li>
				<li>Prüferische Durchsicht von Abschlüssen</li>
		</ul>
		</Accordion>
		
		<Accordion>
		<div slot="head" class="acc_head">
			<svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 32C46.3 32 32 46.3 32 64V304v48 80c0 26.5 21.5 48 48 48H496c26.5 0 48-21.5 48-48V304 152.2c0-18.2-19.4-29.7-35.4-21.1L352 215.4V152.2c0-18.2-19.4-29.7-35.4-21.1L160 215.4V64c0-17.7-14.3-32-32-32H64z"/></svg>
			<h2>AUDIT – CORPORATE CLIENTS</h2>
		</div>
		<ul slot="details">
			<li>Jahres- und Konzernabschlussprüfung nach deutschen, handelsrechtlichen Vorschriften (HGB)</li>
			<li>Jahres- und Konzernabschlussprüfung nach internationalen Vorschriften (IFRS)</li>
			<li>Prüferische Durchsicht von Abschlüssen</li>
			<li>Sonderprüfungen (u.a. MaBV, FinVermV, Sonderprüfungen nach dem AktG, GmbHG, UmwG)</li>
		</ul>
		</Accordion>
		
		<Accordion>
		<div slot="head" class="acc_head">
			<svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>
			<h2>VALUATION & TRANSACTION SERVICES</h2>
		</div>
		<ul slot="details">
			<li>Unternehmensbewertung nach IDW S 1</li>
			<li>Bewertung von kleinen und mittleren Unternehmen</li>
			<li>Bewertung von einzelnen Vermögenswerten</li>
			<li>Indikative Wertermittlungen</li>
			<li>Financial Due Diligence</li>
			<li>Ankaufsbewertung gemäß KAGB</li>
		</ul>
		</Accordion>
		
		<Accordion>
		<div slot="head" class="acc_head">
			<svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 640 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM25.9 233.4C29.3 191.9 64 160 105.6 160h44.8c27 0 51 13.4 65.5 34.1c-2.7 1.9-5.2 4-7.5 6.3l-64 64c-21.9 21.9-21.9 57.3 0 79.2L192 391.2V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V348.3c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zM448 64a64 64 0 1 1 128 0A64 64 0 1 1 448 64zM431.6 200.4c-2.3-2.3-4.9-4.4-7.5-6.3c14.5-20.7 38.6-34.1 65.5-34.1h44.8c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6V464c0 26.5-21.5 48-48 48H496c-26.5 0-48-21.5-48-48V391.2l47.6-47.6c21.9-21.9 21.9-57.3 0-79.2l-64-64zM272 240v32h96V240c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l64 64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V336H272v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2z"/></svg>
			<h2>INSOURCING & OUTSOURCING</h2>
		</div>
		<ul slot="details">
			<li>Innenrevision</li>
			<li>Funktion des Geldwäsche-Beauftragten</li>
			<li>Funktion des Compliance-Beauftragten</li>
			<li>Umsetzung neuer Regularien im Banken- und Finanzdienstleistungsbereich</li>
			<li>Risikomanagementfunktion</li>
		</ul>
</Accordion>
</div>
</Background>

<style lang="scss">

	img {
		width: 100vw;
		z-index: -1;
	}

	.content {
		padding: 1rem;
	}

	.acc_head {
		display: flex;
		flex-direction: column;

		svg {
			fill: #FFF;
		}
	}

	.details {
		ul {
			li {
				ul {
					li {
						list-style-type: disclosure-closed;
					}
				}
			}
		}
	}

	@media (max-width: 672px) {
		.content {
			h2 {
				font-size: 1.2rem;
			}

			ul {
				padding-left: 1rem;
			}
		}
	}
</style>
