<script>
import { each } from "svelte/internal";
import H1c from "../components/H1c.svelte";


let ocupied;
let free;
let cant;


let row=['1','2','3','4','5','6','7','8','9','10','11','12','13','14']; 
let fil=['1','2','3','4','5','6','7','8','9','10']
let seat = [
		{ id: '1', name: 'free' },
		{ id: '2', name: 'free' },
        { id: '3', name: 'free' },
		{ id: '4', name: 'free' },
        { id: '5', name: 'free' },
		{ id: '6', name: 'free' },
        { id: '7', name: 'free' },
		{ id: '8', name: 'free' },
		{id: '9', name: 'free' },
        {id: '10', name: 'ocupied'}
	];

function ocupySeat(n)
{
    n=true;
    return n;
}    

let ocup=['1-1','2-3','3-4','4-2','5-4','5-5','6-8','7-10','8-3','9-5','10-4','11-4','12-4','13-2','14-9']; 
let oc=false;
</script>


<div class="mas">
    <H1c text="SELECCIONE SUS BUTACAS"/> 

<div class="container">
    <br> <br>
    <div class="screen">
    </div>
        {#each row as c}
            <div class="row">
                {#each fil as f}
                {ocupySeat(oc)}
                    {#each ocup as o}
                        {#if (c-f ==o && oc==false)}
                        {ocupySeat(oc)}
                        {/if}
                    {/each } 
                    {#if (oc==true)}
                        <div class="seat occupied"></div>  
                    {:else}
                        <div class="seat"></div>  
                    {/if}   
                {/each }
            </div>
        {/each }
</div>
</div>


  <style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap");
* {
  box-sizing: border-box;
}

.mas{
  background-color: #242433;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  
}


.seat {
  background: linear-gradient(to right, rgb(228, 153, 13), rgb(131, 6, 131));
  opacity: 0.3;
  height: 15px;
  width: 20px;
  margin: 3px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.seat.selected {
  opacity: 1;
  background: linear-gradient(
    to right,
    rgb(92, 248, 152),
    rgba(1, 252, 252, 0.418)
  );
}

.seat.occupied {
  background: linear-gradient(to right, rgb(228, 153, 13), rgb(131, 6, 131));
  opacity: 1;
  cursor: default;
}

.row {
  display: flex;
  justify-content: center;
}

.seat:nth-of-type(2) {
  margin-right: 18px;
}

.seat:nth-last-of-type(2) {
  margin-left: 18px;
}

.showcase .seat:not(.occupied):hover {
  cursor: default;
  transform: scale(1);
}

.seat:not(.occupied):hover {
  cursor: pointer;
  transform: scale(1.4);
}


.container {
  perspective: 200px;
  width: 30%;
  align-items: center;
  text-align: center;
}

.screen {
  background-color: #fff;
  height: 70px;
  width: 100%;
  margin: 15px 0;
  transform: rotateX(-45deg);
  box-shadow: 0 3px 10px rgba(255, 255, 255, 0.7);
  
}


  </style>