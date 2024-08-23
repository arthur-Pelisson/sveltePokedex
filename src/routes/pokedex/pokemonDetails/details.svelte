<script>
// @ts-nocheck

    export let id;
    import { onDestroy, onMount } from 'svelte';
    import pokedexRequets from "../request";
    import Loader from '../../../components/loader.svelte';
    import { navigate } from "svelte-routing";
    import Type from '../../../components/pokemon.components/type.svelte';
    import { count } from '../../../components/store/bag';

    console.log(count.test());
    let imgClass = "white";
    let request = new pokedexRequets();
    let loading = false;
    let pokemonDetails = "";
    $:  getData(id);

    async function getData() {
            const response = await request.getPokemonById(id);
            if (response) {
            loading = true;
            console.log(response);
            pokemonDetails = response;
        }
    }
    // get state
    // console.log(window.history.state);
    onMount( async () => {
       getData();
    });

    onDestroy(() => {
      console.log("destroyed");
      request.run = false;
    });

    function pokemonIncrement () {
        if (id >= 151) {return;}
        id++;
        navigate("/pokedex/details/" + id);
    }

    function pokemonDecrement () {
        if (id <= 1) {return;}
        id--;
        navigate("/pokedex/details/" + id);
    }
    
</script>

<main id="details-content"> 
    <button on:click={() => navigate("/pokedex")}>Back</button>
    <Loader loading={loading}>
        <div id="details">
            <div>
                <button on:click={pokemonDecrement}> ⏴</button>
            </div>
            <div>
                <!-- svelte-ignore empty-block -->
                {#await pokemonDetails}
                {:then pokemonDetails}
                <h1>{pokemonDetails.name}</h1>
                <img class={imgClass} src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
                <h2>Types</h2>
                <div class="typeList">
                    {#each pokemonDetails.types as type}
                    <Type typeName={type.type.name} />
                    {/each}
                </div>
                {:catch error}
                <p style="color: red">{error.message}</p>
                {/await}
            </div>
            <div>
                <button on:click={pokemonIncrement}>⏵</button>
            </div>
        </div>
    </Loader>
    
</main>

<style>
    .typeList {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    .white {
        filter: brightness(0) invert(1);
    }

    #details {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    #details-content {
        width: 50%;
        margin: auto;
    }

    @media screen and (max-width: 1000px) {
        #details-content {
            width: 100%;
        }
    }
</style>