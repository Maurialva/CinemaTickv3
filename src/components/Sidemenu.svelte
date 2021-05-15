<svelte:head>
	<title>Busqueda</title>
</svelte:head>

<script>
	import { slide } from 'svelte/transition';
    import CustomButton from '../components/CustomButton.svelte';
    import { goto } from '@sapper/app';
	import H1c from './H1c.svelte';
    function clickbutton()
  {
    goto("busqueda");
  }
	let visible = true;
	let sections = [
		{
			id: 1,
			title: "Cines",
			active: false,
		},
		{
			id: 2,
			title: "Generos",
			active: false,
		},
		{
			id: 3,
			title: "Horario",
			active: false,
		}
	]
	
	const expand = (section) => {
		sections = sections.map(s => {
			s.active = false
			if (s.id === section.id) {
				s.active = true
			}
			return s
		})
	}

  


</script>

<H1c text="seleccionar filtro" />
{#each sections as section}
<div id="accordion">
        <CustomButton id="ayuda" on:click={() => expand(section)} >
            {section.title}
        </CustomButton><br><br>
	{#if section.active}
		<div id="slider" transition:slide>
            <h3>
			<p><CustomButton id="dropdown" on:click={()=>clickbutton()} >
        Opcion 1
    </CustomButton> 
    <CustomButton id="dropdown" on:click={()=>clickbutton()} >
      Opcion 2
  </CustomButton>
  <CustomButton id="dropdown" on:click={()=>clickbutton()} >
    Opcion 3
</CustomButton>
        
    <br><br></p></h3>
		</div>
	{/if}
</div>
{/each}
