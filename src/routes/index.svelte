<script>
	
	import Cartelera from '../components/Cartelera.svelte';
	import Customtextinput from '../components/Customtextinput.svelte';
    import CustomButton from '../components/CustomButton.svelte';
	import Customfigure from '../components/Customfigure.svelte';
	import Grid from '../components/Grid.svelte';
	import { goto } from '@sapper/app';
import H1c from '../components/H1c.svelte';
	
	function handleClick() {
		alert('te acabas de suscribir crack');
	}

</script>

<section class="hidden md:block w-full  mx-auto bg-gray-200 ">
	<div class="grid md:grid-cols-12 gap-5 p-4 m-2">
	  <main class="md:col-span-9 border-8 border-opacity-50 border-indigo-200 border-solid rounded-xl ">
		<H1c text="Cartelera" />
		<Cartelera movie="p_sample.jpg"/></main>
	  <aside class="md:col-span-3 md:pt-0 p-2 border-8 align-center border-opacity-50 border-indigo-200 border-solid rounded-xl ">
		<H1c text="suscribite" />
		<Customtextinput name=Suscribirse texto="EMAIL..."/> 
		&nbsp;
		<center class="">
			<button class=" md:text-sm lg:text-sm text-base w-full lg:w-3/4  justify-items-center py-2 align-center transition ease-in duration-400  hover:scale-110 bg-blue-500 text-white active:bg-lightBlue-600 font-bold uppercase  px-10 rounded-full hover:bg-indigo-600 hover:text-blue-200 outline-none focus:outline-none " type="button">
				SUMARSE
			  </button>
		</center>
		
		<div class="hidden md:block">
			<br><br><br><br>
		</div>
		
		<H1c text="destacada" />
		<Customfigure figname="titulo" cl="h-full w-full bg-cover  shadow-md  transform hover:bg-blue-400 border-8 border-opacity-50 border-indigo-200 border-solid rounded-xl hover:text-white"/>
		
	 </aside>
	</div>
</section>


<section class="block md:hidden w-full  mx-auto bg-gray-100 ">
	<div class="grid md:grid-cols-12 gap-5 p-4 m-2">
	  <main class="md:col-span-9 border-8 border-opacity-50 border-indigo-200 border-solid rounded-xl ">
		<H1c text="suscribite" />
		<Customtextinput name=Suscribirse texto="EMAIL..."/> 
		&nbsp;
		<center class="">
			<button class=" md:text-sm lg:text-sm text-base w-full lg:w-3/4  justify-items-center py-2 align-center transition ease-in duration-400  hover:scale-110 bg-blue-500 text-white active:bg-lightBlue-600 font-bold uppercase  px-10 rounded-full hover:bg-indigo-600 hover:text-blue-200 outline-none focus:outline-none " type="button">
				SUMARSE
			  </button>
		</center>
		
		<H1c text="destacada" />
		<Customfigure figname="titulo" cl="h-full w-full bg-cover  shadow-md  transform hover:bg-blue-400 border-8 border-opacity-50 border-indigo-200 border-solid rounded-xl hover:text-white"/>
	</main>
	  <aside class="p-2 border-8 align-center border-opacity-50 border-indigo-200 border-solid rounded-xl ">
		<H1c text="Cartelera" />
		<Cartelera movie="p_samplesmall.jpg"/>
	 </aside>
	</div>
  </section>



<svelte:head>
	<title>CinemaTick - Inicio</title>
</svelte:head>
