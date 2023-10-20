<script>
	import logo from '$lib/images/Logo_Linner_Seidemann_Bildmarke_2023_white.png';
	import { page } from '$app/stores';

	let isOpen = false;

	$: $page.url && (isOpen = false);
</script>

<header>
	<nav>
		<div class="nav_lg">
			<a href="/"><img src="{logo}" alt="Linner Seidemann Wirtschaftsprüfung Logo" width=45 /></a>
			<ul>
				<li>
					<a class="nav-link" href="/">Home</a>
				</li>
				<li>
					<a class="nav-link" href="/services">Services</a>
				</li>
				<li>
					<a class="nav-link" href="/kooperationen">Kooperationen</a>
				</li>
				<li>
					<a class="nav-link" href="/kontakt">Kontakt</a>
				</li>
			</ul>
		</div>

		<div class="nav_mobile">
			<a href="/"><img src="{logo}" alt="Linner Seidemann Wirtschaftsprüfung Logo" width=45 /></a>
			<button class="toggler" on:click={() => (isOpen = !isOpen)}>
				<div class="bar1"></div>
  				<div class="bar2"></div>
  				<div class="bar3"></div>
			</button>
			{#if isOpen}
			<ul class="nav_mobile_list">
				<li>
					<a class="nav-link" href="/">Home</a>
				</li>
				<li>
					<a class="nav-link" href="/services">Services</a>
				</li>
				<li>
					<a class="nav-link" href="/kooperationen">Kooperationen</a>
				</li>
				<li>
					<a class="nav-link" href="/kontakt">Kontakt</a>
				</li>
			</ul>
			{/if}
		</div>
	</nav>
</header>

<style lang="scss">
	nav {
		padding: 0.8rem 2rem;
		background-color: #00336A;

		@media (max-width: 672px) {
			padding: 0.8rem 1rem;
		}

		.nav_lg {
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			@media (max-width: 672px) {
				display: none;
			}

			ul {
				display: flex;
				flex-direction: row;
				justify-content: flex-end;
				margin-top: 0;
				margin-bottom: 0.5rem;

				li {
					list-style: none;
					padding: 0 1rem;
					font-family: 'Libre Baskerville', serif;
					font-size: 1.2rem;
					margin-top: 0.5rem;

					&+li {
						border-left: 1px solid #FFF;
					}

					a {
						text-decoration: none;
					}
				}
			}
		}

		.nav_mobile {
			display: none;

			@media (max-width: 672px) {
				display: inline-block;
  				cursor: pointer;
				width: 100%;
				height: auto;

				img {
					float: left;
				}

				.toggler {
					float: right;
					background-color: #00336A;
					border: none;

					.bar1,
					.bar2,
					.bar3 {
						width: 35px;
						height: 5px;
						background-color: #FFF;
						margin: 6px 0;
						transition: 0.4s;
					}
				}

				ul {
					padding-left: 0;
					text-align: center;
					margin-top: 50px;
					background-color: red;

					li {
						list-style: none;
						font-family: 'Libre Baskerville', serif;

						&+li {
							border-top: 1px solid #FFF;
							padding-top: 1rem;
						}

						a {
							color: #FFF;
							text-decoration: none;
						}
					}
				}
			}
		}
	}
</style>
