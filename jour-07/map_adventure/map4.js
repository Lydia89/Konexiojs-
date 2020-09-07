var arr = [1, 2, 3, 4]
var arr2=arr.map (function(elem) {

    if(elem%2 ===0){

       // console.log(true)
        return true
    }
    else{
       // console.log(false) 
        return false
    }


    
    }); 
    
    console.log(arr2) 