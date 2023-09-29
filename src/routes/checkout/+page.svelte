<script>
	import { fade } from 'svelte/transition';
	import PRODUCTS from '$lib/data/products.js';
	import ButtonPay from '$lib/components/ButtonPay.svelte';
	import { calculateCartTotal, countCartItems, shoppingCartGetAllItems, shoppingCartRemoveItem, shoppingCartUpdateQuantity } from '$lib/cart/shoppingCart';
	import { formatMoney } from '$lib/helpers/helper';
	import { itemsCart } from '$lib/cart/StoreCart';
	import { openWompi } from '$lib/helpers/paymentGateway';
	import { goto } from '$app/navigation';
	let cart = shoppingCartGetAllItems();

	function updateCart() {
		cart = shoppingCartGetAllItems();
		itemsCart.update((v) => countCartItems());
	}
	async function checkout() {
		let responseGateWay = await openWompi()
	}
</script>

<svelte:head>
	<title>Checkout: Flores Les Roses</title>
</svelte:head>
<section class="w-full" in:fade={{ duration: 400 }} out:fade={{ duration: 400 }}>
	<section class="introBannerHolder d-flex w-100 bgCover" style="filter: blur(1.5rem);background-image: url(https://images.pexels.com/photos/1023952/pexels-photo-1023952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);" />
	<div class="contactSec container pt-xl-24 pb-xl-23 py-lg-20 pt-md-16 pb-md-10 pt-10 pb-0">
		<div class="row">
			<div class="col-12">
				<ul class="list-unstyled contactListHolder mb-0 d-flex flex-wrap text-center">
					<h1 data-aos="fade-down" data-aos-delay="200" class="text-4xl w-full font-extrabold text-left aos-init aos-animate">Checkout</h1>

					<div class="relative overflow-x-auto" />
				</ul>
			</div>
		</div>
		<div class="row mt-10">
			<table class="w-full text-sm text-left text-gray-50 noselect">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-text-gray-50">
					<tr>
						<th scope="col" class="px-6 py-3"> producto </th>
						<th scope="col" class="px-6 py-3"> Precio </th>
						<th scope="col" class="px-6 py-3"> Cantidad </th>
						<th scope="col" class="px-6 py-3"> Total </th>
						<th scope="col" class="" />
					</tr>
				</thead>
				<tbody>
					{#each cart as item}
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td class="px-6 py-4 text-gray-500 flex">
								<img src={'images/products/' + PRODUCTS[item.id - 1].image} class="w-[50px] object-cover h-[50px] noselect" alt={PRODUCTS[item.id - 1].name} />
								<p class="px-5 py-2">{PRODUCTS[item.id - 1].name}</p>
							</td>
							<td class="px-6 py-4 text-gray-500"> {PRODUCTS[item.id - 1].price} </td>
							<td class="px-6 py-4 text-gray-500 flex">
								<button
									on:click={() => {
										shoppingCartUpdateQuantity(item.id, '-');
										updateCart();
									}}
									class="w-[20px] h-[20px] cursor-default rounded-md bg-[#A993F1] mx-2 text-white font-extrabold">-</button
								>
								{item.amount}
								<button
									on:click={() => {
										shoppingCartUpdateQuantity(item.id, '+');
										updateCart();
									}}
									class="w-[20px] h-[20px] cursor-default rounded-md bg-[#A993F1] mx-2 text-white font-extrabold">+</button
								>
							</td>
							<td class="px-6 py-4 text-gray-500"> {formatMoney(parseInt(PRODUCTS[item.id - 1].price) * parseInt(item.amount))} </td>
							<td class="px-6 py-4 text-gray-500">
								<button
									on:click={() => {
										shoppingCartRemoveItem(item.id);
										updateCart();
									}}
								>
									<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#A993F1" fill="none" stroke-linecap="round" stroke-linejoin="round">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" stroke-width="0" fill="#A993F1" />
										<path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" stroke-width="0" fill="#A993F1" />
									</svg>
								</button>
							</td>
						</tr>
					{:else}
						<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
							<td class="px-6 py-4 text-gray-500 text-center text-2xl" colspan="4">
								<p class="w-full">No hay productos en el carrito</p>
								<a href="/store" class="mt-5 btn btnTheme btnShop fwEbold text-white md-round py-2 px-3 py-md-3 px-md-4">Ver productos <i class="fas fa-arrow-right ml-2" /></a>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
			{#if cart.length > 0}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="w-full mt-5" >
					<div on:click={() => checkout()}>
						<ButtonPay />
					</div>
				</div>
			{/if}
		</div>
	</div>
</section>
