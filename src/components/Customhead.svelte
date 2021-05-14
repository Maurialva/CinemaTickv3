
<script>

    import CustomButton from '../components/CustomButton.svelte';
    import Socialicon from '../components/Socialicon.svelte';
    import Searchconteiner from './Seachcontainer.svelte';
    import { goto } from '@sapper/app';
    import Searchicon from './Searchicon.svelte';
import { svg_element } from 'svelte/internal';
import Nav from './Nav.svelte';
import H1c from './H1c.svelte';
    
    function clickbutton() {
      
        goto('Login');
    }	
    </script>


<header class="w-screen bg-gradient-to-r border-b-8 border-opacity-50 border-blue-200 border-solid from-blue-400 via-blue-500 to-indigo-800   transition ease-in duration-700 md:bg-gradient-to-r " >
    <div class="flex  ">
        <div class="w-full sm:w-1/2 py-6 px-2 sm:mr-20 md:w-1/3  md:mr-20 lg:w-1/4 2xl:w-1/6 2 my-5 2xl:mr-40 drop-shadow">
            <img id="img" class="w-4/5" src='logocinematickv12.png' alt="logo" >
        </div>
        <div class="w-screen  md:w-4/6 ">
            <h1 class="py-7 text-blue-600 text-l md:text-xl xl:text-2xl uppercase my-6 ">
              <Searchconteiner/>                
            </h1>
        </div>
        <div class="w-1/6  flex justify-end absolute text-blue-400 top-20 right-3 hover:-translate-y-1 hover:scale-110">
          
            <div><a class="py-2 hidden 2xl:block text-blue-200 fill-current "href="https://www.instagram.com/explore/tags/jamon/"> <img src="/instagram2.png" alt="instagram"></a>&nbsp;
            </div> <div><a class="py-2 hidden 2xl:block" href="https://www.facebook.com/groups/jamonserrano"> <img src="/facebook2.png" alt="facebook"></a>&nbsp;
          </div><div><a class="py-2 hidden 2xl:block" href="https://twitter.com/search?q=%23jamon&src=typed_query"> <img src="twitter2.png" alt="twitter"></a>&nbsp;
        </div>
        <div>

          <button class="hidden lg:block py-4 hover:-translate-y-1  align-middle transition ease-in duration-400  hover:scale-110 bg-blue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xl px-10 rounded-full shadow  hover:bg-indigo-600 hover:text-blue-200 outline-none focus:outline-none mr-1 mb-1 " type="button" on:click="{()=> clickbutton()}">
            LOGIN
          </button></div>
        </div>


    </div>
<div class="align-right block xl:hidden bottom-0 right-0">
  <h1 class=" uppercase text-center text-ll text-blue-400 md:text-3xl">
  <a class="hover:text-indigo-600" href="about">Instagram&nbsp;</a>
  <a  class="hover:text-indigo-600" href="help">Facebook&nbsp;</a>
  <a class="hover:text-indigo-600"  href="contact">Twitter&nbsp;</a>
    
  <button class=" lg:hidden hover:-translate-y-1  align-middle transition ease-in duration-400  hover:scale-110 bg-blue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xl px-10 rounded-full shadow  hover:bg-indigo-600 hover:text-blue-200 outline-none focus:outline-none mr-1 mb-1 " type="button" on:click="{()=> clickbutton()}">
    LOGIN
  </button>
  </h1>
  
</div>
    
 </header >
 
    
 
          