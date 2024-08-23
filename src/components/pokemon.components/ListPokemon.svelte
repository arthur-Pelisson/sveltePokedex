<script>
    // @ts-nocheck

    export let pokemonList;
    import { count } from '../../components/store/bag';
    import { navigate } from "svelte-routing";

    // count.subscribe((value) => {
    //   console.log(value);
    // });

    count.set([1,2,3]);
    function redirect(i) {
        i++;
        navigate("/pokedex/details/" + i);
    }
</script>

<div class="pokedexList">
    <!-- svelte-ignore empty-block -->
    <slot />
    {#await pokemonList then pokemonList}
        {#each pokemonList as pokemon, i}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- svelte-ignore a11y-no-static-element-interactions -->
            <div class="listpokemon-item">
              <button>Catch</button>
              <div class="pokemon" on:click={() => redirect(i)}>
                  <img class="white" src={pokemon.sprites.front_default} alt={pokemon.name} />
                  <h3>{pokemon.name}</h3>
              </div>
            </div>
        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>

<style>
    .white {
        filter: brightness(0) invert(1);
    }

    .pokedexList {
        display: flex;
        flex-direction: row;
        /* max-width: 100%; */
        flex-wrap: wrap;
    }

    .pokemon {
        width: 100px;
    }
    .pokemon:hover {
        cursor: pointer;
    }

    .listpokemon-item {
      display: flex;
      flex-direction: column;
      

    }
</style>
