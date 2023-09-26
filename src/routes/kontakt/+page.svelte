<svelte:head>
	<title>About</title>
	<meta name="description" content="Kontakt" />
</svelte:head>

	<div class="intro">
		<h1>Kontakt</h1>
	</div>

	<div class="content">
		<div>Bild</div>
		<div>Kontaktdaten etc.</div>
		<div>Bild</div>
	</div>

<style lang="scss">
	.intro {
		background-image: url('$lib/images/telephone-586266_1920.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		height: 30vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.content {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin: 2rem;
		padding: 2rem;
		color: #FFF;
	}
</style>
	