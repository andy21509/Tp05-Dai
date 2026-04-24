Nosotros dedujimos las propiedades de la api a partir de la documentación, en la cual se podía probar. Con eso descubrimos que se llaman a los Pokémon por el nombre o por el index en la pokedex.

Por ejemplo: pokemon/bulbasur = pokemon/1

Pokémon devuelve cada pokemon individualmente, type devuelve los tipos(tipo agua, siniestro, hada, etc), move(karate-chop, pound, etc). Estos endpoints los encotramos buscando https://pokeapi.co/api/v2/, donde te aparece cada uno, después si queríamos ver que nos tiraba teníamos que hacer https://pokeapi.co/api/v2/type o https://pokeapi.co/api/v2/ ability

Tuvimos un problema ya que creíamos que el dato type de cada pokemón debía ser un string, pero en realidad devolvía un objeto, entonces usamos la función map en el array de tipos de cada pokemos para que los convierta en su nombre para transformalo en un string.

Si se encuentra un error, la consola tira "Not Found" o "Bad Request"
