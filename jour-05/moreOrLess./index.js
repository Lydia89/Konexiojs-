
var max = 100;
var min = 1;

const number = Math.floor((Math.random() * (max - min) + min))
console.log(number)
//var exemple1 = require('./exemple1')
function desplaypropmt() {
   var prompt = require('prompt');

   // Start the prompt

   prompt.start();





   prompt.get({ name: 'numbermystere' }, function (err, result) {

      if (number < parseInt(result.numbermystere)) {

         console.log("C'est plus !")


      }
      else if (number > parseInt(result.numbermystere)) {
         console.log("C'est moins ! !")

      }

      else if (parseInt(result.numbermystere) === number) {
         console.log("Bravo, vous avez trouve le nombre mystère !!!")
      }

      desplaypropmt()

   })


}

(desplaypropmt());

