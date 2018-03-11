let random_pokemon = []
let image_array = []
$.get('http://pokeapi.co/api/v2/pokemon', function(data) {
  let count = data.count
  console.log("Retrieved count")

  $.get('http://pokeapi.co/api/v2/pokemon/?limit=' + count, function(data) {
    console.log("Retrieved all pokemon")
    let all_pokemon = data.results
    random_pokemon = pick_three_randomly(all_pokemon)

    $.get(random_pokemon[0].url, function(pokemon_data) {
      console.log("Retrieved first pokemon")
      add_image_to_array(image_array, pokemon_data)

      $.get(random_pokemon[1].url, function(pokemon_data) {
        console.log("Retrieved second pokemon")
        add_image_to_array(image_array, pokemon_data)

        $.get(random_pokemon[2].url, function(pokemon_data) {
          console.log("Retrieved third pokemon")
          add_image_to_array(image_array, pokemon_data)

          $("body").empty()
          for (let i = 0; i < image_array.length; ++i) {
            let img = image_array[i]
            $("body").append(
              $("<h1>", {text: img.name}),
              $("<img>", {src: img.front}),
              $("<img>", {src: img.back})
            )
          }
        })
      })
    })
  })
})

function add_image_to_array(image_array, pokemon_data) {
  image_array.push({
    name: pokemon_data.name,
    front: pokemon_data.sprites.front_default,
    back: pokemon_data.sprites.back_default
  })
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
