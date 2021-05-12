<script>
    export let figname;
    </script>
    
    
    <figure >
    <a href="movieinfo"> <img class="fig" src="p_sample.jpg" alt="Instagram" height="" width="100%"></a>
    <figcaption><h3>{figname}</h3></figcaption>
    </figure>
    
    <style>
    
    .fig:hover
    {
        width:120%;
        background-position: 100%;
            background-size: 200%;
           border: 3px solid #449fad;
            transition: background 200ms ease-in-out;
            transition: border 200ms ease-in-out;
            transition: width 400ms ease-in-out;
            background-color: #449fad; 
            border-radius: 50px; 
    }
    figure:hover
    { color: white;
        background-position: 100%;
            background-size: 200%;
           border: 3px solid #449fad;
            transition: background 200ms ease-in-out;
            background-color: #449fad; border-radius: 50px; 
    }
    
    h3
    {
       color: white;  
       
    }
    
    </style>