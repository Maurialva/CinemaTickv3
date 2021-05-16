<script>
import Searchresults from "../components/Searchresults.svelte";
import Sidemenu from "../components/Sidemenu.svelte";
import Dropdown from "../components/Dropdown.svelte";
import H1c from "../components/H1c.svelte";
</script>
<svelte:head>
	<title>CinemaTick - Busqueda</title>
</svelte:head>
<H1c text="resultados de la bsuqueda"/>
<grid class="hidden md:block    "> 
    <br>
    <div id="grid-container2">
        <div id="sidemenu">
            <br>
            <H1c text="Seleccionar filtro"/>
            <br>
            <Dropdown nombre="CINE"/> <br>
            <Dropdown nombre="GENERO"/> <br>
            <Dropdown nombre="HORARIO"/> <br>
           

        </div>
        <div id="cartelera">
           <Searchresults/>
        </div>
    </div>
    </grid>

<div class="md:hidden text-center ">
    
    <h2 class="  uppercase text-center text-l text-blue-400">
        <br>  Seleccionar filtro <br>
    </h2>
    <div class="w-full flex-row flex-grow  flex-1 flex justify-center ">
        <Dropdown nombre="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CINE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/> 
        <Dropdown nombre="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GENERO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/> 
        <Dropdown nombre="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HORARIO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/>
    </div>
    <Searchresults/>

</div>






<style>

 
#sidemenu { grid-area: m1; }
#cartelera { grid-area: m2; }

#grid-container2 {
    display: grid;
    grid-template-areas:
      'm1 m2 m2 m2'  
      'm1 m2 m2 m2' 
      'm1 m2 m2 m2'
      'm1 m2 m2 m2'
      'm1 m2 m2 m2';
  }
  
  #grid-container2 > div {
      background-color:none;
    text-align: center;
    padding: none;
    border-radius: 50px; 
    border:none;
  }



</style>