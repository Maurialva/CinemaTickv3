<script>
    import Customtextinput from '../components/Customtextinput.svelte';
    import CustomButton from '../components/CustomButton.svelte';
import H1c from '../components/H1c.svelte';
    
    function clickbutton() {
        
    }	
    </script>
    <svelte:head>
        <title>CinemaTick - Registrarse</title>
    </svelte:head>
    <div class="min-h-screen flex items-center justify-center bg-gray-200 py-2 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">

            <center>
                <table>
                <tbody>
                    <tr>
                        <td colspan="2">
                       
                            <H1c text="Complete sus datos"/> <br>

                        </td>
                    </tr>
                    
                    <tr>
                        <td colspan="2" >  
                            <Customtextinput texto="EMAIL" txnom="r_email"/>
                        </td>
                    </tr><br>
                    <tr>
                        <td> 
                            <Customtextinput texto="NOMBRE" txnom="r_nombre"/>
                        </td>
                        <td> 
                            <Customtextinput texto="APELLIDO" txnom="r_apellido"/>
                        </td>
                    </tr><br>
                    <tr>
                        <td>
                            <Customtextinput texto="PASSWORD" txnom="r_pass"/>
                        </td>
                        <td>
                            <Customtextinput texto="REPETIR PASSWORD" txnom="r_pass2"/>
                        </td>
                    </tr><br>
                    <tr>
                    <td><Customtextinput texto="DNI" txnom="r_dni"/></td>
                    <td> <h3 class="pl-10 text-blue-400 hover:text-indigo-500 transform scale-100"> <input type="checkbox">
                        Aceptar condiciones</h3>
                    </td>
                    </tr><br>
                    <tr>
                    <td><Customtextinput texto="TELEFONO" txnom="r_telefono"/></td>
                    <td><Customtextinput texto="DIRECCION" txnom="r_direccion"/></td>
                    </tr><br>
                    <tr>
                    <td><Customtextinput texto="NUM. TARJETA (OPCIONAL)" txnom="r_tarjeta"/></td>
                    <td  ><CustomButton id="r_register" on:click={()=>clickbutton()} >
                        REGISTRARSE
                    </CustomButton></td>
                    </tr>
                    <tr>
                    <td colspan="2"> <hr></td>
                    </tr>
                    <tr rowspan="3">
                        <td colspan="2">
                         </td>
                        
                    </tr>
                </tbody>
                </table>
                
            </center>
        </div>
    </div>    
    <h3 class="w-full pl-10 text-indigo-400 " >
        Si el titular de datos personales utiliza los servicios de CinemaTick, en consecuencia presta su consentimiento, conforme a lo establecido en la ley 25.326 de Protección de Datos Personales, a tenor de lo cual declara conocer y aceptar, para que sus datos personales integren la base de datos de CinemaTick, otorgando por la presente autorización expresa para: (i) el tratamiento automatizado de dichos datos e información y (ii) su utilización para servicios actuales o futuros, que desarrolle SA.

        El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita y a intervalos no inferiores a seis meses, salvo que se acredite tener un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.
        
        El titular de los datos, tiene además la posibilidad de ejercer los derechos de rectificación, y supresión de los datos conforme artículo 6, inciso "e" de la Ley 25.326. Los datos solicitados como obligatorios son aquellos que sirven para la identificación del usuario conforme articulo 6, inciso "c", la inexactitud o la negativa a completar los cambios obligatorios, serán la no posibilidad de acceso al sistema de servicios on line de CinemaTick, conforme al articulo 6, inciso "d".
        
        La DIRECCIÓN NACIONAL DE PROTECCIÓN DE DATOS PERSONALES, Órgano de Control de la Ley 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.</h3>
    
        <br>
    
    
    <style>
    
    </style>