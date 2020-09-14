
var request = require('request');
function catchPokemon(result) {
    var stock = []

    request.get("https://pokeapi.co/api/v2/pokemon/" + result, function (err, res, body) {
        var json = JSON.parse(body);
        console.log(json.moves);
      
        // console.log(stock)
        // console.log(json.name)
        //console.log('ID : ' + json.id)
        // console.log('Nom : ' + json.name)
        //console.log('Taille : ' + json.height)
        // console.log('Poids : ' + json.weight)



        request.get('https://pokeapi.co/api/v2/move/', function (err, res, body) {


            var json2 = JSON.parse(body)
            // console.log(json2.results)
            res = json2.results
            // console.log(res)
            for (var i = 0; i < res.length-1; i++) {

                request.get(res[i].url, function (err, res, body) {
                    var json3 = JSON.parse(body)
                    var res2 = json3.type;
                    //console.log(res2)
                    if (res2.url === "https://pokeapi.co/api/v2/type/" + result + "/") {
                        var arr = [json3.name]

                        // console.log(arr.join())
                        //  console.log(arr.toString(stock))
                          arr2 = stock.push(arr)

                        //  console.log(arr.join())

                        //console.log(arr2)
                    //   console.log("Attaques :" + "  " + stock.toString())

                        //var arr2= stock.push(arr)


                        // console.log(arr.join())
                        //  console.log("Attaques" + "  " + arr2 + ",");
                        // console.log(arr2)


                    }
                    
                    
                })
              

                 }
            
        })
       

    })
   

} catchPokemon(1)

/*
var voiture={
    marque:'BMW',
    modele:{a:"BMW x5 ",b:"BMW x6"},
    date: new Date("2015-08-08")

}
//console.log(voiture)
//console.log(voiture.marque)
//console.log(voiture["marque"])
//console.log(voiture.marque.c="string")
  voiture.penu=[1,2,3,4]
var arr= voiture.penu.map(function(ele){
   
   return ele+2 

})
console.log(arr)


*/