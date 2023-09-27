<script>
	import '../app.css';
	import { preparePageTransition } from '$lib/config/page-transition';
	import { INFO_COMPANY, PRODUCTS_TAGS, SOCIAL } from '$lib/data/info';
	import { itemsCart } from '$lib/cart/StoreCart';
	import { Confetti } from 'svelte-confetti';
	import { onMount } from 'svelte';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	onMount(() => {
		AOS.init();
		AOS.refresh();
	});
	
	preparePageTransition();

	let cart = 0;
	let allow_confetti = false;

	itemsCart.subscribe((v) => {
		cart = v;
		if (cart > 0) {
			allow_confetti = true;
			setTimeout(() => {
				allow_confetti = false;
			}, 2000);
		}
	});
</script>

<header id="header" class="pt-lg-5 pt-md-3 pt-2 position-absolute w-100 relative">
	<div class="container-fluid px-xl-17 px-lg-5 px-md-3 px-0 d-flex flex-wrap">
		<div class="col-6 col-sm-3 col-lg-2 order-sm-2 order-md-0 dis-none">
			<ul class="nav nav-tabs langList pt-xl-6 pt-lg-4 pt-3 border-bottom-0" />
		</div>
		<div class="col-12 col-sm-6 col-lg-8 static-block relative">
			<div class="mainHolder justify-content-center">
				<nav class="navbar navbar-expand-lg navbar-light p-0 pageNav1 position-static">
					<div class="navbar-toggle" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false">
						<div class="background">
							<button class="menu__icon burger_button">
								<span />
								<span />
								<span />
							</button>
						</div>
					</div>
					<div class="collapse navbar-collapse" id="navbarNav">
						<ul class="navbar-nav mx-auto text-uppercase d-inline-block">
							<li class="nav-item">
								<a class="d-block" href="/">Inicio</a>
							</li>
							<li class="nav-item">
								<a class="d-block" href="/store">Tienda</a>
							</li>
							<li class="nav-item flex justify-center">
								<a class="nLogo" href="/"><img src="/images/logo.png" class="w-[1000xpx] img-fluid" alt="Botanical" /></a>
							</li>

							<li class="nav-item">
								<a class="d-block" href="/about">Nosotros</a>
							</li>

							<li class="nav-item">
								<a class="d-block" href="/contact">Contacto</a>
							</li>
						</ul>
					</div>
				</nav>
				<div class="logo">
					<a href="/"><img src="/images/logo.png" alt="Botanical" class="img-fluid" /></a>
				</div>
			</div>
		</div>
		<div class="col-6 col-sm-3 col-lg-2 order-sm-3 order-md-0 dis-none" />
	</div>
	<div class="w-[30px] h-[70px] pt-2 pr-20 pl-5 fixed top-0 mt-32 md:mt-5 lg:mt-5 right-0 bg-[#FDC1C8] rounded-l-2xl z-50">
		<div class="relative">
			{#if allow_confetti}
				<Confetti />
			{/if}
			<div class="bg-red-900 absolute left-10 rounded-full w-[25px] h-[25px] flex justify-center items-center text-white">{cart}</div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-white w-[50px]"><path d="M5 7h13.79a2 2 0 0 1 1.99 2.199l-.6 6A2 2 0 0 1 18.19 17H8.64a2 2 0 0 1-1.962-1.608L5 7z" /><path d="M5 7l-.81-3.243A1 1 0 0 0 3.22 3H2" /><path d="M8 21h2" /><path d="M16 21h2" /></svg>
		</div>
	</div>
</header>
<main>
	<slot />
</main>
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
				<li class="mr-xl-6 mr-sm-4 mr-2"><a target="_blank" href={SOCIAL.INSTAGRAM}><span class="fab fa-instagram" /></a></li>
				<li class="mr-xl-6 mr-sm-4 mr-2"><a target="_blank" href={SOCIAL.WHATSAPP}><span class="fab fa-whatsapp" /></a></li>
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
					<li class="text-center mb-2 mr-2"><a href="/store?tag={category}" class="md-round d-block py-2 px-2">{category}</a></li>
				{/each}
			</ul>
		</div>
	</div>
</aside>
<footer id="footer" class="container-fluid overflow-hidden px-lg-20">
	<div class="copyRightHolder text-center pt-lg-5 pb-lg-4 py-3">
		<p class="mb-0">©Copyright - Flores Les Roses - All Rights Reserved.</p>
	</div>
</footer>

<style>
	.pageNav1 .navbar-toggle {
		border: none;
	}

	/* <reset-style> ============================ */
	.burger_button {
		border: none;
		background: none;
		padding: 0;
		margin: 0;
		cursor: pointer;
		font-family: inherit;
	}
	/* ============================ */
	/* <style for bg> ======== */
	.background {
		border-radius: 16px;
		border: 1px solid #1a1a1a;
		background: #ff89ba;
		mix-blend-mode: luminosity;
		box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(15px);
		width: 50px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* <style for menu__icon> ======== */
	.menu__icon {
		width: 32px;
		height: 32px;
		padding: 4px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transition: transform 0.4s;
	}

	.menu__icon span {
		width: 100%;
		height: 0.25rem;
		border-radius: 0.125rem;
		background-color: #f8f4f6;
		box-shadow: 0 0.5px 2px 0 #f8f4f6;
		transition: width 0.4s, transform 0.4s, background-color 0.4s;
	}

	.menu__icon :nth-child(1) {
		width: 75%;
	}

	.menu__icon :nth-child(2) {
		width: 50%;
	}

	.menu__icon:hover {
		transform: rotate(-90deg);
	}

	.menu__icon:hover span {
		width: 0.25rem;
		transform: translateX(10px);
		background-color: rgb(255, 59, 48);
	}
</style>
