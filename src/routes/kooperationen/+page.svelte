<script>
	import severn from '$lib/images/Severn-Logo.jpeg'
	import Intro from '../../lib/Intro.svelte';
	import BgKooperationen from '$lib/images/intro-bg-kooperationen.jpg';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="Kooperationen" />
</svelte:head>

<Intro>
	<img slot="intro_bg" src={BgKooperationen} alt="Kooperationen Linner Seidemann Wirtschaftsprüfung" />
</Intro>

<section>
	<h1>Unsere Kooperationspartner</h1>
	
	<div class="content">
		<img src={severn} alt="Severn" height=200 class="partner_logo" />
	</div>
</section>

<style lang="scss">
	
	img {
		width: 100vw;
		z-index: -1;
	}

	section {

		background-color: #FFF;

		h1 {
			margin-top: 2rem;
		}

		.content {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;

			.partner_logo {
				margin: 1rem 1.5rem;
				width: auto;
				z-index: 1;
			}
		}
	}
</style>
