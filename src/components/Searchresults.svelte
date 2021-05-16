<script>
import { get_slot_context } from "svelte/internal";
import CustomButton from "./CustomButton.svelte";
let count=0;
import Customfigure from "./Customfigure.svelte";
let titles = ['mortal kombaT','reservoir dogs','jamon salvaje','alfajor triple',
'werdwer','werwer','dddddd','alfajor teriple','werwrer','wertuwer','alyyyfajor triple','wuiierwer','weioprwer'];
let figures;
function clickbutton() {
        
      }

      let poster="p_sample.jpg" ;
    

</script>


<div id=cont1 class="container w-full px-4">        
  
  <section class="py-2 px-2">
    <div class="flex md:flex-row flex-wrap flex-col">
      {#each titles as title,i}
          {#if i<=11}
          <div class="md:w-1/4 p-3">
            <div class="h-full w-full bg-cover  shadow-md  transform hover:bg-blue-400 border-8 border-opacity-50 border-indigo-200 border-solid rounded-xl hover:text-white "  > <Customfigure movie={poster} figname={title}/></div>
          </div>  
          {/if}   
      {/each} 
    </div>
  </section>
</div>
{#if titles.length>9}
<div class="w-1/2  px-10">
  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<CustomButton  id="r_register"  on:click={()=>clickbutton()} >
    Pagina Siguiente
</CustomButton>
</div>
{/if}