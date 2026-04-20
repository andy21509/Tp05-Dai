const input = document.getElementById("pokemonNombre")

async function getPokemonByName() {
    let name = input.value
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();


        let pokemon = { nombre: data.name, imagen: data.sprites[0], tipos: data.types, peso: data.weight, altura: data.height }
        pokemon.forEach(e => {
            if(e.key != "imagen"){
                document.getElementById(e.key).innerHTML = e.value
            }else{
                document.getElementById(e.key).src = e.value
            }
        })




    }



