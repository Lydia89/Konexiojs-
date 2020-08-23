function LetterChanges(str) { 
    var newString = '';
    var newCode = 0;
    var len = str.length;
    
  
    for (var i = 0; i < len; i++){
   
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 121) {
        
        newCode = str.charCodeAt(i) + 1;
     
        if (newCode == 101) {
            newString += String.fromCharCode(69);
        } else if (newCode == 105) {
            newString += String.fromCharCode(73);
        } else if (newCode == 111) {
            newString += String.fromCharCode(79);
        } else if (newCode == 117) {
            newString += String.fromCharCode(85);
        } else {
            newString += String.fromCharCode(newCode);
        }
    
    } else if (str.charCodeAt(i) == 122){
        newString += String.fromCharCode(65);
    } else {
        newString += str[i];
    }
   }
  return newString; 
  
  }console.log(LetterChanges("hello*3"))



  // version map

  //function LetterChanges(str) { 
  
   // let strArray = str.toLowerCase().split("");
   // let letterChange = strArray.map(function(value, index, array){
    //  if(str.charCodeAt(index) < 97 || str.charCodeAt(index) > 122){
       // return value
     // }else{
        //return String.fromCharCode(str.charCodeAt(index)+1)
      //}
  //  });
    
   // letterChange = letterChange.map(function(value, index, array){
      //if(/[aeiou]/.test(value)){
        //return value.toUpperCase();
    //  }else{
       // return value;
     // }
  //  });
    
   // return letterChange.join(""); 
  //}
