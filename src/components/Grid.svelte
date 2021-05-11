<script>
    export let pagenumber;
    
    </script>
    
    {#if pagenumber=="1"}
        
        <style>
        
         
        .menuleft { grid-area: menu; }
        .menucenter { grid-area: main; }
        .menuright { grid-area: right; }
   
        
        .grid-container {
          display: grid;
          grid-template-areas:
            'menu menu menu menu menu main';
            grid-gap: 1%;
          background-color:#449fad;
          padding: 1%;
          border-radius: 50px; 
        }
        
        .grid-container > div {
          background-color:lightgray;
          text-align: center;
          padding: 1%;
          border-radius: 50px; 
          border-color: aqua;
          
          
        }
        </style>
    
    {:else if pagenumber=="7"}
    
    <style>
        
        .menuleft { grid-area: menu; }
        .menucenter { grid-area: main; }
        .menuright { grid-area: right; }
   
        
        .grid-container {
          display: grid;
          grid-template-areas:
            'menu menu main main main main';
            grid-gap: 1%;
          background-color:#449fad;
          padding: 1%;
          border-radius: 50px; 
        }
        
        .grid-container > div {
          background-color:lightgray;
          text-align: center;
          padding: 1%;
          border-radius: 50px; 
          border-color: aqua;
          
          
        }
        </style>
 
{:else if pagenumber=="9"}
<style>
  .title{ grid-area: m0; }
  .movie1 { grid-area: m1; }
  .movie2 { grid-area: m2; }
  .movie3 { grid-area: m3; }
  .movie4 { grid-area: m4; }
  .movie5 { grid-area: m5; }
  .movie6 { grid-area: m6; }
  .movie7 { grid-area: m7; }
  .movie8 { grid-area: m8; }
  .movie9 { grid-area: m9; }
  
  .grid-container {
    display: grid;
    grid-template-areas:
      'm0 m0 m0'  
      'm1 m2 m3'
      'm4 m5 m6'
      'm7 m8 m9';
  }
  
  .grid-container > div {
      background-color:none;
    text-align: center;
    padding: none;
    border-radius: 50px; 
    border:none;
    
    
  }
  :global(div)
  {
      background-color:none;
      border-color: lightgray;
      border:none;
  }
  
              </style>
  {:else }

  <style>
      
      
      .menuleft { grid-area: menu; }
      .menucenter { grid-area: main; }
      .menuright { grid-area: right; }

      
      .grid-container {
        display: grid;
        grid-template-areas:
          'main main main main main main';
          grid-gap: 1%;
        background-color:#449fad;
        padding: 1%;
        border-radius: 50px; 
      }
      
      .grid-container > div {
        background-color:lightgray;
        text-align: center;
        padding: 1%;
        border-radius: 50px; 
        border-color: aqua;
        
        
      
      }
      </style>
    {/if}
    

    