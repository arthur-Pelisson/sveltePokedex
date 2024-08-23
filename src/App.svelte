<script>
// @ts-nocheck

  import Header from "./template/header.svelte";
  import Footer from "./template/footer.svelte";
  import Home from "./routes/home/home.svelte";
  import Pokedex from "./routes/pokedex/pokedex.svelte";
  import Details from "./routes/pokedex/pokemonDetails/details.svelte";
  import NotFound from "./routes/404/notFound.svelte";
  import {Router, Link, Route} from "svelte-routing";

</script>

  <header>
    <Header />
  </header>
  <div id="contente">
    <Router>
      <Route path="/"><Home /></Route>
      <Route path="/pokedex" component={Pokedex} />
      <Route path="/pokedex/details/:id" let:params>
        <Details id="{params.id}"  />
      </Route>
      <Route component={NotFound}/>
    </Router>
  </div>
  <!-- <footer>
    <Footer/>
  </footer> -->
 
<style>
  footer {
    /* position: fixed; */
    bottom: 0;
    width: 100%;
  }

  #contente {
    width: 100%;
    text-align: center;
    margin: auto;
  }


</style>
