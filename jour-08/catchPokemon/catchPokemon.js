/*
//chalange 1 
function catchPokemon(id) {
    var request = require('request')
    request.get('https://pokeapi.co/api/v2/pokemon/' + id, function (err, res, body) {
        var json = JSON.parse(body)
        //console.log(json)
        var stock = [];
        var json1 = json.moves
        console.log("ID:" + " " + json.id)
        console.log("Name:" + " " + json.name)
        console.log("height:" + " " + json.height)
        console.log("Weight:" + " " + json.weight)

        // console.log(json)
        for (var i = 0; i < json1.length; i++) {
            var attaques = json1[i].move.name
            stock.push(attaques)
        }
        console.log("Attaques" + " " + stock.toString());

    })
} catchPokemon(1)

*/
//chalange 2

    function catchPokemon(id) {
        var request = require('request')
        request.get('https://pokeapi.co/api/v2/pokemon/' + id, function (err, res, body) {
            var json = JSON.parse(body)
            //console.log(json)
            var stock = [];
            var pkmn ={}
            var json1 = json.moves
           // console.log("ID:" + " " + json.id)
          //  console.log("Name:" + " " + json.name)
          //  console.log("height:" + " " + json.height)
          //  console.log("Weight:" + " " + json.weight)
            // console.log(json)
            for (var i = 0; i < json1.length; i++) {
                var attaques = json1[i].move.name
                stock.push(attaques)
            }
           // console.log("Attaques" + " " + stock.toString());
    
        pkmn.id=json.id
        pkmn.name=json.name
        pkmn.height=json.height
        pkmn.weight=json.weight
        //pkmn.types=json.types
        pkmn.types=json.types[0].type.name+ ","+json.types[1].type.name
        pkmn.attaques=stock.toString()

        console.log(pkmn)


    })
} catchPokemon(1)


// chalange 3
/*
function catchPokemon(id) {
    var request = require('request')


    request.get('https://pokeapi.co/api/v2/pokemon/1', function (err, res, body) {
        var pkmn = {}
        var stock = [];
        var json = JSON.parse(body)
        //console.log(json)

        var json1 = json.moves

        for (var i = 0; i < json1.length; i++) {
            var attaques = json1[i].move.name
            stock.push(attaques)
        }
        //console.log("Attaques" + " " + stock.toString());
        pkmn.id = json.id
        pkmn.name = json.name
        pkmn.height = json.height
        pkmn.weight = json.weight
        //pkmn.types=json.types
        pkmn.types = json.types[0].type.name + "," + json.types[1].type.name
        pkmn.attaques = stock.toString()
    
        console.log(pkmn.name); // bulbasaur
        console.log(pkmn.types.split ( )); // ['poison', 'grass']
        console.log(pkmn.id); // 1
        console.log(pkmn.height); // 7
        console.log(pkmn.weight); // 69
        console.log(pkmn.attaques.split ( )); // ['razor-wind', 'swords-dance', 'cut', 'bind', ...]
    })

} catchPokemon(1)


*/
