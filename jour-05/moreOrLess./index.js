
 var max = 100;
 var min = 1;

const number = Math.floor((Math.random() * (max - min) + min))
console.log(number)
//var exemple1 = require('./exemple1')
function desplaypropmt() {
    var prompt = require('prompt');

    // Start the prompt

    prompt.start();

   
   
    //var prompt= parseInt(prompt)
    //var Numbermystère =parseInt('10')


    // Get two properties from the user: username and email
    //prompt.get(['username', 'email'], function (err, result) {
   //var nb= prompt.get(['numbermystere'], function (err, result) {
   
  prompt.get({ name :'numbermystere'}, function (err, result) {
   
        // console.log(prompt);


      //  if (result.numbermystere === number || result.numbermystere < number ) {
           //console.log("C'est plus !");


     if ( number< parseInt (result.numbermystere)) {
        // nb=parseInt(prompt("C'est plus "))
            //console.log(parseInt(prompt) )
            // console.log(number )
           console.log("C'est plus !")
        // console.log(nb)

       }
        else if (number > parseInt (result.numbermystere)) {
           console.log("C'est moins ! !")

       }

       else if (parseInt(result.numbermystere) === number ){
          console.log("Bravo, vous avez trouve le nombre mystère !!!")
       }
       
       desplaypropmt()
        // Log the results.

        //  console.log('Command-line input received:');
         // console.log('  number ' + result.number);
          //console.log('  numbermystere: ' + result.numbermystere);
    })
   
    
}

(desplaypropmt());

