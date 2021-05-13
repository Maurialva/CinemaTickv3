<script>
    import Customtextinput from '../components/Customtextinput.svelte';
    import CustomButton from '../components/CustomButton.svelte';
    import { goto } from '@sapper/app';
    
    function clickbutton(n) {
        switch(n)
        {
            case"r": goto('register');break;
            case"l": alert('Haz iniciado sesion');break;

        }

    }	
    </script>
    <svelte:head>
        <title>CinemaTick - Inicio de Sesion</title>
    </svelte:head>
    <center>
        <table>
            <tbody>
            <tr>
          
            <td><h1>inicio de sesion de cinematick</h1>
            <hr ></td>
           
            </tr>
            <tr>
               
                <td><h2>ingrese su nombre de usuario</h2>
                    <Customtextinput texto="USUARIO" txnom="suscripcion"/></td>
            
            </tr>
        
            <tr>
              
                <td>
                    <h2>ingrese su contraseña</h2>
                    <input type="password" placeholder="CONTRASEÑA" id="pwd" name="pwd"><br>
                    <a href="help"  >olvido su contraseña?</a>
                </td>
                
                </tr>
                <tr>
                
                <td>
                    <CustomButton id="enter" on:click={()=>clickbutton("l")} >
                     INGRESAR
                    </CustomButton> </td>
                
                </tr>
               
                <tr>
                
                <td><CustomButton id="register" on:click={()=>clickbutton("r")} >
                            REGISTRARSE
                        </CustomButton></td>
                
                </tr>
                </tbody>
                </table>
    </center>
    
    
    <style>
        
      
    </style>