// version 1 sans regex


//function letterCapitalize(sentence) {
// var string = sentence.toLowerCase().split(' ');
//  for (var i = 0; i < string.length; i++) {
// string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
// }
//  return string.join(' ');
//}
//console.log(letterCapitalize("lina renteria"));





//version2 

function letterCapitalizeRegex(str) {

function maj(str){


return str.toUpperCase()
}
function firste(str){
    
    var firstletter = /(^|\s)[a-z]/g;
    return  str.replace(firstletter,maj);


}
console.log(firste("Hey tget these words please"))
}
letterCapitalizeRegex();
