<script>
    export let nombre;
    import CustomButton from './CustomButton.svelte';
    function clickbutton(){}
</script>

  <center>
<div class="dropdown">
    <CustomButton class="dropdown" on:click={()=>clickbutton()} >
         {nombre}
     </CustomButton>
     <div class="dropdown-content">
     <a href=".">primera opcion</a>
     <a href=".">segunda opcion</a>
     <a href=".">tercera opcion</a>
     </div>
     </div>
    </center>
<style>
   
.dropdown  {
 
  width: 50%;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #0d494b70;
  min-width: 30%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: #2b656e;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #1c5068;
    border-radius: 50px;color: white;
    }

.dropdown:hover .dropdown-content {
  display: block;background-color: lightgray;border: 1px solid #449fad; 
  border-radius: 50px;
}

    
</style>