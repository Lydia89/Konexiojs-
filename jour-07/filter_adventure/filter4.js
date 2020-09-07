var arr = [1, 2, 3, 4]
var arr2 = arr.filter(function (elem) {
    if (elem % 2 === 0) {
        return elem
    }

})
console.log(arr2)