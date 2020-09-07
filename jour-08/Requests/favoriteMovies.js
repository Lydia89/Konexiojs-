var request = require("request")
//var film=require("./film.json")

//var urls=["http://www.omdbapi.com/?i=tt3896198&apikey=585c254f","http://www.omdbapi.com/?t=la+ligne+verte"]
//request.get("urls", function(err,data,body){


//var uri="http://www.omdbapi.com/?i=tt3896198&apikey=585c254f";
//var encoded = encodeURI(uri);


//console.log(encoded);
//console.log(data)
//console.log(body)
//var json=JSON.parse(body)
//for(var i=0 ;i<=10;i++){

//console.log(json[i].Title)
//console.log(json[i].Year)
//console.log(json[i].Genre)
//console.log(json[i].Actors)
//}
//console.log(film[0]['name']['Title'],film[0]['name']['Year'])
//console.log(film[0]['name']['Year'])
//console.log(film[0]['name']['Genre'])
//console.log(film[0]['name']['Actors'])

//console.log(film[1]['name']['Title'])
//console.log(film[1]['name']['Year'])
//console.log(film[1]['name']['Genre'])
//console.log(film[1]['name']['Actors'])





//console.log(body)
//})


//var request = require('request');

///var options = {
//url:"http://omdbapi.com/?i=tt3896198&apikey=585c254f" ,
//  url1:"http://www.omdbapi.com/?t=titanic",
//
//method: 'GET'
//};
/*
var options = {
    
      method: "GET",
      url: "http://omdbapi.com/?i=tt3896198&apikey=585c254f",
 
      method: "GET",
      url: "http://www.omdbapi.com/?t=titanic",

     // method: "GET",
    //  url: "/groups/{id}/events",
    //  url: "/me",
    
     
    }
  
*/



//request(options, (err, res, body) => {
///if (err) {
//return console.log(err);
//}
// console.log(JSON.parse(body));
// console.log(JSON.parse(options.url1));
//  console.log(JSON.parse(url1))



//});




//const request = require('request');



// print the users
//var j=JSON.parse(body)
//console.log(j)
/*
function user(options) {

    options = {

        method: "GET",
        url: "http://omdbapi.com/?i=tt3896198&apikey=585c254f",

        method: "GET",
        URI: "http://www.omdbapi.com/?t=titanic",

        // method: "GET",
        //  url: "/groups/{id}/events",
        //  url: "/me",


    }

*/
/*
    request.get("http://www.omdbapi.com/?t=titanic&apikey=585c254f", { json: true }, (err, res, body) => {
        if (err) {
            return console.log(err);
        }

        //for (var i= 0;i<=10;i++){
           // console.log(film.name)
            console.log(body)
        //console.log(body.Title)
        //console.log(body.Year)
       // console.log(body.Genre)
       // console.log(body.Actors)

        //}
    }) ;
}user()




*/


//body.res.map(user => {
// console.log(`${user.Title} ${user.Year}`);
//});



var obj = {
    "url": "http://www.omdbapi.com/?t=titanic&plot=full&apikey=69764082",
    "url": "http://www.omdbapi.com/?t=violetta&plot=full&apikey=69764082",
    "url": "http://www.omdbapi.com/?t=twilight&plot=full&apikey=69764082",
    "url": "http://www.omdbapi.com/?t=avatar&plot=full&apikey=69764082",
}




request.get(obj.url, { json: true }, (err, res, body) => {
    if (err) {
        return console.log(err);
    }

    function user() {


        console.log(".1  ")
        console.log("Title :" + " " + body.Title)
        console.log("Year :" + " " + body.Year)
        console.log("Genre :" + " " + body.Genre)
        console.log("Actors :" + " " + body.Actors)


    } user()
});

request.get(obj.url, { json: true }, (err, res, body) => {
    if (err) {
        return console.log(err);
    }

    function user() {

        setTimeout(function () {
            console.log(".2    ")
            console.log("Title :" + " " + body.Title)
            console.log("Year :" + " " + body.Year)
            console.log("Genre :" + " " + body.Genre)
            console.log("Actors :" + " " + body.Actors)


        }, 100);

    } user()
});
request.get(obj.url, { json: true }, (err, res, body) => {
    if (err) {
        return console.log(err);
    }

    function user() {
        setTimeout(function () {

            console.log(".3     ")
            console.log("Title :" + " " + body.Title)
            console.log("Year :" + " " + body.Year)
            console.log("Genre :" + " " + body.Genre)
            console.log("Actors :" + " " + body.Actors)


        }, 200);

    } user()
});
request.get(obj.url, { json: true }, (err, res, body) => {
    if (err) {
        return console.log(err);
    }

    function user() {

        setTimeout(function () {
            console.log(".4    ")
            console.log("Title :" + " " + body.Title)
            console.log("Year :" + " " + body.Year)
            console.log("Genre :" + " " + body.Genre)
            console.log("Actors :" + " " + body.Actors)
        }, 300);



    } user()
});
