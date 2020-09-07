
function rot13(str) {

  var mot = "";

  for (var i = 0; i < str.length; i++) {



    var code = str[i].charCodeAt();
    // console.log(code);

    if (code >= 65 && code <= 77 || code >= 97 && code <= 109) {

      mot += String.fromCharCode(code + 13);

    }

    else if (code >= 78 && code <= 90 || code >= 110 && code <= 122) {
      mot += String.fromCharCode(code - 13);
    }

  } return mot;
} console.log(rot13('lydia'))






