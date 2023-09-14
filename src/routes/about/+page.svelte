<script>

	import { FACTS } from "$lib/data/info";
	import { fade } from "svelte/transition";

</script>
<svelte:head>
	<title>Sobre nosotros: Flores Le Roses</title>
</svelte:head>
<section class="w-full" in:fade={{ duration: 400 }} out:fade={{ duration: 400 }}>
	<section class="introBannerHolder d-flex w-100 bgCover" style="filter: blur(1.5rem);background-image: url(https://images.pexels.com/photos/1859585/pexels-photo-1859585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);" />
	<section class="abtSecHolder container pt-xl-24 pb-xl-12 pt-lg-20 pb-lg-10 pt-md-16 pb-md-8 pt-10 pb-5">
		<div class="row">
			<div class="col-12 col-lg-6 pt-xl-12 pt-lg-8">
				<h2 class="playfair fwEbold position-relative mb-7 pb-5">
					<strong class="d-block">Sobre nosotros</strong>
				</h2>
				<p class="pr-xl-16 pr-lg-10 mb-lg-0 mb-6">En Flores Le Roses, nuestra historia se teje con los hilos de la pasión, la dedicación y la admiración por la belleza natural. Desde nuestros inicios en Bogotá, hemos abrazado el arte de las flores con un compromiso inquebrantable. Lo que comenzó como una modesta floristería local se ha convertido en un faro de emociones florales, donde cada pétalo cuenta una historia de amor, amistad y gratitud.</p>
			</div>
			<div class="col-12 col-lg-6">
				<img src="https://images.pexels.com/photos/1103624/pexels-photo-1103624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="description" class="img-fluid rounded-2xl" />
			</div>
		</div>
	</section>
	<section class="counterSec container pt-xl-12 pb-xl-24 pt-lg-10 pb-lg-20 pt-md-8 pb-md-16 pt-5 pb-10">
		<div class="row">
			<div class="col-12">
				<!-- progressCounter -->
				<ul class="progressCounter flex justify-center list-unstyled mb-2 d-flex flex-wrap text-capitalize text-center">
					<li class="mb-md-0 mb-4">
						<strong class="d-block fwEbold counter mb-2"> +{FACTS.CUSTOMERS_HAPPY} </strong>
						<strong class="d-block text-uppercase txtWrap">Clientes Felices</strong>
					</li>
					<li class="mb-md-0 mb-4">
						<strong class="d-block fwEbold counter mb-2">+{FACTS.PRODUCTS}</strong>
						<strong class="d-block text-uppercase txtWrap">Productos</strong>
					</li>
					<li class="mb-md-0 mb-4">
						<strong class="d-block fwEbold counter mb-2">+{FACTS.DELIVERY}</strong>
						<strong class="d-block text-uppercase txtWrap">Entregas realizadas</strong>
					</li>
				
				</ul>
			</div>
		</div>
	</section>
	<section class="introSec bg-lightGray pt-xl-12 pb-xl-7 pt-10 pb-10">
		<div class="container">
			<div class="row">
				<div class="col-12 col-lg-6 mb-lg-0 mb-6">
					<img src="https://images.pexels.com/photos/1859585/pexels-photo-1859585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="description" class="img-fluid rounded-2xl" />
				</div>
				<div class="col-12 col-lg-6">
					<div id="accordion" class="accordionList pt-lg-12">
						<div class="card mb-2">
							<div class="card-header px-xl-5 py-xl-3" id="headingOne">
								<h5 class="mb-0">
									<button class="btn btn-link fwEbold text-uppercase text-left w-100 p-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
										Nuestra Historia<i class="fas fa-sort-down float-right" />
									</button>
								</h5>
							</div>
							<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
								<div class="card-body px-xl-5 py-0">
									<p class="mb-7">En Flores Le Roses, nuestra historia es un viaje apasionante que comenzó con un profundo amor por las flores. Desde nuestros inicios en Bogotá, hemos cultivado un compromiso inquebrantable con la belleza natural y la frescura de las flores. Lo que comenzó como una pequeña floristería local ha crecido hasta convertirse en un nombre de confianza en la comunidad, llevando la alegría de las flores a cada rincón de nuestra ciudad.</p>
								</div>
							</div>
						</div>
						<div class="card mb-2">
							<div class="card-header px-xl-5 py-xl-3" id="headingTwo">
								<h5 class="mb-0">
									<button class="btn btn-link fwEbold text-uppercase text-left w-100 collapsed p-0" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
										Nuestra Pasión por las Flores <i class="fas fa-sort-down float-right" />
									</button>
								</h5>
							</div>
							<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
								<div class="card-body px-xl-5 py-0">
									<p class="mb-7">En el corazón de Flores Le Roses late una pasión desbordante por las flores. Cada día, nuestro equipo se dedica a seleccionar las flores más hermosas y frescas, transformándolas en arreglos florales que son verdaderas expresiones de amor, alegría y gratitud. Creemos que las flores tienen el poder de comunicar emociones de una manera única y especial, y trabajamos incansablemente para que cada uno de nuestros arreglos sea una obra maestra floral que ilumine tu vida.</p>
								</div>
							</div>
						</div>
						<div class="card mb-2">
							<div class="card-header px-xl-5 py-xl-3" id="headingThree">
								<h5 class="mb-0">
									<button class="btn btn-link fwEbold text-uppercase text-left w-100 collapsed p-0" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
										Nuestra Misión <i class="fas fa-sort-down float-right" />
									</button>
								</h5>
							</div>
							<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
								<div class="card-body px-xl-5 py-0">
									<p class="mb-7">En Flores Le Roses, nuestra misión es simple pero profunda: ayudarte a crear momentos inolvidables. Cada uno de nuestros arreglos es diseñado con cuidado y atención meticulosa a los detalles para que puedas transmitir tus sentimientos de la manera más auténtica posible. Nos enorgullece ser parte de tus ocasiones especiales, desde celebraciones de amor y felicitaciones hasta expresiones de condolencias. Tu confianza en nosotros nos impulsa a seguir brindándote lo mejor en el mundo de las flores.</p>
								</div>
							</div>
						</div>
						<div class="card mb-2">
							<div class="card-header px-xl-5 py-xl-3" id="headingFour">
								<h5 class="mb-0">
									<button class="btn btn-link fwEbold text-uppercase text-left w-100 collapsed p-0" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
										Nuestro Compromiso<i class="fas fa-sort-down float-right" />
									</button>
								</h5>
							</div>
							<div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
								<div class="card-body px-xl-5 py-0">
									<p class="mb-7">Nuestro compromiso va más allá de la venta de flores. En Flores Le Roses, nos esforzamos por cultivar relaciones duraderas con nuestros clientes. Valoramos tu confianza y te prometemos calidad, puntualidad y atención personalizada en cada interacción. Estamos aquí para compartir nuestra pasión por las flores contigo y para ayudarte a crear recuerdos que florecerán para siempre. Gracias por ser parte de nuestra historia y por permitirnos ser parte de la tuya.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="processStepSec container pt-xl-23 pb-xl-10 pt-lg-20 pb-lg-10 pt-md-16 pb-md-8 pt-10 pb-0">
		<div class="row">
			<header class="col-12 mainHeader mb-3 text-center">
				<h1 class="headingIV playfair fwEblod mb-4">Proceso de entrega</h1>
				<span class="headerBorder d-block mb-5"><img src="images/hbdr.png" alt="Header Border" class="img-fluid img-bdr" /></span>
			</header>
		</div>
		<div class="row">
			<div class="col-12 pl-xl-23 mb-lg-3 mb-10">
				<div class="stepCol position-relative bg-lightGray py-6 px-6">
					<strong class="mainTitle text-uppercase mt-n8 mb-5 d-block text-center py-1 px-3">paso 01</strong>
					<h2 class="headingV fwEblod text-uppercase mb-3">Escoge tu Producto</h2>
					<p class="mb-5">Elige el producto floral perfecto de nuestro catálogo que mejor se adapte a tu ocasión y sentimientos.</p>
				</div>
			</div>
			<div class="col-12 pr-xl-23 mb-lg-3 mb-10">
				<div class="stepCol rightArrow position-relative bg-lightGray py-6 px-6 float-right">
					<strong class="mainTitle text-uppercase mt-n8 mb-5 d-block text-center py-1 px-3">paso 02</strong>
					<h2 class="headingV fwEblod text-uppercase mb-3">Comparte tu Ubicación</h2>
					<p class="mb-5">Proporciona la dirección de entrega y cualquier información relevante para asegurarnos de que tus flores lleguen al destino correcto.</p>
				</div>
			</div>
			<div class="col-12 pl-xl-23 mb-lg-3 mb-10">
				<div class="stepCol position-relative bg-lightGray py-6 px-6">
					<strong class="mainTitle text-uppercase mt-n8 mb-5 d-block text-center py-1 px-3">paso 03</strong>
					<h2 class="headingV fwEblod text-uppercase mb-3">Preparamos tu Entrega</h2>
					<p class="mb-5">Nuestro equipo de expertos floristas prepara tu arreglo con flores frescas y meticulosa atención a los detalles.</p>
				</div>
			</div>
			<div class="col-12 pr-xl-23 mb-lg-3 mb-10">
				<div class="stepCol rightArrow position-relative bg-lightGray py-6 px-6 float-right">
					<strong class="mainTitle text-uppercase mt-n8 mb-5 d-block text-center py-1 px-3">step 04</strong>
					<h2 class="headingV fwEblod text-uppercase mb-3">Proceso de Entrega</h2>
					<p class="mb-5">Nuestros mensajeros expertos se encargan de entregar tus flores puntualmente, manteniéndote informado sobre el estado de tu entrega. Confía en nosotros para hacer que tus momentos sean inolvidables.</p>
				</div>
			</div>
		</div>
	</section>
</section>


