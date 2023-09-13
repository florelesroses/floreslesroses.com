<script>
	import '../app.css';
	import { preparePageTransition } from '$lib/config/page-transition';
	import { INFO_COMPANY, PRODUCTS_TAGS, SOCIAL } from '$lib/data/info';

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
		<div class="col-6 col-sm-3 col-lg-2 order-sm-3 order-md-0 dis-none" />
	</div>
</header>
<slot />
<!-- footerHolder -->
<aside class="footerHolder container-fluid overflow-hidden px-xl-20 px-lg-14 pt-xl-12 pb-xl-8 pt-lg-12 pt-md-8 pt-10 pb-lg-8">
	<div class="d-flex flex-wrap flex-lg-nowrap">
		<div class="coll-1 pr-3 mb-sm-4 mb-3 mb-lg-0">
			<h3 class="headingVI fwEbold text-uppercase mb-7">Contactanos</h3>
			<ul class="list-unstyled footerContactList mb-3">
				<li class="mb-3 d-flex flex-nowrap">
					<span class="icon icon-place mr-3" />
					<address class="fwEbold m-0">Dirección: {INFO_COMPANY.ADDRESS}</address>
				</li>
				<li class="mb-3 d-flex flex-nowrap"><span class="icon icon-phone mr-3" /> <span class="leftAlign">Teléfono : <a href="mailto:">{INFO_COMPANY.COUNTRY_CODE} {INFO_COMPANY.PHONE}</a></span></li>
				<li class="email d-flex flex-nowrap"><span class="icon icon-email mr-2" /> <span class="leftAlign">Correo: <a href="mailto:{INFO_COMPANY.EMAIL}"> {INFO_COMPANY.EMAIL} </a></span></li>
				<li class="email d-flex flex-nowrap"><span class="icon icon-email mr-2" /> <span class="leftAlign">Correo: <a href="mailto:{INFO_COMPANY.EMAIL_SEONDARY}"> {INFO_COMPANY.EMAIL_SEONDARY} </a></span></li>
				<li class="email d-flex flex-nowrap"><span class="icon icon-email mr-2" /> <span class="leftAlign">Correo: <a href="mailto:{INFO_COMPANY.EMAIL_THIRD}"> {INFO_COMPANY.EMAIL_THIRD} </a></span></li>
			</ul>
			<ul class="list-unstyled followSocailNetwork d-flex flex-nowrap">
				<li class="fwEbold mr-xl-11 mr-sm-6 mr-4">Síguenos:</li>
				<li class="mr-xl-6 mr-sm-4 mr-2"><a target="_blank" href={SOCIAL.INSTAGRAM}><span class="fab fa-instagram"></span></a></li>
				<li class="mr-xl-6 mr-sm-4 mr-2"><a target="_blank" href={SOCIAL.WHATSAPP}><span class="fab fa-whatsapp"></span></a></li>
			</ul>
		</div>
		<div class="coll-2 mb-sm-4 mb-3 mb-lg-0">
			<h3 class="headingVI fwEbold text-uppercase mb-6">Information</h3>
			<ul class="list-unstyled footerNavList">
				<li class="mb-1"><a href="/">Inicio</a></li>
				<li class="mb-2"><a href="/about">Sobre nosotros</a></li>
				<li class="mb-2"><a href="/contact">Contactenos</a></li>
				<li class="mb-2"><a href="/store">Tienda</a></li>
			</ul>
		</div>
		
		<div class="coll-4 mb-sm-4 mb-3 mb-lg-0">
			<h3 class="headingVI fwEbold text-uppercase mb-7 pl-xl-14 pl-lg-10">Categorías</h3>
			<ul class="list-unstyled tagNavList d-flex flex-wrap justify-content-lg-end mb-0">
				{#each PRODUCTS_TAGS as category}
					 <li class="text-center mb-2 mr-2"><a href="/product?tag={category}" class="md-round d-block py-2 px-2">{category}</a></li>
				{/each}
				
			</ul>
		</div>
	</div>
</aside>
<footer id="footer" class="container-fluid overflow-hidden px-lg-20">
	<div class="copyRightHolder text-center pt-lg-5 pb-lg-4 py-3">
		<p class="mb-0">©Copyright All Rights Reserved.</p>
	</div>
</footer>
