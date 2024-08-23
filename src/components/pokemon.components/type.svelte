<script>
    import { onDestroy, onMount } from 'svelte';
    export let typeName;
    let bgColor;
    
    $: switch (typeName.toLowerCase()) {
        case "normal":
            bgColor = "#A8A878";
            break;
        case "poison":
            bgColor = "#A040A0";
            break;
        case "bug":
            bgColor = "#A8B820";
            break;
        case "ground":
            bgColor = "#E0C068";
            break;
        case "water":
            bgColor = "#6890F0";
            break;
        case "fire":
            bgColor = "#F08030";
            break;
        case "flying":
            bgColor = "#A890F0";
            break;
        case "fighting":
            bgColor = "#C03028";
            break;
        case "electric":
            bgColor = "#F8D030";
            break;
        case "fairy":
            bgColor = "#EE99AC";
            break;
        case "grass":
            bgColor = "#78C850";
            break;
        case "psychic":
            bgColor = "#F85888";
            break;
        case "rock":
            bgColor = "#B8A038";
            break;
        case "steel":
            bgColor = "#B8B8D0";
            break;
        case "ice":
            bgColor = "#98D8D8";
            break;
        case "ghost":
            bgColor = "#705898";
            break;
        case "dragon":
            bgColor = "#7038F8";
            break;
        default:
            bgColor = "black";
            break;
    }
    onMount( async () => {
    });

</script>

<main>
    <div class="type" style:background-color={bgColor}>
        <p>{typeName}</p>
    </div>
</main>

<style>
    .type {
        /* background-color: #f1f1f1; */
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
        width: 150px;
    }


</style>