var scorejoueur = 0;
var scorebanque = Math.floor(Math.random() * (21 - 16) + 16)
//var card = Math.floor(Math.random() * (11 - 1) + 1)
//console.log(card)
var prompt = require('prompt');
prompt.start();
function displayPrompt() {
    prompt.get({ name: 'q', description: 'Card?' }, function (err, result) {
        if ((result.q == 'Y' || result.q == 'YES') || (result.q == 'y' || result.q == 'yes')) {
            var card = Math.floor(Math.random() * (11 - 1) + 1)
            scorejoueur = scorejoueur + card
            console.log("scorejoueur " + scorejoueur);
            console.log("Your score is " + scorejoueur + ", bank is " + scorebanque)
        }
        else if ((result.q === 'p' || result.q === 'pass')&&(scorejoueur>16)  ){
            console.log("gagne")
            console.log("Your score is " + scorejoueur + ", bank is " + scorebanque)

            if (scorejoueur > scorebanque)  {
                console.log("le joueur gagne.")
                console.log("Your score is " + scorejoueur + ", bank is " + scorebanque)
                return
            }

            if (scorejoueur < scorebanque) {
                console.log("le joueur perd.")
                console.log("Your score is " + scorejoueur + ", bank is " + scorebanque)
                return
            }
            if (scorejoueur === scorebanque) {
                console.log("le joueur perd.")
                console.log("Your score is " + scorejoueur + ", bank is " + scorebanque)
                return
            }
    
        }
        
        if (scorejoueur === 21) {
            console.log("Black Jack et gagne")
            return
        }
        if (scorejoueur > 21) {
            console.log("tu as perdu")
            console.log("Your score is " + scorejoueur + ", bank is " + scorebanque)
            return
        }
        displayPrompt();
    });
}
displayPrompt();