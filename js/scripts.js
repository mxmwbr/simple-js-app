// Array-list of Pokemons
let pokemonList = [
    {name: 'Bulbasaur', Height: 2, type: ['seed', 'grass']},
    {name: 'Charmander', Height: 2, type: ['Lizard', 'fire']},
    {name: 'Squirtle', Height: 1, type: ['Tiny Turtle', 'water']}
    ];
    
for (let i = 0; i < pokemonList.length; i++) {
        document.write("<p>" + `${pokemonList[i].name}: ${pokemonList[i].Height}` + "</p>")
    }
for (let i = 0; i < pokemonList.length; i++) {
        if (pokemonList[i].Height > 2) {
            document.write("<p>" + `${pokemonList[i].name} Wow, that's big!` + "</p>")
        }
    }