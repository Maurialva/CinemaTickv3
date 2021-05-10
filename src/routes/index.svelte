<script>
	import sadmonkey from 'images/GDvx3tBT_400x400.jpg';
	import Cartelera from '../components/Cartelera.svelte';
	import Customtextinput from '../components/Customtextinput.svelte';
    import CustomButton from '../components/CustomButton.svelte';
	import Customfigure from '../components/Customfigure.svelte';


</script>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Inicio</title>
</svelte:head>

<table>
	<tr>
		<td colspan="4">
			<Cartelera/>
		</td>
		<td>

			<div id="suscripcion">
				<h1>Suscribirse</h1>
				<Customtextinput texto="EMAIL..." txnom="suscripcion"/>
				<CustomButton class="suscripcion" on:click={clickbutton()}>
					SUSCRIBIRSE
				</CustomButton>
			</div>
			<div id="destacada">
				<h2>destacada</h2>
				<Customfigure figname="TITULO"/>
			</div>
		</td>
	</tr>
</table>

