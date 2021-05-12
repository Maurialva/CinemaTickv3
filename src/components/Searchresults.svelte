<script>
import { get_slot_context } from "svelte/internal";
let count=0;
import Customfigure from "./Customfigure.svelte";
let titles = ['mortal kombaT','reservoir dogs','jamon salvaje','alfajor triple',
'werdwer','werwer','dddddd','alfajor teriple','werwrer','wertuwer','alyyyfajor triple','wuiierwer','weioprwer'];
let figures;

</script>

<grid> 
    <div class="grid-container2">
        {#each titles as title,i}
       
        <div class="result{i}">
            {#if i<=8}
            <Customfigure figname={title}/>
            {/if}
          
        </div>    
       
        {/each}
    </div>  
    {#if titles.length>9}
    <div class="next">
      <h2><a href="busqueda">Siguiente pagina</a></h2>  
    </div>
    {/if}
</grid>

 <style>
.result0 { grid-area: m1; }
.result1 { grid-area: m2; }
.result2 { grid-area: m3; }
.result3 { grid-area: m4; }
.result4 { grid-area: m5; }
.result5 { grid-area: m6; }
.result6 { grid-area: m7; }
.result7 { grid-area: m8; }
.result8 { grid-area: m9; }
.next { grid-area: n1; }

.grid-container2 {
  display: grid;
  grid-template-areas:
    ' m1 m2 m3 '  
    ' m4 m5 m6 '  
    ' m7 m8 m9 '
    ' n1 n1 n1 ';
}

.grid-container2 > div {
    background-color:none;
  text-align: center;
  padding: none;
  border-radius: 50px; 
  border:none;
}

 </style>



