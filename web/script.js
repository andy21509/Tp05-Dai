const input = document.getElementById("pokemonNombre")
    

async function getPokemonByName() {
    let name = input.value

const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();

        let pokemon = { nombre: data.name, imagen: data.sprites.front_default, tipos:  data.types.map(t => t.type.name).join(", "), peso: data.weight, altura: data.height }
        Object.entries(pokemon).forEach(([key,value]) => {
            if(key != "imagen"){
                document.getElementById(key).innerHTML = value
            }else{
                document.getElementById(key).src = value
            }
        })




    }



