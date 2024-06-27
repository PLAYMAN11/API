async function BtnPokeapi(){
    const ContenedorPokemon = document.getElementById("pokemon");
    const numero = Math.floor(Math.random() * 999 + 1)
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/" + numero);
    const data = await respuesta.json();
    const nombreP = data.name;
    const sprite = data.sprites.front_default;

    ContenedorPokemon.innerHTML = `<h2>${nombreP}</h2>`;
    ContenedorPokemon.innerHTML += `<img src="${sprite}"></img>`;
}
