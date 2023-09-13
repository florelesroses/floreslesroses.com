<script>
	import '../app.css';
	import { preparePageTransition } from '$lib/config/page-transition';

	preparePageTransition();
</script>

<header id="header" class="pt-lg-5 pt-md-3 pt-2 position-absolute w-100">
	<div class="container-fluid px-xl-17 px-lg-5 px-md-3 px-0 d-flex flex-wrap">
		<div class="col-6 col-sm-3 col-lg-2 order-sm-2 order-md-0 dis-none">
			<!-- langList -->
			<ul class="nav nav-tabs langList pt-xl-6 pt-lg-4 pt-3 border-bottom-0" />
		</div>
		<div class="col-12 col-sm-6 col-lg-8 static-block">
			<!-- mainHolder -->
			<div class="mainHolder justify-content-center">
				<!-- pageNav1 -->
				<nav class="navbar navbar-expand-lg navbar-light p-0 pageNav1 position-static">
					<button type="button" class="navbar-toggle collapsed position-relative mt-md-2" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false">
						<span class="sr-only">Toggle navigation</span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNav">
						<ul class="navbar-nav mx-auto text-uppercase d-inline-block">
							
							<li class="nav-item">
								<a class="d-block" href="about-us.html">Inicio</a>
							</li>
							<li class="nav-item">
								<a class="d-block" href="about-us.html">Tienda</a>
							</li>
							<li class="nav-item flex justify-center">
								<a class="nLogo" href="home.html"><img src="/images/logo.png" class="w-[1000xpx] img-fluid" alt="Botanical" /></a>
							</li>
							
							<li class="nav-item">
								<a class="d-block" href="about-us.html">Nosotros</a>
							</li>
							
							<li class="nav-item">
								<a class="d-block" href="contact-us.html">Contacto</a>
							</li>
						</ul>
					</div>
				</nav>
				<div class="logo">
					<a href="home.html"><img src="/images/logo.png" alt="Botanical" class="img-fluid" /></a>
				</div>
			</div>
		</div>
		<div class="col-6 col-sm-3 col-lg-2 order-sm-3 order-md-0 dis-none">
			
		</div>
	</div>
</header>
<slot />
<footer id="footer" class="container-fluid overflow-hidden px-lg-20">
	<div class="copyRightHolder text-center pt-lg-5 pb-lg-4 py-3">
		<p class="mb-0">©Copyright All Rights Reserved.</p>
	</div>
</footer>
