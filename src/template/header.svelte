<script>
    import { Router, Link, Route } from "svelte-routing";
    import Home from "../routes/home/home.svelte";
    import Pokedex from "../routes/pokedex/pokedex.svelte";
    
  
  </script>
  
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/pokedex">pokedex</Link>
      <Link to="/pokedex/details">pokedex</Link>
    </nav>
  </Router>