<script>
	import { PRODUCTS_TAGS } from '$lib/data/info';
	import PRODUCTS from '$lib/data/products.js';
	import { formatMoney } from '$lib/helpers/helper';
	import Alert from '$lib/components/Alert.svelte';
	import { countCartItems, shoppingCartAddProduct } from '$lib/cart/shoppingCart.js';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	export let data;
	import { itemsCart } from '$lib/cart/StoreCart';
	let filter = data.filter;
	let PRODUCTS_SHOWING = [];
	let total_products = 0;
	let open = false;
	let message = '';
	let title = '';

	onMount(() => {
		updateProducts(filter);
	});

	function updateProducts(filter_py) {
		if (filter_py != null) {
			PRODUCTS_SHOWING = PRODUCTS.filter((producto) => producto.category === filter_py);
		} else {
			PRODUCTS_SHOWING = PRODUCTS;
		}
		filter = filter_py;
		total_products = PRODUCTS_SHOWING.length;
	}

	function addToCart(id) {
		shoppingCartAddProduct(id);
		open = true;
		title = 'Producto agregado';
		message = 'El producto esta en tu carrito';
		itemsCart.update((n) => countCartItems());
	}
</script>

<svelte:head>
	<title>Tienda: Flores Les Roses</title>
</svelte:head>

<Alert bind:open {message} {title} />
<section class="w-full" in:fade={{ duration: 400 }} out:fade={{ duration: 400 }}>
	<section class="introBannerHolder d-flex w-100 bgCover" style="filter: blur(1.5rem);background-image: url(https://images.pexels.com/photos/1103624/pexels-photo-1103624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);" />
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
							<div class="col-12 col-sm-6 col-lg-3 featureCol mb-7" data-aos="fade-down">
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
				</article>
			</div>
		</div>
	</div>
</section>
