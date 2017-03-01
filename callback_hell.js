var random_pokemon = [];
var image_array = [];
$.get('http://pokeapi.co/api/v2/pokemon')
    .then(function(data) {
        var count = data.count;
        console.log("Retrieved count");
        return $.get('http://pokeapi.co/api/v2/pokemon/?limit=' + count);
    })
    .then(function(data) {
        console.log("Retrieved all pokemon");
        var all_pokemon = data.results;
        random_pokemon = pick_three_randomly(all_pokemon);

        return $.get(random_pokemon[0].url);
    })
    .then(function(pokemon_data) {
        console.log("Retrieved first pokemon");
        add_image_to_array(image_array, pokemon_data);

        return $.get(random_pokemon[1].url);
    })
    .then(function(pokemon_data) {
        console.log("Retrieved second pokemon");
        add_image_to_array(image_array, pokemon_data);

        return $.get(random_pokemon[2].url);
    })
    .then(function(pokemon_data) {
        console.log("Retrieved third pokemon");
        add_image_to_array(image_array, pokemon_data);

        $("body").empty();
        for (var i = 0; i < image_array.length; ++i) {
            var img = image_array[i];
            $("body").append(
                $("<h1>", {
                    text: img.name
                }),
                $("<img>", {
                    src: img.front
                }),
                $("<img>", {
                    src: img.back
                })
            );
        }
    });


function add_image_to_array(image_array, pokemon_data) {
    image_array.push({
        name: pokemon_data.name,
        front: pokemon_data.sprites.front_default,
        back: pokemon_data.sprites.back_default
    });
}

function pick_three_randomly(data_array) {
    var chosen = [];
    var count = data_array.length;
    for (var i = 0; i < 3; ++i) {
        var random_index = Math.floor(Math.random() * count);
        chosen.push(data_array[random_index]);
    }
    return chosen;
}
