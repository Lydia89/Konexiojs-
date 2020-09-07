
//methode 1
//var arr = ['pan', 'top', 'pal', 'tool']
//var arr2 = arr.map(function (elem) {

   //  arr = elem.split("");

    // arr2 = arr.reverse();

   // var Array = arr2.join("")
  //  return Array

//})
//console.log(arr2)




//methode2
var arr = ['pan', 'top', 'pal', 'tool']
var arr2 = arr.map(function (elem) {

   return elem.split('').reverse().join('')

})
console.log(arr2)
