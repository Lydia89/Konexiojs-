var scorejoueur = 0;
var scorebanque = Math.floor(Math.random() * (21 - 16) + 16)

var card = Math.floor(Math.random() * (11 - 1) + 1)
//console.log(card)
var stock = 0;

var prompt = require('prompt');

prompt.start();

function displayPrompt() {
    prompt.get({ name: 'q', description: 'Card?' }, function (
        err,
        result
    ) {
        for (var i = 0; i <= scorejoueur; i++) {
            if (result.q == 'Y' || result.q == 'YES') {

                if (card != scorejoueur) {
                    scorejoueur = scorejoueur + card
                    console.log("scorejoueur " + scorejoueur);


                } else if (card === 11) {
                    console.log("fini")
                }
            }
        } if (result.q == "passed") {
            console.log("perdu")
            return
        }

        displayPrompt();


    });




}

displayPrompt();
