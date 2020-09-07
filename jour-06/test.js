
var min = 0
var max = 7

var array = [];
for (var i = 0; i <= 5; i++) {
    var number = Math.floor((Math.random() * (max - min) + min))
    array.push(number);


}
console.log(array)