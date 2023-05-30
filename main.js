
let pokemon= prompt('Ingresa el Pokemon a buscar');

   function buscar(button){
    let pokemon= prompt('Ingresa el Pokemon a buscar');
    getPokemons(pokemon.toLowerCase())
}



function getPokemons(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response=> response.json())
        .then(data=>{
            const pokemonContainer = document.getElementById('pokemon-container');
            const pokemonNameElement = document.getElementById('pokemon-name');
            const pokemonImageElement = document.getElementById('pokemon-image');
           
            
            pokemonNameElement.textContent = data.name.toUpperCase();
            pokemonImageElement.src = data.sprites.front_default;
            
           
            
        })
        .catch(error => alert('Ese Pokemón aún es desconocido!'));

        
}


 

getPokemons(pokemon.toLowerCase())







