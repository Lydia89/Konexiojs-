//function dashInsert(str) {
// var result = ""
// var res = ""

// for (var i = 0; i <= str.length; i++) {

//  if (str[i] % 2 != 0) {


// if(str[i] % 2 === 0){
// result = str[i] + "-";
//  }
//result = str[i] + "-";
// res = result + str[i];

// console.log(result)
//return res
//}

// }

//console .log(result);

//}

function dashInsert(str) {

  var arr = str.toString().split('');
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1 && arr[i + 1] % 2 == 1) {
      arr[i] = arr[i] + "-";

    }
  }

  return arr.join("")
}




console.log(dashInsert(56730));