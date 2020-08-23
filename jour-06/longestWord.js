function longestWord(str) {

    var mot;
    var leng = 0;

    var arr = str.split(' ');
    for (var i = 0; i < arr.length; i++) {

        if (leng < arr[i].length) {

            leng = arr[i].length;
            mot = arr[i]

        }

    } return mot;


} console.log(longestWord("hadj Mohand"));