<script>
	let hide = false;
	export let open = false;
	export let message;
	export let title;
	$: if (open == true) {
 		toggleModal();
	}
	$: if (hide == true) {
		setTimeout(() => {
			open = false;
		}, 500);
	}
	function toggleModal() {
		setTimeout(() => {
			hide = true;
		}, 4000);
		setTimeout(() => {
			hide = false;
			open = false;
		}, 4150);
	}
</script>

{#if open}
	<div class="z-50 fixed w-full mt-5 animate__animated {hide ? 'animate__fadeOut' : ''} h-[0px]" data-aos="fade-down">
		<div role="alert" class="rounded-xl border border-gray-100 bg-white p-4 full md:w-[400px] mx-[5%] sm:m-auto">
			<div class="flex items-start gap-4 h-auto overflow-hidden">
				<div class="flex w-full">
					<span class="text-green-600 flex justify-center items-center h-auto w-[30px]">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</span>
					<div class="flex-1 w-[calc(100%-30px)] pl-2">
						<strong class="block font-medium text-gray-900"> {title} </strong>
						<p class="mt-1 text-sm text-gray-700">{message}</p>
					</div>
				</div>
				<button class="text-gray-500 transition hover:text-gray-600" on:click={() => (hide = true)}>
					<span class="sr-only">Dismiss popup</span>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.animate__fadeOut {
		-webkit-animation-name: fadeOut;
		animation-name: fadeOut;
	}

	.animate__animated {
		-webkit-animation-duration: 0.5s;
		animation-duration: 0.5s;
		-webkit-animation-duration: 0.5s;
		animation-duration: 0.5s;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
	}

	@media (prefers-reduced-motion: reduce), print {
		.animate__animated {
			-webkit-animation-duration: 1ms !important;
			animation-duration: 1ms !important;
			-webkit-transition-duration: 1ms !important;
			transition-duration: 1ms !important;
			-webkit-animation-iteration-count: 1 !important;
			animation-iteration-count: 1 !important;
		}

		.animate__animated[class*='Out'] {
			opacity: 0;
		}
	}

	@keyframes fadeOut {
		0% {
			opacity: 1;
		}

		to {
			opacity: 0;
		}
	}
</style>
