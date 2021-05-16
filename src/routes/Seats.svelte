<script>

import Cartelera from "../components/Cartelera.svelte";
import H1c from "../components/H1c.svelte";

let row=['1','2','3','4','5','6','7','8','9','10','11','12','13','14']; 
let fil=['1','2','3','4','5','6','7','8','9','10']

</script>

<div class="text-indigo-400 p-5 flex flex-col items-center justify-center min-h-screen">
    <div id="movie-container">
    <H1c text="PELICULA TITULO"/>

    </div>
    <ul id="showcas">
        <li>
            <div  id="seat">
                <small>
                    &nbsp;
                </small>
            </div>
        </li>
        <li>
            <div id="seat selected">
                <small>
                    seleccionado
                </small>
            </div>
        </li>
        <li>
            <div id="seat ocupied">
                <small>
                    ocupado
                </small>
            </div>
        </li>
    </ul>
    <div id="container">

        <div id="screen"><!--
            <div id="row">
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat ocupied"></div>
                <div id="seat"></div>
                <div id="seat ocupied"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat"></div>
            </div>
            <div id="row">
                <div id="seat"></div>
                <div id="seat ocupied"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat ocupied"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat ocupied"></div>
                <div id="seat"></div>
                <div id="seat"></div>
            </div>
            <div id="row">
                <div id="seat"></div>
                <div id="seat ocupied"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat ocupied"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat"></div>
            </div>
            <div id="row">
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat ocupied"></div>
                <div id="seat ocupied"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat"></div>
            </div>
            <div id="row">
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat ocupied"></div>
                <div id="seat"></div>
                <div id="seat ocupied"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat"></div>
            </div>
            <div id="row">
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat"></div>
                <div id="seat"></div>
            </div>-->

           
                </div>
                    {#each row as c}
                        <div id="row">
                            {#each fil as f}
                                    <div id="seat"></div> 
                            {/each }
                        </div>
                    {/each }
            </div>  
    </div>

<style>
    #seat
    {
    background-color:"gray" ;
    width:15px;
    height: 12px;
    margin:3px
    }

</style>