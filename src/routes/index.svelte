<script>
	
	import Cartelera from '../components/Cartelera.svelte';
	import Customtextinput from '../components/Customtextinput.svelte';
    import CustomButton from '../components/CustomButton.svelte';
	import Customfigure from '../components/Customfigure.svelte';
	import Grid from '../components/Grid.svelte';
	import { goto } from '@sapper/app';
	function handleClick() {
		alert('te acabas de suscribir crack');
	}

</script>

<style>
	
	@media (min-width: 480px) {
		
	}
</style>

<svelte:head>
	<title>Inicio</title>
</svelte:head>

<Grid pagenumber="1" />
<div id="grid-container">
	<div id="menuleft">
			<Cartelera/>
	</div>
	<div id="menucenter">
		<div id="suscripcion">
			<h1>Suscribirse</h1>
		<Customtextinput texto="EMAIL..." txnom="suscripcion"/>
		<br>
			<CustomButton id="suscripcion" on:click={handleClick}>
				SUSCRIBIRSE
			</CustomButton>
				</div>
		<div id="destacada">
			<br><br><br><br>
			<h2>destacada</h2>
			<Customfigure figname="TITULO"/>
		</div>
	</div>

</div>	