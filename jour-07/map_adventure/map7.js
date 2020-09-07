//methode 1
//var arr = [{
   // firstName: 'Daniel',
   // surname: 'Beckham'
//}, {
  //  firstName: 'David',
  //  surname: 'Craig'
//}]

//var arr2 = arr.map(function (elem) {


    // var Array = [{
    //fullName: elem.firstName + " " +elem.surname


    //}]
  //  var Array = [{
     //   fullName: 'Daniel Beckham'
 //   }, {
        //fullName: 'David Craig'
  //  }]





    //console.log(Array)
    //return elem

//})

// methode 2
var arr = [{
    firstName: 'Daniel',
   surname: 'Beckham'
 }, {
 firstName: 'David',
surname: 'Craig'
  }]

  var arr2 = arr.map(person => ({fullName :person.firstName + ' ' + person.surname}));
  console.log(arr2)