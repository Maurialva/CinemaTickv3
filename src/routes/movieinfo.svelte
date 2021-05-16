<script>
import Dropdown from '../components/Dropdown.svelte';
import CustomButton from '../components/CustomButton.svelte';
import { goto } from '@sapper/app';
import H1c from '../components/H1c.svelte';
import Custommodal from '../components/Custommodal.svelte';


let showModal = false;
function clickbutton(n) 
{
  
    switch(n)
    {
        case "1":  goto('seatssel');break;
        case "2": goto('compra');break;
        }
   
}

</script>
<svelte:head>
	<title>CinemaTick - Pelicula</title>
</svelte:head>
<grid class="text-center md:hidden"> 

    <div id="grid-container2">
        <div id="title">
            <br>
           <H1c text="Titulo de la pelicula" /> <br>
        </div>
        <div class="w-full " id="poster">
            <img src="./p_mortalk.jpg" alt="poster">
        </div>
        <div id="info"><br>
            <Dropdown nombre="CINE"/> <br> <br>
            <Dropdown nombre="FUNCION"/><br><br>
            <CustomButton id="suscripcion" on:click={()=>clickbutton("1")}>
				SELECCIONAR BUTACAS
			</CustomButton><br><br>
            <h2>
            COSTO DE ENTRADA:</h2><h3> $999.99 </h3><h2>COSTO*CANT<br></h2><h3> $999.99 </h3>
            <h2>
                GENERO:</h2><h3> ACCION - FANTASIA - CIENCIA FICCION </h3>

                <button class="md:text-sm lg:text-sm text-base w-1/2   justify-items-center py-2 align-center transition ease-in duration-400  hover:scale-110 bg-blue-500 text-white active:bg-lightBlue-600 font-bold uppercase  px-10 rounded-full hover:bg-indigo-600 hover:text-blue-200 outline-none focus:outline-none " on:click="{() => showModal = true}">
                      
                VER TRAILER    
                </button>
        </div>
        <div id="descrip">
            <h3 class="uppercase  ml-3 text-justify mr-3">  Mortal Kombat es una película de fantasía oscura de artes marciales y gore estadounidense de 2021 dirigida por Simon McQuoid, en su debut como director, a partir de un guion de Greg Russo y Dave Callaham y una historia de Oren Uziel y Russo.3​ Se basa en la franquicia de videojuegos del mismo nombre creada por Ed Boon y John Tobias, que sirve como reinicio de la serie de películas Mortal Kombat. La película está protagonizada por Lewis Tan, Jessica McNamee, Josh Lawson, Tadanobu Asano, Mehcad Brooks, Ludi Lin, Chin Han, Joe Taslim e Hiroyuki Sanada. 
    </h3> </div>
        <div id="pay">
            <br>

            <CustomButton id="suscripcion" on:click={()=>clickbutton("2")}>
				PROCEDER A PAGAR
			</CustomButton> <br><br>
        </div>
       
    </div>
    </grid>



    <div class="text-center hidden md:block"> <br>
        <H1c text="Titulo de la pelicula" /> <br><br>
        <div class="grid grid-cols-12">
          <div class="col-span-7 ">
            <img src="./p_mortalk.jpg" alt="poster">
          </div> 
        
        <aside class="col-span-5 ">
                <div class=""><br>
                    <Dropdown nombre="CINE"/> <br> <br>
                    <Dropdown nombre="FUNCION"/><br><br>
                    <CustomButton id="suscripcion" on:click={()=>clickbutton("1")}>
                        SELECCIONAR BUTACAS
                    </CustomButton><br><br>
                    <h2>
                    COSTO DE ENTRADA:</h2><h3> $999.99 </h3><h2>COSTO*CANT<br></h2><h3> $999.99 </h3>
                    <h2>
                        GENERO:</h2><h3> ACCION - FANTASIA - CIENCIA FICCION </h3>
                        <br>
                        <button class="md:text-sm lg:text-sm text-base w-1/2   justify-items-center py-2 align-center transition ease-in duration-400  hover:scale-110 bg-blue-500 text-white active:bg-lightBlue-600 font-bold uppercase  px-10 rounded-full hover:bg-indigo-600 hover:text-blue-200 outline-none focus:outline-none " on:click="{() => showModal = true}">
                              
                        VER TRAILER    
                        </button>
                        <br><br>
                </div>
                <div id="descrip">
                    <h3 class="uppercase ml-5 text-justify mr-5">  Mortal Kombat es una película de fantasía oscura de artes marciales y gore estadounidense de 2021 dirigida por Simon McQuoid, en su debut como director, a partir de un guion de Greg Russo y Dave Callaham y una historia de Oren Uziel y Russo.3​ Se basa en la franquicia de videojuegos del mismo nombre creada por Ed Boon y John Tobias, que sirve como reinicio de la serie de películas Mortal Kombat. La película está protagonizada por Lewis Tan, Jessica McNamee, Josh Lawson, Tadanobu Asano, Mehcad Brooks, Ludi Lin, Chin Han, Joe Taslim e Hiroyuki Sanada. 
            </h3> </div><br><br><br><br>
            <CustomButton id="suscripcion" on:click={()=>clickbutton("2")}>
                PROCEDER A PAGAR
            </CustomButton> <br><br>
        </aside>
   
    </div> 
   
</div>


{#if showModal}
	<Custommodal class="w-full absolute left-0 top-0 bg-gray-200"on:close="{() => showModal = false}">
        <iframe class="w-full h-full " height="500" src="https://www.youtube.com/embed/Y2O4RCdwCGM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Custommodal>
{/if}
