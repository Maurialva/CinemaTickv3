<script>
    import Customtextinput from '../components/Customtextinput.svelte';
    import CustomButton from '../components/CustomButton.svelte';
    import { goto } from '@sapper/app';
import H1c from '../components/H1c.svelte';
    
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
  
<div class="min-h-screen flex items-center justify-center bg-gray-200 py-2 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto w-3/4" src="logocinematickv2.png" alt="Logo">
        <H1c text="inicie sesion"/>
        <p class="mt-2 text-center text-sm text-gray-600">
          <a href="register" class="font-medium text-indigo-600 hover:text-indigo-500">
            REGISTRARSE
          </a>
        </p>
      </div>
      <form class="mt-8 space-y-6" action="." method="POST">
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email</label>
            <input id="email-address" name="email"  placeholder="Email..." type="email" autocomplete="email" required class="w-full py-2 transition ease-in duration-700 hover:bg-indigo-200 text-center font-bold text-white placeholder-white  bg-blue-200 rounded-full border-solid border-blue-400" >
          </div>
          <br>
          <div>
            <label for="password" class="sr-only">Contraseña</label>
            <input id="password" name="password" placeholder="Contraseña" type="password" autocomplete="current-password" required class=" w-full py-2 transition ease-in duration-700 hover:bg-indigo-200 text-center font-bold text-white placeholder-white  bg-blue-200 rounded-full border-solid border-blue-400" >
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div class="text-sm">
            <a href="help" class="font-medium text-indigo-600 hover:text-indigo-500">
            ¿OLVIDO SU CONTRASEÑA?            
            </a>
          </div>
        </div>
        <div>
          <button type="submit" class="group relative w-full py-4 hover:-translate-y-1  align-middle transition ease-in duration-400  hover:scale-110 bg-blue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xl px-10 rounded-full shadow  hover:bg-indigo-600 hover:text-blue-200 outline-none focus:outline-none mr-1 mb-1 ">
            INICIAR SESION
          </button>
        </div>
      </form>
    </div>
  </div>