<script>
	import { fade } from 'svelte/transition';
	let title = '';
</script>

<svelte:head>
	<title>{title}: Flores Les Roses</title>
</svelte:head>
<section class="w-full" in:fade={{ duration: 400 }} out:fade={{ duration: 400 }}>
	<section class="introBannerHolder d-flex w-100 bgCover" style="filter: blur(1.5rem);background-image: url(https://images.pexels.com/photos/1023952/pexels-photo-1023952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);" />
	<div class="contactSec container pt-xl-24 pb-xl-23 py-lg-20 pt-md-16 pb-md-10 pt-10 pb-0">.</div>
</section>
