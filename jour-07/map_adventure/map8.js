var arr=[{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]
var arr2=arr.map(function(elem){

//console.log (elem.push( "fullName: 'Daniel Beckham'"))

arr[0].fullName = 'Daniel Beckham ';
arr[1].fullName = 'David Craig ';

return elem

//elem={
    //fullName:"Daniel Beckham" 

//}



//return(arr.push(elem))
//var copie = Object.assign({}, arr);


//console.log(Array)


//return arr.splice(1,0,elem)

})
console.log(arr2)