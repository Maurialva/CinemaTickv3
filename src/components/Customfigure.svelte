<script>
    export let figname;
    export let cl;
    export let movie;
    </script>
    
    
    <figure >
    <a  href="movieinfo"> <img class="{cl}" id="fig" src={movie} alt="Instagram" ></a>
    <figcaption class="text-center text-xl uppercase "><h3>{figname}</h3></figcaption>
    </figure>
