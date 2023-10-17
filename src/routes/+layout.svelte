<script>
	import Header from './Header.svelte';
	import './global.scss';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<div class="footer_lg">
			<p>&copy; 2023 Linner | Seidemann PartG mbB Wirtschaftsprüfungsgesellschaft <span>&bull;</span> <a href="/impressum">Impressum</a> <span>&bull;</span> <a href="/datenschutz">Datenschutz</a> <span>&bull;</span> <a href="/bildrechte">Bildrechte</a></p>
		</div>
		<div class="footer_mobile">
			<p>&copy; 2023 Linner | Seidemann PartG mbB Wirtschaftsprüfungsgesellschaft</p>
			<ul>
				<li><a href="/impressum">Impressum</a></li>
				<li><a href="/datenschutz">Datenschutz</a></li>
				<li><a href="/bildrechte">Bildrechte</a></li>
			</ul>
		</div>
	</footer>
</div>

<style lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		// max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0.8rem;
		background-color: #00336A;
		color: #FFF;

		p {
			margin: 0;

			span {
				margin: 0.8rem;
			}
		}

		a {
			text-decoration: none;
		}

		.footer_lg {
			@media (max-width: 672px) {
				display: none;
			}
		}

		.footer_mobile {
			@media (min-width: 673px) {
				display: none;
			}

			@media (max-width: 672px) {
				display: flex;
				flex-direction: column;

				p {
					text-align: center;
				}

				ul {
					padding-left: 0;
    				display: flex;
    				flex-direction: column;
    				text-align: center;
					margin-top: 0.5rem;

					li {
						border-top: 1px solid #FFF;
						list-style: none;
						padding-top: 1rem;
					}
				}
			}
		}
	}
</style>
