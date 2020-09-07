
var mots = require('./mots.json');


var coup = 10;

for (var i = 0; i < mots.length; i++) {
    //   console.log(mots[i]);

}

var word = mots[Math.floor(Math.random() * mots.length)].label

//var word = word.replace(/./gi, "*");
var res = ""
console.log(word)
//var lett = word.split('')
//console.log(lett)

function desplaypropmt() {

    var prompt = require('prompt');
    prompt.start();


    prompt.get({ name: 'l' }, function (err, result) {

        for (var i = 0; i < word.length; i++) {
            var words = word.substr(i, 1)
            if (words === (result.l) && (words === word[i])) {
                // res = lett + lett[i]
                res = res + words[i]
                console.log(res);
                console.log("t'as trovez!")


            }

        }

        for (var j = 0; j < word.length; j++) {
            if (words[i] !== (result.l)) {
                console.log("t'as pas trovez ! !")
                coup = coup - 1;
                console.log('Il vous reste ,' + "  " + coup + " " + 'coups a jouer ');

            }
            if (coup === 0) {
                console.log("le jeu est terminé, vous êtes perdu !!!");

            }

        }

        desplaypropmt()
    })


}




(desplaypropmt());