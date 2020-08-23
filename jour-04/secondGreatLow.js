//function secondGreatLow(arr){
//var arr=[7,7,12,98,106];
//arr.sort()
//console.log(arr)

//var arr=[7,7,12,98,106];
//arr.sort(function (a, b) {
// return a - b;

//});console.log(a- b)




//var array;
//for(var i=0; i <= arr.length;i++){






//if(arr[2]<arr[3]){
//console.log(true)


//}



//}









//}secondGreatLow();



//var secondGreatLow = function (arr){ 

//var arr =    [7, 7, 12, 98, 106]   //  [4, 90]//  [1, 42,42, 180]; // 

//  for(var i= 0;i<=arr.length; i++){
//  var max = Math.max.apply(null, arr); 
// arr.splice(arr.indexOf(max), i); 
//var min = Math.min.apply(null, arr); 
//  arr.splice(arr.indexOf(min), i); 
// var x =arr.toString();
//  return x;
//}


//};

//console.log(secondGreatLow ());

var array= [1, 42, 42, 180] // [4, 90] // //[7, 7, 12, 98, 106]
     function secondGreatLow (arr) {
        // var frist;
        // var second;

    arr.sort(function (a, b) {
        
            return a - b;
          });
          console.log(arr);
       
      first=arr[1];
 
    second= arr[arr.length-2]
    console.log(first + ' ' + second);

}

console.log(secondGreatLow(array));