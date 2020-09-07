var arr = [{
    firstName: 'David',
    surname: 'Beckham'
}, {
    firstName: 'James',
    surname: 'Corden'
}, {
    firstName: 'Daniel',
    surname: 'Craig'
}, {
    firstName: 'Graham',
    surname: 'Norton'
}]
var arr2 = arr.filter(function (elem) {

    //if(elem.firstName[0]==='D')  methode 1
    //return true
    var str = (elem.firstName.substr(0, 1))

    if (str === "D") {

        return true
    }
    // if ( el.firstName.substr(0,1) ==='D')  methode 3

})
console.log(arr2)