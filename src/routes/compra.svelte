<script>
    import Customtextinput from '../components/Customtextinput.svelte';
    import CustomButton from '../components/CustomButton.svelte';
import H1c from '../components/H1c.svelte';
import Dropdown from '../components/Dropdown.svelte';
import Hrcustom from '../components/Hrcustom.svelte';
    function clickbutton() {
        
    }	
    </script>
    <svelte:head>
        <title>CinemaTick - Finalizar Compra</title>
    </svelte:head>
    
        <div class="min-h-screen py-2">

            <center>
        <table>
        <tbody>
            <tr>
                <td colspan="2">
                    <H1c text="Pelicula: TITULO"/>
                    <br>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <h1>DATOS DE COMPRA </h1>
                   <Hrcustom/>
                </td>
            </tr>
            <tr>
                <td >
                    <h3>CANT. DE BUTACAS: TANTO <br><br>
                    CINE: TANTO</h3><br>
                    
                </td>
                <td >
                    <h3>PRECIO: $999.00 <br><br>
                    FUNCION: TANTO</h3><br>
                    
                </td>
            </tr>
            <tr>
                <td >  
                    <Customtextinput texto="NOMBRE" txnom="p_nombre"/>
                </td>
                <td> 
                    <Customtextinput texto="APELLIDO" txnom="r_apellido"/>
                </td>
            </tr><br>
            <tr>
                <td> 
                    <Customtextinput texto="TELEFONO" txnom="r_telefono"/>
                </td>
                <td> 
                    <Customtextinput texto="DIRECCION" txnom="r_direccion"/>
                </td>
            </tr><br>
            <tr>
                <td>
                    <Customtextinput texto="EMAIL" txnom="r_email"/>
                </td>
                <td>
                    <Customtextinput texto="DNI" txnom="p_dni"/>
                </td>
            </tr><br>
            <tr>
                <td colspan="2">
                    <Customtextinput texto="NUMERO DE TARJETA" txnom="p_ntarjeta"/>
                </td>
<br>
            </tr><br>
            <tr>
                <td >
                    <Customtextinput texto="CLAVE DE SEGURIDAD" txnom="p_nseguridad"/>
                </td>
                <td>
                    
                   <Dropdown nombre="CUOTAS"/>
                </td>
            </tr>
            <tr>
                <td colspan="2"><br>
                    <CustomButton id="pago" on:click={()=>clickbutton()} >
                        EFECTUAR PAGO
                    </CustomButton>
                </td>
            </tr>
            
        </tbody>
        </table>
        
    </center>
    
</div>
    <style>
        
table
{
    text-align: center;
}



</style>

