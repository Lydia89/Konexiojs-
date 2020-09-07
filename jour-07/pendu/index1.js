
var word = "rouge";

var mots = word.replace(/./gi, "*");

var stock = ""

var coup = 10;
var prompt = require('prompt');

prompt.start();

function displayPrompt() {
    prompt.get({ name: 'letter', description: 'tapez une lettre' }, function (err, result) {

        for (var i = 0; i < word.length; i++) {

            if (word.charAt(i) === result.letter) {

                mots = mots.substr(0, i) + result.letter + mots.substr(i + (result.letter).length)
                // mots = mots.replace(mots[i], result.letter)
                console.log(mots)
                stock = mots[i]
                console.log(stock)
                console.log('bravo');
            }
        }

        if (stock != result.letter) {
            // position = mots.lastIndexOf(mots[i])
            // console.log(position)

            coup = coup - 1;

            console.log('Il vous reste ,' + "  " + coup + " " + 'coups a jouer ');

            if (coup === 0) {
                console.log("le jeu est terminé, vous avez perdu !!!");
                if (word !== mots) {
                    console.log("le mots * c'est :", word)

                }

                return
            }
        }
        else if (word === mots) {
            console.log("bravo t'as gangé")
            return
        }

        displayPrompt();

    });
}
displayPrompt();
