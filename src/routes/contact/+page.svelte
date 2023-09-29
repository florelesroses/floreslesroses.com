<script>
	import { INFO_COMPANY } from '$lib/data/info';
	import { fade } from 'svelte/transition';
	let name = '',
		phone = '',
		message = '',
		email = '';
	let visible = false;
	let response_form = false;
	let msg = '';
	const URL = 'https://formspree.io/f/xvojqzzk';
	async function sendFormContact() {
		visible = true;
		if (name == '' || phone == '' || email == '' || message == '') {
			msg = '⚠️ Complete todos los campos';
			return false;
		}

		try {
			const dataBody = JSON.stringify({
				name: name,
				phone: phone,
				email: email,
				message: message
			});
			const response = await fetch(URL, {
				method: 'POST',
				body: dataBody,
				headers: {
					Accept: 'application/json'
				}
			});

			if (!response) {
				response_form = false;
				msg = 'Fallo en el servidor, intente más tarde';
			} else {
				response_form = true;
				msg = 'El mensaje se ha enviado con éxito';
				name = '';
				phone = '';
				email = '';
				message = '';
			}
		} catch (error) {
			console.error(error);
		}
	}
</script>

<svelte:head>
	<title>Contacto: Flores Les Roses</title>
</svelte:head>
<section class="w-full" in:fade={{ duration: 400 }} out:fade={{ duration: 400 }}>
	<section class="introBannerHolder d-flex w-100 bgCover" style="filter: blur(1.5rem);background-image: url(https://images.pexels.com/photos/1023952/pexels-photo-1023952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);" />
	<div class="contactSec container pt-xl-24 pb-xl-23 py-lg-20 pt-md-16 pb-md-10 pt-10 pb-0">
		<div class="row">
			<div class="col-12">
				<ul class="list-unstyled contactListHolder mb-0 d-flex flex-wrap text-center">
					<li class="mb-lg-0 mb-6">
						<span class="icon d-block mx-auto bg-lightGray py-4 mb-4"><i class="fas fa-map-marker-alt" /></span>
						<strong class="title text-uppercase playfair mb-5 d-block">Bogotá</strong>
						<address class="mb-0">{INFO_COMPANY.ADDRESS} -<span class="d-block"> {INFO_COMPANY.CITY} </span></address>
					</li>
					<li class="mb-lg-0 mb-6">
						<span class="icon d-block mx-auto bg-lightGray py-4 mb-4"><i class="fas fa-map-marker-alt" /></span>
						<strong class="title text-uppercase playfair mb-5 d-block">Cali</strong>
						<address class="mb-0">{INFO_COMPANY.ADDRESS2} -<span class="d-block"> {INFO_COMPANY.CITY} </span></address>
					</li>
					<li class="mb-lg-0 mb-6">
						<span class="icon d-block mx-auto bg-lightGray py-4 mb-4"><i class="fas fa-map-marker-alt" /></span>
						<strong class="title text-uppercase playfair mb-5 d-block">Medellín</strong>
						<address class="mb-0">{INFO_COMPANY.ADDRESS3} -<span class="d-block"> {INFO_COMPANY.CITY} </span></address>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="mapHolder flex">
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.608516751306!2d-74.06332752417892!3d4.663684341975599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a59204c792f%3A0x1b40ce84d1f19260!2sCra.%2019a%20%2377-18%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1694641198394!5m2!1ses-419!2sco" style="border:0;" title="Flores Les Roses" allowfullscreen={false} loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.6039141021074!2d-76.5338848!3d3.4460916999999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a662579d91a7%3A0x67ca88e65a15ff3f!2sCl%208%20%2310-75%2C%20COMUNA%203%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1sen!2sco!4v1695963349600!5m2!1sen!2sco" style="border:0;" title="Flores Les Roses" allowfullscreen={false} loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.117570541687!2d-75.614205!3d6.248234699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429823cdbd65d%3A0xfd63726ec7f69678!2sCra.%2092%20%2335c%2014%2C%20Santa%20Monica%2C%20Medell%C3%ADn%2C%20La%20Am%C3%A9rica%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1sen!2sco!4v1695963408243!5m2!1sen!2sco" style="border:0;" title="Flores Les Roses" allowfullscreen={false} loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
	</div>
	<section class="contactSecBlock container pt-xl-23 pb-xl-24 pt-lg-20 pb-lg-10 pt-md-16 pb-md-8 py-10">
		<div class="row">
			<header class="col-12 mainHeader mb-10 text-center">
				<h1 class="headingIV playfair fwEblod mb-7">Contactanos</h1>
				<p>Estamos aquí para responder a tus preguntas, recibir tus comentarios y ayudarte en todo lo que necesites. No dudes en ponerte en contacto con nosotros a través de los siguientes medios</p>
			</header>
		</div>
		<div class="row">
			<div class="col-12">
				<form class="contactForm">
					<div class="d-flex flex-wrap row1 mb-md-1">
						<div class="form-group coll mb-5">
							<input type="text" id="name" class="form-control text-custom" bind:value={name} placeholder="Tú nombre  *" />
						</div>
						<div class="form-group coll mb-5">
							<input type="email" class="form-control text-custom" bind:value={email} placeholder="Tu email  *" />
						</div>
						<div class="form-group coll mb-5">
							<input type="tel" class="form-control text-custom" bind:value={phone} placeholder="Número de teléfono  *" />
						</div>
					</div>
					<div class="form-group w-100 mb-6">
						<textarea class="form-control text-custom" placeholder="Meesage  *" bind:value={message} />
					</div>
					<div class="text-center">
						<button type="submit" class="btn btnTheme btnShop md-round fwEbold text-white py-3 px-4 py-md-3 px-md-4">Send Message</button>
					</div>
					{#if visible}
						<p class={response_form ? 'text-green-600' : 'text-red-800'}>{msg}</p>
					{/if}
					<br />
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div on:click={sendFormContact} class="btn btnTheme btnShop fwEbold text-white md-round py-2 px-3 py-md-3 px-md-4">Enviar <i class="fas fa-arrow-right ml-2" /></div>
				</form>
			</div>
		</div>
	</section>
</section>

<style>
	.text-custom {
		color: rgb(78, 78, 78);
	}
</style>
