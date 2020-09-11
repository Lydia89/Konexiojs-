function catchPokemon(id){
    var request=require('request')
    request.get('https://pokeapi.co/api/v2/pokemon/1',function(err,res,body){
var json =JSON.parse(body)
//console.log(json)
if(id===1){
console.log("ID:"+" "+json.id)
console.log("Name:"+" "+json.name)
console.log("height:"+" "+json.height)
console.log("Weight:"+" "+json. weight)
}
    })
}catchPokemon(1)