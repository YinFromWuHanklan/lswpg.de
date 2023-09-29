<script>
	import logo from '$lib/images/Logo_Linner_Seidemann_Bildmarke_2023_white.png';

	function testFunction(event) {
		event.console.log("Hello");
	}
</script>

<header>
	<nav>
		<ul class="nav_lg">
			<li>
				<a class="nav-link" href="/">Home</a>
			</li>
			<li>
				<a class="nav-link" href="/about-us">About us</a>
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
			<button class="toggler" on:click={testFunction}>
				<div class="bar1"></div>
  				<div class="bar2"></div>
  				<div class="bar3"></div>
			</button>
			<ul class="nav_mobile_list">
				<li>
					<a class="nav-link" href="/">Home</a>
				</li>
				<li>
					<a class="nav-link" href="/about-us">About us</a>
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
	</nav>
</header>

<style lang="scss">
	nav {
		padding: 0.8rem 2rem;

		.nav_lg {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;

			@media (max-width: 1056px) {
				display: none;
			}

			li {
				list-style: none;
				padding: 0 1rem;

				a {
					text-decoration: none;
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
					display: none;
				}

				.visible {
					display: block;
				}


				.change {
						.bar1 {
							transform: translate(0, 11px) rotate(-45deg);
						}
						.bar2 {
							opacity: 0;
						}
						.bar3 {
							transform: translate(0, -11px) rotate(45deg);
						}
					}
			}
		}
	}
</style>
