<script>
	import { itemsCart } from '$lib/cart/StoreCart';
	import { countCartItems, shoppingCartAddProduct } from '$lib/cart/shoppingCart';
	import Alert from '$lib/components/Alert.svelte';
	import PRODUCTS from '$lib/data/products';
	import { formatMoney } from '$lib/helpers/helper';
	import { fade } from 'svelte/transition';

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}
	shuffleArray(PRODUCTS);
	const RANDOM_PRODUCTS = PRODUCTS.slice(0, 4);
	let open = false;
	let title, message;
	function addToCart(id) {
		shoppingCartAddProduct(id);
		open = true;
		title = 'Producto agregado';
		message = 'El producto esta en tu carrito';
		itemsCart.update((n) => countCartItems());
	}
</script>

<svelte:head>
	<title>Home Page</title>
</svelte:head>
<Alert bind:open {message} {title} />
<section class="w-full" in:fade={{ duration: 400 }} out:fade={{ duration: 400 }}>
	<section data-aos="fade-down" class="introBlock position-relative w-full h-[100vh] " style="background-image: url(/images/banner.jpg); background-repeat: no-repeat; background-position: center; background-size: cover;">
		<div class="h-full flex justify-center items-center">
			<div class="">
				<h1 data-aos="fade-down" data-aos-delay="200" class="text-6xl w-full font-extrabold text-center">Flores <span>Les roses</span></h1>
				<p data-aos="fade-down" data-aos-delay="300" class="w-full text-center text-3xl">Un homena a nuestar hermosa Colombia</p>
			</div>
		</div>
	</section>
	<section class="chooseUs-sec container pt-xl-22 pt-lg-20 pt-md-16 pt-10 pb-xl-12 pb-md-7 pb-2">
		<div class="row">
			<div class="col-12 col-lg-6 mb-lg-0 mb-4">
				<img src="images/img01.jpg" alt="description" class="img-fluid floating_animation" />
			</div>
			<div class="col-12 col-lg-6 pr-4">
				<h2 class="headingII fwEbold playfair position-relative mb-6 pb-5" data-aos="fade-down"  data-aos-delay="0">¿Por qué escogernos?</h2>
				<p class="mb-xl-14 mb-lg-10" data-aos="fade-down"  data-aos-delay="0">En Flores Le Roses, somos más que una simple floristería; somos tu compañero en la búsqueda de emociones y momentos especiales. Aquí te presentamos tres razones convincentes para elegirnos como tu floristería de confianza en Bogotá:</p>
				<ul class="list-unstyled chooseList">
					<li data-aos="fade-down"  data-aos-delay="200" class="d-flex justify-content-start mb-xl-7 mb-lg-5 mb-3">
						<span class="icon icon-plant" />
						<div class="alignLeft d-flex justify-content-start flex-wrap">
							<h3 class="headingIII fwEbold mb-2">Pasión por las Flores:</h3>
							<p>En Flores Le Roses, la pasión por las flores es nuestra esencia. Seleccionamos las flores más frescas y las transformamos en hermosos arreglos que transmiten amor y alegría. Nuestro compromiso con la belleza y la autenticidad está presente en cada pétalo.</p>
						</div>
					</li>
					<li data-aos="fade-down"  data-aos-delay="250" class="d-flex justify-content-start mb-xl-6 mb-lg-5 mb-4">
						<span class="icon icon-ic-plant" />
						<div class="alignLeft d-flex justify-content-start flex-wrap">
							<h3 class="headingIII fwEbold mb-2">Variedad de Opciones:</h3>
							<p>Entendemos que cada ocasión es única, por eso ofrecemos una amplia variedad de opciones para adaptarnos a tus gustos. Desde románticos ramos de rosas hasta elegantes cajas florales y bonitos bonsáis, encontrarás la opción perfecta en nuestro catálogo.</p>
						</div>
					</li>
					<li data-aos="fade-down"  data-aos-delay="300" class="d-flex justify-content-start">
						<span class="icon icon-desert" />
						<div class="alignLeft d-flex justify-content-start flex-wrap">
							<h3 class="headingIII fwEbold mb-2">Entrega Confiable:</h3>
							<p>En Flores Le Roses, sabemos que la puntualidad es esencial. Nuestro servicio de entrega en Bogotá es confiable y eficiente, garantizando que tus arreglos lleguen frescos y en perfecto estado a su destino. Cuenta con nosotros para hacer que cada momento sea inolvidable.</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<div class="contactListBlock container overflow-hidden pt-xl-8 pt-lg-10 pt-md-8 pt-4 pb-xl-12 pb-lg-10 pb-md-4 pb-1">
		<div class="row">
			<div data-aos="fade-down"  data-aos-delay="0" class="col-12 col-sm-6 col-lg-4 mb-4 mb-lg-0">
				<div class="contactListColumn border overflow-hidden py-xl-5 py-md-3 py-2 px-xl-6 px-md-3 px-3 d-flex">
					<span class="icon icon-van" />
					<div class="alignLeft pl-2">
						<strong class="headingV fwEbold d-block mb-1">Envios</strong>
						<p class="m-0">Envios a todos los paises</p>
					</div>
				</div>
			</div>
			<div data-aos="fade-down"  data-aos-delay="50" class="col-12 col-sm-6 col-lg-4 mb-4 mb-lg-0">
				<div class="contactListColumn border overflow-hidden py-xl-5 py-md-3 py-2 px-xl-6 px-md-3 px-3 d-flex">
					<span class="icon icon-gift" />
					<div class="alignLeft pl-2">
						<strong class="headingV fwEbold d-block mb-1">Tarjetas de regalo</strong>
						<p class="m-0">La mejor idea para regalar</p>
					</div>
				</div>
			</div>
			<div data-aos="fade-down" data-aos-delay="150" class="col-12 col-sm-6 col-lg-4 mb-4 mb-lg-0">
				<div class="contactListColumn border overflow-hidden py-xl-5 py-md-3 py-2 px-xl-6 px-md-3 px-3 d-flex">
					<span class="icon icon-call" />
					<div class="alignLeft pl-2">
						<strong class="headingV fwEbold d-block mb-1">Soporte 24 / 7</strong>
						<p class="m-0">Soporte especial</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<section class="dealSecHolder container-fluid overflow-hidden py-xl-12 py-lg-10 py-md-8 py-5">
		<header class="col-12 mainHeader mb-7 text-center">
			<p class="headingIV playfair fwEblod mb-5">Productos destacados</p>
			<span class="headerBorder d-block mb-md-5 mb-3"><img src="images/hbdr.png" alt="Header Border" class="img-fluid img-bdr" /></span>
		</header>
		<div class="row">
			{#each RANDOM_PRODUCTS as product}
				<div class="col-12 col-sm-6 col-lg-3 featureCol mb-7" data-aos="fade-down"  >
					<div class="border">
						<div class="imgHolder position-relative w-100 overflow-hidden">
							<img src="images/products/{product.image}" alt="description" class="img-fluid w-100 h-[300px] object-contain" />
							<!-- svelte-ignore a11y-no-static-element-interactions -->
							<!-- svelte-ignore a11y-missing-attribute -->
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<ul class="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
								<li class="mr-2 overflow-hidden" style="border-radius: 20px;">
									<a class="icon-cart d-block" on:click={() => addToCart(product.id)}> <span /> </a>
								</li>
								<!-- <li class="mr-2 overflow-hidden"><a href="/" class="icon-eye d-block" /></li> -->
							</ul>
						</div>
						<div class="text-center py-5 px-4">
							<span class="title d-block mb-2">{product.name}</span>
							<span class="price d-block fwEbold">{formatMoney(product.price)}</span>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>
</section>
