const request = require("request");

function getChuckNorrisFact() {
    var request = require("request")
    request.get("https://api.chucknorris.io/jokes/random", function (err, res, body) {
        var json = JSON.parse(body)

        console.log(json.value)


    })

} getChuckNorrisFact()