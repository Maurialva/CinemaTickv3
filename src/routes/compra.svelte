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
                    <h3>Pelicula: TITULO </h3>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <h1>datos de compra </h1>
                    <hr style="color: #449fad; width: 100%;">
                </td>
            </tr>
            <tr>
                <td >
                    <h3>Cant. Butacas: 99 <br>
                    Cine: Tanto</h3>
                    
                </td>
                <td >
                    <h3>Precio: $999.00 <br>
                    Funcion: Tanto</h3>
                    
                </td>
            </tr>
            <tr>
                <td >  
                    <Customtextinput texto="NOMBRE" txnom="p_nombre"/>
                </td>
                <td> 
                    <Customtextinput texto="APELLIDO" txnom="r_apellido"/>
                </td>
            </tr>
            <tr>
                <td> 
                    <Customtextinput texto="TELEFONO" txnom="r_telefono"/>
                </td>
                <td> 
                    <Customtextinput texto="DIRECCION" txnom="r_direccion"/>
                </td>
            </tr>
            <tr>
                <td>
                    <Customtextinput texto="EMAIL" txnom="r_email"/>
                </td>
                <td>
                    <Customtextinput texto="DNI" txnom="p_dni"/>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <Customtextinput texto="NUMERO DE TARJETA" txnom="p_ntarjeta"/>
                </td>

            </tr>
            <tr>
                <td >
                    <Customtextinput texto="CLAVE DE SEGURIDAD" txnom="p_nseguridad"/>
                </td>
                <td>
                    
                    <div id="dropdown">
                   <CustomButton id="dropbtn" on:click={()=>clickbutton()} >
                        CUOTAS
                    </CustomButton>
                    <div id="dropdown-content">
                    <a href=".">1 cuota de tanto</a>
                    <a href=".">3 cuotas de tanto</a>
                    <a href=".">6 cuotas de tanto</a>
                    </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <CustomButton id="pago" on:click={()=>clickbutton()} >
                        EFECTUAR PAGO
                    </CustomButton>
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

#dropdown {
  position: relative;
  display: inline-block;
}

#dropdown-content {
  display: none;
  position: absolute;
  background-color: #0d494b70;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

#dropdown-content a {
  color: rgb(255, 255, 255);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

#dropdown-content a:hover {background-color: #1c5068}

#dropdown:hover #dropdown-content {
  display: block;
}


</style>

