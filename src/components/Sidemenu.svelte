<svelte:head>
	<title>Busqueda</title>
</svelte:head>

<script>
	import { slide } from 'svelte/transition';
    import CustomButton from '../components/CustomButton.svelte';
    import { goto } from '@sapper/app';
    function clickbutton()
  {
    goto("busqueda");
  }
	let visible = true;
	let sections = [
		{
			id: 1,
			title: "Cines",
			content:  "Si el titular de datos personales utiliza los servicios de CinemaTick, en consecuencia presta su consentimiento, conforme a lo establecido en la ley 25.326 de Protección de Datos Personales, a tenor de lo cual declara conocer y aceptar, para que sus datos personales integren la base de datos de CinemaTick, otorgando por la presente autorización expresa para: (i) el tratamiento automatizado de dichos datos e información y (ii) su utilización para servicios actuales o futuros, que desarrolle SA.El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuitaWelcome to section 2 test content",
			active: false,
		},
		{
			id: 2,
			title: "Generos",
			content: "Si el titular de datos personales utiliza los servicios de CinemaTick, en consecuencia presta su consentimiento, conforme a lo establecido en la ley 25.326 de Protección de Datos Personales, a tenor de lo cual declara conocer y aceptar, para que sus datos personales integren la base de datos de CinemaTick, otorgando por la presente autorización expresa para: (i) el tratamiento automatizado de dichos datos e información y (ii) su utilización para servicios actuales o futuros, que desarrolle SA.El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuitaWelcome to section 2 test content",
			active: false,
		},
		{
			id: 3,
			title: "Horario",
			content:  "Si el titular de datos personales utiliza los servicios de CinemaTick, en consecuencia presta su consentimiento, conforme a lo establecido en la ley 25.326 de Protección de Datos Personales, a tenor de lo cual declara conocer y aceptar, para que sus datos personales integren la base de datos de CinemaTick, otorgando por la presente autorización expresa para: (i) el tratamiento automatizado de dichos datos e información y (ii) su utilización para servicios actuales o futuros, que desarrolle SA.El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuitaWelcome to section 2 test content",
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
<h1> Seleccionar filtro </h1>
<hr>
{#each sections as section}
<div id="accordion">
        <CustomButton id="ayuda" on:click={() => expand(section)} >
            {section.title}
        </CustomButton>
	{#if section.active}
		<div id="slider" transition:slide>
            <h3>
			<p><br><CustomButton id="dropdown" on:click={()=>clickbutton()} >
        Opcion 1
    </CustomButton>
    <CustomButton id="dropdown" on:click={()=>clickbutton()} >
      Opcion 2
  </CustomButton>
  <CustomButton id="dropdown" on:click={()=>clickbutton()} >
    Opcion 3
</CustomButton>
        
    <br><br><br></p></h3>
		</div>
	{/if}
</div>
{/each}
