var arr = ['a', 'b', 'a', 'c', 'a', 'd']
var arr2 = arr.filter(function (elem) {

    if (elem !== 'a') {
        return true
    }


})
console.log(arr2)