const input = document.getElementById("pokemonNombre")


async function getPokemonByName() {
    let name = input.value

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (res.ok) {
        const data = await res.json();

        let pokemon = crearPokemon(data)

        Object.entries(pokemon).forEach(([key, value]) => {
            if (key != "imagen") {
                document.getElementById(key).innerHTML = value
            } else {
                document.getElementById(key).src = value
            }
        })
    } else {
        reiniciarVista()
    }
}

function reiniciarVista() {
    document.getElementById("nombre").innerHTML = "No se encontro ningun pokemon"
    document.getElementById("imagen").src = ""
    document.getElementById("tipos").innerHTML = ""
    document.getElementById("peso").innerHTML = ""
    document.getElementById("altura").innerHTML = ""
}

function crearPokemon(data) {
    return { nombre: data.name, imagen: data.sprites.front_default, tipos: data.types.map(t => t.type.name).join(", "), peso: "Lb: " + data.weight, altura: "Inch: " + data.height }
}



