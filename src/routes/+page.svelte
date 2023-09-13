<script>
	import PRODUCTS from '$lib/data/products';
	import { formatMoney } from '$lib/helpers/helper';

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}
	shuffleArray(PRODUCTS);
	const RANDOM_PRODUCTS = PRODUCTS.slice(0, 11);
</script>

<svelte:head>
	<title>Home Page</title>
</svelte:head>

<section class="introBlock position-relative">
	<div class="slick-fade">
		<div>
			<div class="align w-100 d-flex align-items-center bgCover" style="background-image: url(images/b-bg3.jpg);">
				<div class="container position-relative holder pt-xl-10 pt-0">
					<div class="row">
						<div class="col-12 col-xl-7">
							<div class="txtwrap pr-lg-10">
								<span class="title d-block text-uppercase fwEbold position-relative pl-2 mb-lg-5 mb-sm-3 mb-1">Bienvenid@ Flores Les Roses</span>
								<h2 class="fwEbold position-relative mb-xl-7 mb-lg-5">Productos para ese día especial</h2>
								<p class="mb-xl-15 mb-lg-10">Ofrecemos un servicio de entrega rápido y confiable en toda Bogotá. Ya sea que estés sorprendiendo a alguien en su cumpleaños, celebrando un aniversario o expresando tus condolencias, puedes confiar en nosotros para que tus flores lleguen frescas y hermosas a su destino, llevando tu mensaje de amor y afecto.</p>
								<a href="/store" class="btn btnTheme btnShop fwEbold text-white md-round py-2 px-3 py-md-3 px-md-4">Tienda <i class="fas fa-arrow-right ml-2" /></a>
							</div>
						</div>
						<div class="imgHolder3">
							<img src="images/img79.png" alt="description" class="img-fluid w-100" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div>
			<div class="align w-100 d-flex align-items-center bgCover" style="background-image: url(images/b-bg.jpg);">
				<div class="container position-relative holder pt-xl-10 pt-0">
					<div class="row">
						<div class="col-12 col-xl-7">
							<div class="txtwrap pr-lg-10">
								<span class="title d-block text-uppercase fwEbold position-relative pl-2 mb-lg-5 mb-sm-3 mb-1">Bienvenid@</span>
								<h1 class="fwEbold position-relative pb-lg-8 pb-4 mb-xl-7 mb-lg-6">Flores Les Roses</h1>
								<p class="mb-xl-15 mb-lg-10">En Flores Le Roses, hemos cultivado la pasión por las flores y la belleza natural durante años. Nos enorgullece ofrecer una amplia gama de arreglos florales y regalos que expresan amor, alegría, felicitación y gratitud de la manera más hermosa y fresca posible.</p>
								<a href="/store" class="btn btnTheme btnShop fwEbold text-white md-round py-md-3 px-md-4 py-2 px-3">Tienda <i class="fas fa-arrow-right ml-2" /></a>
							</div>
						</div>
						<div class="imgHolder">
							<img src="images/img77.png" alt="description" class="img-fluid w-100" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="slickNavigatorsWrap">
		<a href="/" class="slick-prev"><i class="icon-leftarrow" />.</a>
		<a href="/" class="slick-next"><i class="icon-rightarrow" />.</a>
	</div>
</section>
<section class="chooseUs-sec container pt-xl-22 pt-lg-20 pt-md-16 pt-10 pb-xl-12 pb-md-7 pb-2">
	<div class="row">
		<div class="col-12 col-lg-6 mb-lg-0 mb-4">
			<img src="images/img01.jpg" alt="description" class="img-fluid" />
		</div>
		<div class="col-12 col-lg-6 pr-4">
			<h2 class="headingII fwEbold playfair position-relative mb-6 pb-5">¿Por qué escogernos?</h2>
			<p class="mb-xl-14 mb-lg-10">En Flores Le Roses, somos más que una simple floristería; somos tu compañero en la búsqueda de emociones y momentos especiales. Aquí te presentamos tres razones convincentes para elegirnos como tu floristería de confianza en Bogotá:</p>
			<ul class="list-unstyled chooseList">
				<li class="d-flex justify-content-start mb-xl-7 mb-lg-5 mb-3">
					<span class="icon icon-plant" />
					<div class="alignLeft d-flex justify-content-start flex-wrap">
						<h3 class="headingIII fwEbold mb-2">Pasión por las Flores:</h3>
						<p>En Flores Le Roses, la pasión por las flores es nuestra esencia. Seleccionamos las flores más frescas y las transformamos en hermosos arreglos que transmiten amor y alegría. Nuestro compromiso con la belleza y la autenticidad está presente en cada pétalo.</p>
					</div>
				</li>
				<li class="d-flex justify-content-start mb-xl-6 mb-lg-5 mb-4">
					<span class="icon icon-ic-plant" />
					<div class="alignLeft d-flex justify-content-start flex-wrap">
						<h3 class="headingIII fwEbold mb-2">Variedad de Opciones:</h3>
						<p>Entendemos que cada ocasión es única, por eso ofrecemos una amplia variedad de opciones para adaptarnos a tus gustos. Desde románticos ramos de rosas hasta elegantes cajas florales y bonitos bonsáis, encontrarás la opción perfecta en nuestro catálogo.</p>
					</div>
				</li>
				<li class="d-flex justify-content-start">
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
		<div class="col-12 col-sm-6 col-lg-4 mb-4 mb-lg-0">
			<div class="contactListColumn border overflow-hidden py-xl-5 py-md-3 py-2 px-xl-6 px-md-3 px-3 d-flex">
				<span class="icon icon-van" />
				<div class="alignLeft pl-2">
					<strong class="headingV fwEbold d-block mb-1">Envios</strong>
					<p class="m-0">Envios a todos los paises</p>
				</div>
			</div>
		</div>
		<div class="col-12 col-sm-6 col-lg-4 mb-4 mb-lg-0">
			<div class="contactListColumn border overflow-hidden py-xl-5 py-md-3 py-2 px-xl-6 px-md-3 px-3 d-flex">
				<span class="icon icon-gift" />
				<div class="alignLeft pl-2">
					<strong class="headingV fwEbold d-block mb-1">Tarjetas de regalo</strong>
					<p class="m-0">La mejor idea para regalar</p>
				</div>
			</div>
		</div>
		<div class="col-12 col-sm-6 col-lg-4 mb-4 mb-lg-0">
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
		<h1 class="headingIV playfair fwEblod mb-5">Productos destacados</h1>
		<span class="headerBorder d-block mb-md-5 mb-3"><img src="images/hbdr.png" alt="Header Border" class="img-fluid img-bdr" /></span>
	</header>
	<div class="dealSlider w-100 px-xl-10 px-lg-5 px-md-2">
		{#each RANDOM_PRODUCTS as product}
			<div>
				<div class="featureCol position-relative w-100 px-3 mb-sm-8 mb-6">
					<div class="border">
						<div class="imgHolder position-relative w-100 overflow-hidden">
							<img src="images/products/{product.image}" alt="description" class="img-fluid w-100 h-[300px] object-contain" />
							<!-- svelte-ignore a11y-missing-content -->
							<ul class="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
								<li class="mr-2 overflow-hidden"><a href="/" class="icon-cart d-block" /></li>
								<li class="mr-2 overflow-hidden"><a href="/" class="icon-eye d-block" /></li>
							</ul>
						</div>
						<div class="text-center py-5 px-2">
							<span class="title d-block mb-2"><a href="shop-detail.html">{product.name}</a></span>
							<span class="price d-block fwEbold">{formatMoney(product.price)}</span>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
