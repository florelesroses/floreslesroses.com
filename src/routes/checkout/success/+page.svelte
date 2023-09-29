<script>
	import { fade } from 'svelte/transition';
	let title = 'Pago exitoso';
</script>

<svelte:head>
	<title>{title}: Flores Les Roses</title>
</svelte:head>
<section class="w-full" in:fade={{ duration: 400 }} out:fade={{ duration: 400 }}>
	<section class="introBannerHolder d-flex w-100 bgCover" style="filter: blur(1.5rem);background-image: url(https://images.pexels.com/photos/1023952/pexels-photo-1023952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);" />
	<div class="contactSec container py-5">
		<div class="success-animation">
			<svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
		</div>
	</div>
	<div class="w-full">
		<div data-aos="fade-down" data-aos-delay="200" class="text-4xl w-full font-extrabold text-center">
            Pago exitoso
        </div>
        <div class="w-full">
            <div class="m-auto text-center w-[300px] py-2">El pago se ha completado de forma exitosa, pronto nos pondremos en contacto contigo</div>
        </div>
        <div class="w-full flex justify-center mt-5">
            <a href="/store" class="m-auto mt-5 btn btnTheme btnShop fwEbold text-white md-round py-2 px-3 py-md-3 px-md-4">Ver productos <i class="fas fa-arrow-right ml-2" /></a>
        </div>
	</div>
</section>

<style>
	.checkmark {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		display: block;
		stroke-width: 2;
		stroke: #4bb71b;
		stroke-miterlimit: 10;
		box-shadow: inset 0px 0px 0px #4bb71b;
		animation: fill 0.4s ease-in-out 0.4s forwards, scale 0.3s ease-in-out 0.9s both;
		position: relative;
		top: 5px;
		right: 5px;
		margin: 0 auto;
	}
	.checkmark__circle {
		stroke-dasharray: 166;
		stroke-dashoffset: 166;
		stroke-width: 2;
		stroke-miterlimit: 10;
		stroke: #4bb71b;
		fill: #fff;
		animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
	}

	.checkmark__check {
		transform-origin: 50% 50%;
		stroke-dasharray: 48;
		stroke-dashoffset: 48;
		animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
	}

	@keyframes stroke {
		100% {
			stroke-dashoffset: 0;
		}
	}

	@keyframes scale {
		0%,
		100% {
			transform: none;
		}

		50% {
			transform: scale3d(1.1, 1.1, 1);
		}
	}

	@keyframes fill {
		100% {
			box-shadow: inset 0px 0px 0px 30px #4bb71b;
		}
	}
</style>
