
function letterCountRepeat(str) {
  var mot = '-1';
  //var letter;
  var result = 0;
  var string = str.split(' ')

  for (var i = 0; i < string.length; i++) {


    for (var j = 0; j < string[i].length; j++) {
      var count = 0;

      for (var k = j + 1; k < string[i].length; k++) {
        if (string[i][j] === string[i][k]) {
          count = count + 1

        }
        if (count > result) {

          result = count
          mot = string[i]
        }

      }
    }

  }

  return mot

}
console.log(letterCountRepeat("Today ,is the greatest day ever!"))