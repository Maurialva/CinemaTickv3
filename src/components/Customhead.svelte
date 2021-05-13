<script>

    import CustomButton from '../components/CustomButton.svelte';
    import Socialicon from '../components/Socialicon.svelte';
    import Searchconteiner from './Seachcontainer.svelte';
    import { goto } from '@sapper/app';
    
    
    function clickbutton() {
      
        goto('Login');
    }	
    </script>
    
    
    
    <table >
        <tbody>
        <tr>
        <td> <img id="img" src='logocinematickv2.png' alt="logo" class="logo"  ></td>
        
        <td> <div align="right"><Socialicon nombre={"Instagram"}/> 
            <Socialicon nombre={"Facebook"}/> 
            <Socialicon nombre={"Twitter"}/> 
            <CustomButton id="login" on:click={()=>clickbutton()} >
                LOGIN
            </CustomButton>
             </div>
             <h2>el mejor cine a un click de distancia &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;
                
             </h2> </td>
        </tr>
        <tr>
            <td colspan="2">
                <div id="search-container">
            
                <Searchconteiner/>
            </div>
            </td>
        </tr>
        </tbody>
        </table>
    
    <style>
   
    </style>