<script>
	import { PRODUCTS_TAGS } from '$lib/data/info';
	import PRODUCTS from '$lib/data/products.js';
	import { formatMoney } from '$lib/helpers/helper';
	import { onMount } from 'svelte';
	export let data;

	let filter = data.filter;
	let PRODUCTS_SHOWING = [];
	let total_products = 0

	onMount(() => {
		updateProducts(filter);
	});

	function updateProducts(filter_py) {
		if (filter_py != null) {
			PRODUCTS_SHOWING = PRODUCTS.filter((producto) => producto.category === filter_py);
		} else {
			PRODUCTS_SHOWING = PRODUCTS;
		}
		filter = filter_py
		total_products = PRODUCTS_SHOWING.length;
	}
</script>

<svelte:head>
	<title>Tienda: Flores Les Roses</title>
</svelte:head>

<section class="introBannerHolder d-flex w-100 bgCover" style="background-image: url(images/b-bg7.jpg);" />
<div class="twoColumns container pt-lg-23 pb-lg-20 pt-md-16 pb-md-4 pt-10 pb-4">
	<div class="row">
		<div class="col-12 col-lg-12 order-lg-3">
			<article id="content">
				<header class="show-head d-flex flex-wrap justify-content-between mb-7">
					<ul class="list-unstyled viewFilterLinks d-flex flex-nowrap align-items-center">
						<li class="mr-2">Mostrando {total_products} resultados de {filter ? filter : 'todos los productos'}</li>
					</ul>
					<!-- sortGroup -->
					<div class="sortGroup">
						<div class="d-flex flex-nowrap align-items-center">
							<strong class="groupTitle mr-2">Categorías:</strong>
							<div class="dropdown">
								<button class="dropdown-toggle buttonReset" type="button" id="sortGroup" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Filtrar Productos</button>
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
								<ul class="dropdown-menu dropdown-menu-right" aria-labelledby="sortGroup">
									<li class="cursor-default" on:click={() => updateProducts(null)}>Todos</li>
									{#each PRODUCTS_TAGS as tag}
										<li class="cursor-default" on:click={() => updateProducts(tag)}>{tag}</li>
									{/each}
								</ul>
							</div>
						</div>
					</div>
				</header>
				<div class="row">
					{#each PRODUCTS_SHOWING as product}
						<div class="col-12 col-sm-6 col-lg-3 featureCol mb-7">
							<div class="border">
								<div class="imgHolder position-relative w-100 overflow-hidden">
									<img src="images/products/{product.image}" alt="description" class="img-fluid w-100 h-[300px] object-contain" />
									<!-- svelte-ignore a11y-missing-content -->
									<ul class="list-unstyled postHoverLinskList d-flex justify-content-center m-0">
										<li class="mr-2 overflow-hidden"><a href="/" class="icon-cart d-block" /></li>
										<li class="mr-2 overflow-hidden"><a href="/" class="icon-eye d-block" /></li>
									</ul>
								</div>
								<div class="text-center py-5 px-4">
									<span class="title d-block mb-2"><a href="shop-detail.html">{product.name}</a></span>
									<span class="price d-block fwEbold">{formatMoney(product.price)}</span>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</article>
		</div>
	</div>
</div>
