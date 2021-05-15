<script>
    import Customtextinput from '../components/Customtextinput.svelte';
    import CustomButton from '../components/CustomButton.svelte';
import H1c from '../components/H1c.svelte';
import Hrcustom from '../components/Hrcustom.svelte';

    function clickbutton() {
        
    }	
</script>
<svelte:head>
	<title>CinemaTick - Contactarse</title>
</svelte:head>

<div class="min-h-screen py-2  ">


    <div class="space-y-8">
    <br>
<center>
<table>
    <tbody>
    <tr>
        <td > 
           <H1c text="contactarse con nosotros " /><br>
           <Hrcustom/>
           <img class="mx-auto w-1/2 md:w-3/4" src="logocinematickv2.png" alt="Logo">
        </td>
    </tr>
    <tr rowspan="2">
        <td > 
                <Customtextinput texto="NOMBRE Y APELLIDO" txnom="c_nombre"/><br>
        </td>
    </tr>
    <tr rowspan="2">
        <td > 
                <Customtextinput texto="EMAIL" txnom="c_email"/><br>
        </td>
    </tr>
    <tr rowspan="2">
        <td > 
                <Customtextinput texto="ASUNTO DEL MENSAJE" txnom="c_asunto"/><br>
        </td>
    </tr>
    <tr rowspan="7">
        <td > 
            <h3>
            <textarea placeholder="&nbsp; &nbsp; &nbsp; MENSAJE..." class="uppercase bg-indigo-300 text-white w-full h-200 row-span-6 placeholder-white "  ></textarea><br><br>
            </h3>
        </td>
    </tr>
    <tr rowspan="2">
        <td > 
            <CustomButton class="enter" on:click={()=>clickbutton()} >
                ENVIAR MENSAJE
            </CustomButton><br><br>
        </td>
    </tr>
    </tbody>
</table>
</center> </div></div>
<style> 
table
{
    text-align: center;
}

	textarea { width: 100%; height: 200px; }

</style>



  
