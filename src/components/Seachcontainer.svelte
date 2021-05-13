<script>
    import Searchicon from '../components/Searchicon.svelte';
import Dropbutton from './Dropbutton.svelte';
    
    </script>
    
    
    <div class="w-9/12 rounded-full border-solid pl-10 bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-800 hover:from-indigo-400 via-indigo-500 to-blue-800 transition ease-in duration-700 ">       
         <form   action="busqueda">
             <br>
                        <input type="text" class="w-4/5 transition ease-in duration-700 hover:bg-indigo-200 text-center text-white placeholder-white  bg-blue-200 rounded-full border-solid" placeholder="BUSCAR..." name="searchbar"  >
                         <div class="text-right float-right right-10 pb-8 scale-125 mr-14 -mt-4">
                          <Searchicon/>
                       </div>
                 <br><br>   
         </form>
    </div>  
