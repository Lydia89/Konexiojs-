
var mots = require('./mots.json');
var coup = 10;

for (var i = 0; i < mots.length; i++) {
    //   console.log(mots[i]);

}

var letter = mots[Math.floor(Math.random() * mots.length)].label
//var letter = letter.replace(/./gi,"*");
var res = ""
console.log(letter)

function desplaypropmt() {

    //  var lett = letter.split('')
    // console.log(lett)
    var prompt = require('prompt');
    prompt.start();


    prompt.get({ name: 'l' }, function (err, result) {

        for (var i = 0; i < letter.length; i++) {

            //console.log( letter.length)

            var letters = letter.substring(1, 1)

            if (letters === (result.l) && (letters === letter[i])) {
                res = res + letters
                console.log(res);


                console.log("t'as trovez!")
                //  console.log(letter+" " +letters)
                if (res === letters.length) {

                }

            }
            return
        }


        if (letter !== result.mots) {
            //console.log("t'as pas trovez ! !")
            coup = coup - 1;
            console.log('Il vous reste ,' + "  " + coup + " " + 'coups a jouer ');

        }
        if (coup === 0) {
            console.log("le jeu est terminé, vous êtes perdu !!!");
            return
        }


        desplaypropmt()

    })




}


(desplaypropmt());