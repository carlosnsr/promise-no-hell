let image_array = [];
let random_pokemon = []

$.get('http://pokeapi.co/api/v2/pokemon/').then(
    function(data) {
    let count = data.count
    return count
  }
).then(function(count){
  return $.get('http://pokeapi.co/api/v2/pokemon/?limit=' + count)
  console.log(count)
}
).then(function(data){
  let all_pokemon = data.results;
  image_array = [];
  random_pokemon = pick_three_randomly(all_pokemon)
  return $.get(random_pokemon[0].url)
}
).then(function(pokemon_data){
  add_image_to_array(image_array, pokemon_data)
  return $.get(random_pokemon[1].url)
}
).then(function(pokemon_data){
  add_image_to_array(image_array, pokemon_data)

  $("body").empty()
  for (let i = 0; i < image_array.length; ++i) {
    $("body").append(
      $("<h1>", {text: image_array[i].name}),
      $("<img>", {src: image_array[i].front}),
      $("<img>", {src: image_array[i].back})
    )}
})

function add_image_to_array(image_array, pokemon_data) {
  image_array.push({
    name: pokemon_data.name,
    front: pokemon_data.sprites.front_default,
    back: pokemon_data.sprites.back_default
  });
}

function pick_three_randomly(data_array) {
  let chosen = []
  let count = data_array.length
  for (let i = 0; i < 3; ++i) {
    let random_index = Math.floor(Math.random() * count)
    chosen.push( data_array[random_index] )
  }
  return chosen
}
