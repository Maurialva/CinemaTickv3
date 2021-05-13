<script>
import Dropdown from '../components/Dropdown.svelte';
import CustomButton from '../components/CustomButton.svelte';
import { goto } from '@sapper/app';
function clickbutton(n) 
{
  
    switch(n)
    {
        case "1":  goto('register');break;
        case "2": goto('compra');break;
        }
   
}

</script>

<grid> 

    <div id="grid-container2">
        <div id="title">
            <br>
            <h1>Titulo de la pelicula</h1>
        </div>
        <div id="poster">
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

        </div>
        <div id="descrip">
        <h2>   Mortal Kombat es una película de fantasía oscura de artes marciales y gore estadounidense de 2021 dirigida por Simon McQuoid, en su debut como director, a partir de un guion de Greg Russo y Dave Callaham y una historia de Oren Uziel y Russo.3​ Se basa en la franquicia de videojuegos del mismo nombre creada por Ed Boon y John Tobias, que sirve como reinicio de la serie de películas Mortal Kombat. La película está protagonizada por Lewis Tan, Jessica McNamee, Josh Lawson, Tadanobu Asano, Mehcad Brooks, Ludi Lin, Chin Han, Joe Taslim e Hiroyuki Sanada. 
    </h2> </div>
        <div id="pay">
            <br>

            <CustomButton id="suscripcion" on:click={()=>clickbutton("2")}>
				PROCEDER A PAGAR
			</CustomButton> <br><br>
        </div>
       
    </div>
    </grid>

<style>

 #title{ grid-area: m0; }
 #poster { grid-area: m1; }
 #info { grid-area: m2; }
 #descrip { grid-area: m3; }
 #pay { grid-area: m4; }

 #grid-container2 {
    display: grid;
    grid-template-areas:
      'm0 m0 m0 m0'  
      'm1 m1 m2 m2' 
      'm1 m1 m2 m2'
      'm1 m1 m3 m3'
      'm4 m4 m4 m4';
  }
  
  #grid-container2 > div {
      background-color:none;
    text-align: center;
    padding: none;
    border-radius: 50px; 
    border:none;
  }



</style>