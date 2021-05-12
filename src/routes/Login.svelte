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
    <center>
        <table>
            <tbody>
            <tr>
            <td><img src="filler.png" alt="filler"></td>
            <td><h1>inicio de sesion de cinematick</h1>
            <hr style="color: #449fad; width: 100%;"></td>
            <td><img src="filler.png" alt="filler"></td>
            </tr>
            <tr>
                <td><img src="filler.png" alt="filler"></td>
                <td><h2>ingrese su nombre de usuario</h2>
                    <Customtextinput texto="USUARIO" txnom="suscripcion"/></td>
                <td><img src="filler.png" alt="filler"></td>
            </tr>
        
            <tr>
                <td><img src="filler.png" alt="filler"></td>
                <td>
                    <h2>ingrese su contraseña</h2>
                    <input type="password" placeholder="CONTRASEÑA" id="pwd" name="pwd"><br>
                    <a href="help"  style="font-size: 150%; color:#449fad " >olvido su contraseña?</a>
                </td>
                <td><img src="filler.png" alt="filler"></td>
                </tr>
                <tr>
                <td><img src="filler.png" alt="filler"></td>
                <td>
                    <CustomButton class="enter" on:click={()=>clickbutton("l")} >
                     INGRESAR
                    </CustomButton> </td>
                <td><img src="filler.png" alt="filler"></td>
                </tr>
               
                <tr>
                <td><img src="filler.png" alt="filler"></td>
                <td><CustomButton class="register" on:click={()=>clickbutton("r")} >
                            REGISTRARSE
                        </CustomButton></td>
                <td><img src="filler.png" alt="filler"></td>
                </tr>
                </tbody>
                </table>
    </center>
    
    
    <style>
        
        table
        {
            text-align: center;
        }
    input[type=password] 
        {
            vertical-align:middle;
            text-align: center;
            transition: background 900ms ease-in-out;
            background-color: rgb(255, 255, 255);
            background-position: 100%;
            background-size: 200%;
            border: rgb(255, 255, 255);
            background-image: linear-gradient(90deg,rgb(255, 255, 255) 0%, rgb(21, 70, 75) 56%, rgb(17, 28, 70) 100%);		
            color: rgb(255, 255, 255); 
            border-radius: 50px; 
            width:80%;
            font-size: larger;
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
        img{
            width: 50% ;
        }
    </style>