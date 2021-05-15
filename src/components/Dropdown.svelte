<script>
    export let nombre;
    import CustomButton from './CustomButton.svelte';
    function clickbutton(){}
</script>

  <center>
<div id="dropdown">
    <CustomButton id="dropdown" on:click={()=>clickbutton()} >
         {nombre}
     </CustomButton>
     <div id="dropdown-content">
     <a href=".">primera opcion</a>
     <a href=".">segunda opcion</a>
     <a href=".">tercera opcion</a>
     </div>
     </div>
    </center>
<style>
   
   #dropdown  {
 
  width: 50%;
}

#dropdown-content {
  display: none;
  position: absolute;
  background-color: #1D4ED8;
  min-width: 30%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

#dropdown-content a {
  color: #1D4ED8;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

#dropdown-content a:hover {background-color: #818CF8;
    border-radius: 50px;color: white;
    }

#dropdown:hover #dropdown-content {
  display: block;background-color: #E5E7EB;border: 1px solid #1D4ED8; 
  border-radius: 50px;
}

    
</style>