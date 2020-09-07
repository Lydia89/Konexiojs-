var request = require("request")



request.get("http://data.fixer.io/api/latest?access_key=b3bf580f476dd1fa3e6d1ca802615008", function (err, data, body) {




  function convertiseur(arg1, arg2, arg3) {


    var arg1 = (process.argv[2]);
    var arg2 = (process.argv[3]);
    var arg3 = parseInt(process.argv[4]);
    var json = JSON.parse(body)
    //  var args = process.argv.slice(2);
    //console.log(body)
    arg1 = json.rates.EUR
    console.log(arg1)
    //  arg2 = json.rates.USD




    // console.log(json.rates.USD)
    // console.log(json.rates)

    for (var i = 0; i < json.rates; i++) {

      if ((arg1 = json.rates.EUR) && (arg2 = json.rates.THB)) {
        // console.log(arg1)

        var res = arg1 * arg3 // arg1 EUR=1   * 35
        var res2 = res * arg2 // arg2 USD = 1.183865 * res(35)
        console.log(res2 + ' ' + "Usd")

      }

    }


  } convertiseur()
  // var json = JSON.parse(body)

  // console.log(json.base)

})
