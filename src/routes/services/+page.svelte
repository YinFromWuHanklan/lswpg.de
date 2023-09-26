<svelte:head>
	<title>Services</title>
	<meta name="description" content="Services" />
</svelte:head>

<div class="intro">
	<h1>Services</h1>
</div>

<div class="service_wrap">
	<div class="service_headline">
		<!-- Icon -->
		<h2>AUDIT – FINANCIAL SERVICES</h2>
	</div>
	<ul class="service_content">
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
</div>

<div class="service_wrap">
	<div class="service_headline">
		<!-- Icon -->
		<h2>AUDIT – CORPORATE CLIENTS</h2>
	</div>
	<ul class="service_content">
		<li>Jahres- und Konzernabschlussprüfung nach deutschen, handelsrechtlichen Vorschriften (HGB)</li>
		<li>Jahres- und Konzernabschlussprüfung nach internationalen Vorschriften (IFRS)</li>
		<li>Prüferische Durchsicht von Abschlüssen</li>
		<li>Sonderprüfungen (u.a. MaBV, FinVermV, Sonderprüfungen nach dem AktG, GmbHG, UmwG)</li>
	</ul>
</div>

<div class="service_wrap">
	<div class="service_headline">
		<!-- Icon -->
		<h2>VALUATION & TRANSACTION SERVICES</h2>
	</div>
	<ul class="service_content">
		<li>Unternehmensbewertung nach IDW S 1</li>
		<li>Bewertung von kleinen und mittleren Unternehmen</li>
		<li>Bewertung von einzelnen Vermögenswerten</li>
		<li>Indikative Wertermittlungen</li>
		<li>Financial Due Diligence</li>
		<li>Ankaufsbewertung gemäß KAGB</li>
	</ul>
</div>

<div class="service_wrap">
	<div class="service_headline">
		<!-- Icon -->
		<h2>INSOURCING & OUTSOURCING</h2>
	</div>
	<ul class="service_content">
		<li>Innenrevision</li>
		<li>Funktion des Geldwäsche-Beauftragten</li>
		<li>Funktion des Compliance-Beauftragten</li>
		<li>Umsetzung neuer Regularien im Banken- und Finanzdienstleistungsbereich</li>
		<li>Risikomanagementfunktion</li>
	</ul>
</div>


<style lang="scss">


@import '../global.scss';

	.intro {
		background-image: url('$lib/images/computer-820281_1920.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		height: 30vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.service_wrap {
		width: 80%;
		margin-left: auto;
		margin-right: auto;
		margin-top: 2rem;;
		background-color: #00558e; // ToDo variable!
		padding: 2rem;
		display: flex;
		flex-direction: row;

		.service_headline {
			justify-content: center;
			flex-grow: 1;
		}

		.service_content {
			flex-grow: 8;
		}
	}
</style>
