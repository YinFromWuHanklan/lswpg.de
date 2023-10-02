<script>
	import logo from '$lib/images/Logo_Linner_Seidemann_Bildmarke_2023_white.png';

	let isOpen = false;
</script>

<header>
	<nav>
		<ul class="nav_lg">
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

		<div class="nav_mobile">
			<button class="toggler" on:click={() => (isOpen = !isOpen)}>
				<div class="bar1"></div>
  				<div class="bar2"></div>
  				<div class="bar3"></div>
			</button>
			{#if isOpen}
			<ul class="nav_mobile_list">
				<li>
					<a class="nav-link" href="/">Home</a>
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

		.nav_lg {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			margin-top: 0;

			@media (max-width: 1056px) {
				display: none;
			}

			li {
				list-style: none;
				padding: 0 1rem;
				font-family: 'Libre Baskerville', serif;

				&+li {
					border-left: 1px solid #FFF;
				}

				a {
					color: #FFF;

					&:hover {
						color: #db5461;
					}
				}
			}
		}

		.nav_mobile {
			display: none;

			@media (max-width: 1056px) {
				display: inline-block;
  				cursor: pointer;

				.toggler {

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
					// display: none;
					li {
						list-style: none;
						font-family: 'Libre Baskerville', serif;

						a {
							color: #FFF;
						}
					}
				}

				.visible {
					display: block;
				}


				// .change {
				// 		.bar1 {
				// 			transform: translate(0, 11px) rotate(-45deg);
				// 		}
				// 		.bar2 {
				// 			opacity: 0;
				// 		}
				// 		.bar3 {
				// 			transform: translate(0, -11px) rotate(45deg);
				// 		}
				// }
			}
		}
	}
</style>
