<script>
	import severn from '$lib/images/Severn-Logo.jpeg'
	import oro from '$lib/images/Oro-Logo.jpeg'
	import cdi from '$lib/images/Logo-CDI.png'
	import trepte from '$lib/images/Logo_3-Trepte.jpeg'
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Kooperationen" />
</svelte:head>

<div class="intro">
	<div class="shadowbox">
		<h1>Kooperationen</h1>
	</div>
</div>

<h2>Unsere Kooperationspartner</h2>

<div class="content">
	<img src={severn} alt="Severn" height=250>
	<img src={oro} alt="Oro services" height=250>
	<img src={cdi} alt="cd Invest" height=250>
	<img src={trepte} alt="cd Invest" height=250>
</div>

<style lang="scss">
	.intro {
		background-image: url('$lib/images/laptop-1205256_1920.jpg');
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
		flex-wrap: wrap;

		img {
			margin: 1rem 1.5rem;
		}
	}
</style>
