import requestBuildeur from '../../components/requets/requets.buildeur.js';

export default class pokedexRequets extends requestBuildeur {
    
    run = true;

    params = {
        debug: false,
        cacheKey: "pokemonlist",
        limiteCall: 100000000,
        timeCacheOut: 100000
    }

    constructor(url, method, data) {
        super(url, method, data);
    }

    async getPokemonList() {
        console.log("GET POKEMON LIST");
        this.url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
        this.method = 'GET';
        return await this.fetch();
    }

    async getPokemonById(id) {
        if (id <1 || id > 151) {location.href = "/404"; }
        this.url = 'https://pokeapi.co/api/v2/pokemon-form/' + id;
        this.method = 'GET';
        return await this.fetch();
    }

    async getPokemonInfo() {
        const pokemonINfo = [];
        const pokemonName = await this.getPokemonList();
        for (let i = 0; i < pokemonName.results.length; i++) {
            if (this.run === false) {
                return;
            }
            const pokemon = await this.getPokemonById(i+1);
            pokemonINfo.push(pokemon);
        }
        return pokemonINfo;
    }

}