<script>
import Searchresults from "../components/Searchresults.svelte";
import Sidemenu from "../components/Sidemenu.svelte";
</script>
<svelte:head>
	<title>CinemaTick - Busqueda</title>
</svelte:head>
<grid> 

    <div id="grid-container2">
        <div id="sidemenu">
            <br>
           
            <Sidemenu/>
        </div>
        <div id="cartelera">
           <Searchresults/>
        </div>
    </div>
    </grid>

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