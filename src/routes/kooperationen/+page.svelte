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
	<h1>Unser Kooperations&shy;partner</h1>
	
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
		padding: 1rem;

		.content {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			padding: 2rem 0;

			.partner_logo {
				margin: 1rem 1.5rem;
				width: auto;
				z-index: 1;
			}

			@media (max-width: 672px) {
				.partner_logo {
					width: 70%;
					height: auto;
				}
			}
		}
	}
</style>
