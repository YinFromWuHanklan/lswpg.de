<script>
	let isMobileMenuOpen = false;
  
	function toggleMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}
  </script>
  
  <style lang="scss">
	.mobile-menu {
	  background-color: #00336A;
	  color: #FFF;
	  padding: 15px;
	  text-align: center;

	  .menu-toggle {
		border: none;
		background: none;
		color: #FFF;
		font-size: 2.5rem;
	  }
  
	  .menu-items {
		list-style: none;
		padding: 0;
		margin: 0;
		display: none;
  
		&.open {
		  display: block;
		}
  
		li {
		  margin: 10px 0;
		  padding-top: 0.8rem;

		  &+li {
			border-top: 1px solid #FFF;
		  }
		}
  
		a {
		  text-decoration: none;
		  color: white;
		  font-size: 18px;
		}
	  }
	}
  </style>
  
  <div class="mobile-menu">
	<button class="menu-toggle" on:click={toggleMenu}>☰</button>
	<ul class:open={isMobileMenuOpen} class="menu-items">
	  <li><a href="/">Home</a></li>
	  <li><a href="/services">Services</a></li>
	  <li><a href="/kooperationen">Kooperationen</a></li>
	  <li><a href="/kontakt">Kontakt</a></li>
	</ul>
  </div>
  