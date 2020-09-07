var request = require("request")
//const { get } = require("request")
request.get("https://restcountries.eu/rest/v1/all", function (err, data, body) {

    //console.log(body)

    var json = JSON.parse(body)

    for (var i = 0; i <= json.length - 1; i++) {
        console.log("------------")
        console.log(json[i].name)

    }

})

