<script>
    import Customtextinput from '../components/Customtextinput.svelte';
    import CustomButton from '../components/CustomButton.svelte';
    
    function clickbutton() {
        
    }	
    </script>
    <center>
        <table>
        <tbody>
            <tr>
                <td colspan="2">
                    <h1>ingrese sus datos </h1>
                    <hr style="color: #449fad; width: 100%;">
                </td>
            </tr>
            <tr>
                <td colspan="2" >  
                    <Customtextinput texto="EMAIL" txnom="r_email"/>
                </td>
            </tr>
            <tr>
                <td> 
                    <Customtextinput texto="NOMBRE" txnom="r_nombre"/>
                </td>
                <td> 
                    <Customtextinput texto="APELLIDO" txnom="r_apellido"/>
                </td>
            </tr>
            <tr>
                <td>
                    <Customtextinput texto="PASSWORD" txnom="r_pass"/>
                </td>
                <td>
                    <Customtextinput texto="REPETIR PASSWORD" txnom="r_pass2"/>
                </td>
            </tr>
            <tr>
            <td><Customtextinput texto="DNI" txnom="r_dni"/></td>
            <td> <h3> <input type="checkbox" style=" transform: scale(1.5);">
                &nbsp; &nbsp;Aceptar condiciones</h3>
            </td>
            </tr>
            <tr>
            <td><Customtextinput texto="TELEFONO" txnom="r_telefono"/></td>
            <td><Customtextinput texto="DIRECCION" txnom="r_direccion"/></td>
            </tr>
            <tr>
            <td><Customtextinput texto="NUM. TARJETA (OPCIONAL)" txnom="r_tarjeta"/></td>
            <td><CustomButton class="r_register" on:click={()=>clickbutton()} >
                REGISTRARSE
            </CustomButton></td>
            </tr>
            <tr>
            <td colspan="2"> <hr style="color: #449fad; width: 100%;"></td>
            </tr>
            <tr rowspan="3">
                <td colspan="2">
                    <h3>Si el titular de datos personales utiliza los servicios de CinemaTick, en consecuencia presta su consentimiento, conforme a lo establecido en la ley 25.326 de Protección de Datos Personales, a tenor de lo cual declara conocer y aceptar, para que sus datos personales integren la base de datos de CinemaTick, otorgando por la presente autorización expresa para: (i) el tratamiento automatizado de dichos datos e información y (ii) su utilización para servicios actuales o futuros, que desarrolle SA.

                    El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a los mismos en forma gratuita y a intervalos no inferiores a seis meses, salvo que se acredite tener un interés legítimo al efecto conforme lo establecido en el artículo 14, inciso 3 de la Ley Nº 25.
                    
                    El titular de los datos, tiene además la posibilidad de ejercer los derechos de rectificación, y supresión de los datos conforme artículo 6, inciso "e" de la Ley 25.326. Los datos solicitados como obligatorios son aquellos que sirven para la identificación del usuario conforme articulo 6, inciso "c", la inexactitud o la negativa a completar los cambios obligatorios, serán la no posibilidad de acceso al sistema de servicios on line de CinemaTick, conforme al articulo 6, inciso "d".
                    
                    La DIRECCIÓN NACIONAL DE PROTECCIÓN DE DATOS PERSONALES, Órgano de Control de la Ley 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.</h3>
                </td>
                
            </tr>
        </tbody>
        </table>
        
    </center>
    
    
    <style>
        
table
{
    text-align: center;
}


   
input:focus {  border-image: #000000; 
outline: none;
background-position: 0;
transition: background 900ms ease-in-out;
background-image: linear-gradient(43deg,rgb(27, 32, 83) 0%, rgb(33, 214, 199) 56%, rgb(4, 25, 39) 100%); 
}
input:hover{
    background-position: 0;
    transition: background 900ms ease-in-out;
    background-image:  linear-gradient(43deg,rgb(27, 32, 83) 0%, rgb(33, 214, 199) 56%, rgb(4, 25, 39) 100%); 
}



    </style>