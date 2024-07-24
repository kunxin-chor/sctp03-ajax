


async function searchPokemon(pokemonName) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    return response.data;
}

async function displayPokemon(pokemon) {
    const outputElement = document.querySelector("#output");
    outputElement.innerHTML = `
        <h1>${pokemon.name}</h1>
        <p>Base experience: ${pokemon.base_experience}</p>
        <img src="${pokemon.sprites.other["official-artwork"].front_shiny}"/>
    `
}

document.addEventListener("DOMContentLoaded", async function(){
    const button = document.querySelector("#submit");
    button.addEventListener("click", async function(){
        const searchElement = document.querySelector("#searchTerms");
        const searchTerms = searchElement.value

        const pokemon = await searchPokemon(searchTerms);
        console.log(pokemon);

        displayPokemon(pokemon);


    })
   
});