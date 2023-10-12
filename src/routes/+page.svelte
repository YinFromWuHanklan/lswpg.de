<script>
	import welcome_fallback from '$lib/images/Logo_Linner_Seidemann_2023_white.png';
	import intro_vid from '$lib/images/istockphoto-1298040066-640_adpp_is.mp4';
</script>

<svelte:head>
	<title>Linner Seidemann Wirtschaftsprüfung</title>
	<meta name="description" content="Linner Seidemann Wirtschaftsprüfung" />
</svelte:head>

<video id="background-video" autoplay loop muted poster="{welcome_fallback}}">
	<source src="{intro_vid}" type="video/mp4">
</video>
<section>
	<h1>
		<span class="welcome">
			<picture>
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
	</h1>

	<div class="bg_box">
		<p>
			Unsere Kanzlei zeichnet sich durch eine dynamische Struktur aus. Mit fundiertem Fachwissen und Leidenschaft für die Prüfung und Bewertung von Unternehmen in verschiedenen Wirtschaftszweigen sind wir Ihr verlässlicher Ansprechpartner.
		</p>
		<p>
			Unsere langjährige Erfahrung, fundierten Fachkenntnisse und spezialisierten Branchenkenntnisse in den Bereichen Kredit-, Finanzdienstleistungs- und Wertpapierinstituten sowie Leasinggesellschaften qualifizieren uns als Ihren professionellen Partner auf höchstem Niveau.
		</p>
	</div>

	<div class="outer_box">
		<div class="inner_box">
			
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
	video {
		width: 100vw;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 75%;
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

	.bg_box {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1052%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(0%2c 51%2c 106%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c602.644C112.053%2c586.252%2c213.592%2c541.696%2c310.916%2c483.794C411.374%2c424.028%2c513.924%2c362.538%2c573.06%2c261.708C635.574%2c155.119%2c668.925%2c28.647%2c649.42%2c-93.373C630.049%2c-214.554%2c547.332%2c-311.886%2c466.597%2c-404.308C386.145%2c-496.407%2c305.647%2c-614.836%2c183.895%2c-626.29C62.115%2c-637.747%2c-17.892%2c-495.095%2c-135.344%2c-460.938C-253.289%2c-426.638%2c-413.888%2c-521.16%2c-494.945%2c-428.872C-575.825%2c-336.786%2c-486.758%2c-191.313%2c-479.621%2c-68.959C-474.096%2c25.755%2c-472.679%2c115.35%2c-457.736%2c209.041C-437.154%2c338.083%2c-474.524%2c499.004%2c-375.444%2c584.202C-278.475%2c667.585%2c-126.542%2c621.156%2c0%2c602.644' fill='%23002955'%3e%3c/path%3e%3cpath d='M1440 995.531C1524.495 1002.5129999999999 1611.299 983.3589999999999 1682.192 936.858 1752.752 890.576 1801.04 817.4839999999999 1831.449 738.769 1860.699 663.0550000000001 1869.091 579.997 1850.586 500.967 1832.973 425.748 1787.5149999999999 360.438 1730.623 308.174 1677.818 259.665 1609.25 238.046 1540.875 216.452 1471.13 194.425 1400.283 165.81099999999998 1328.794 181.267 1254.975 197.22699999999998 1186.734 241.04899999999998 1142.841 302.51 1100.642 361.599 1090.276 437.712 1093.8600000000001 510.233 1097.041 574.598 1141.6309999999999 625.837 1161.845 687.029 1185.35 758.185 1172.054 843.194 1222.2350000000001 898.85 1276.517 959.0550000000001 1359.212 988.855 1440 995.531' fill='%23003d7f'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1052'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
		color: #FFF;
		padding: 2rem;
		display: flex;
		flex-direction: row;

		p {
			width: 50%;
			padding: 1.5rem;
		}
	}

	.outer_box {
		width: 80%;
		margin: 2rem auto;
		border: 4px solid #00336A;
		border-radius: 5px;	

		.inner_box {
			border: 1px solid #FFF;
			border-radius: 2px;
			background-color: #00336A;
			color: #FFF;
			padding: 1.5rem;
		}
	}


	@media (max-width: 672px) {
		.bg_box {
			flex-direction: column;
			padding: 0.5rem;

			p {
				width: 100%;
				padding: 1rem;
			}
		}

		.outer_box {
			width: fit-content;
			margin: 0.8rem;
		}
	}
</style>
