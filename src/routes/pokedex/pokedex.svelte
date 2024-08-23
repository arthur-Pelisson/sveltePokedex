<script>
    import { onDestroy, onMount } from 'svelte';
    import pokedexRequets from "./request";
    import ListPokemon from "../../components/pokemon.components/ListPokemon.svelte";
    import Loader from "../../components/loader.svelte";


    let request = new pokedexRequets();
    let loading = false;
    let pokemonList = [];
    
    onMount( async () => {
      
      const response = await request.getPokemonInfo();
      if (response) {
        loading = true;
        pokemonList = response;
      }
    });

    onDestroy(() => {
      console.log("destroyed");
      request.run = false;
    });

</script>


<svelte:head>
  <title> Pokedex </title>
</svelte:head>

<h1>pokedex</h1>

<div >
  <Loader loading={loading}>
    <ListPokemon {pokemonList}>
    </ListPokemon>
  </Loader>
</div>
