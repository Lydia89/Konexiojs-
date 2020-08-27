//var prompt = require('prompt');

//var properties = [
//  {
//name: 'username',
// validator:  /^[a-zA-Z\s\-]+$/,
// validator: /^[a-z0-9-]+$/gi,
// warning: 'Username must be only letters, spaces, or dashes'
//   },
///   {
//  name: 'password', ///replace ********
//validator: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z\s\-\,\.]{6,}$/, pour maj
//   validator: /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z\s\-\,\.]{6,}$/,
// warning: 'error password',
//  hidden: true,
// replace: "*",

// },
//  {
// name: 'email',
// hidden: true
// }

//];


//prompt.start();

//prompt.get(properties, function (err, result) {

//  if (err){
// console.log('error')
//}
// else{
//  console.log('ok')
// }






//{ return onErr(err); }
//console.log('Command-line input received:');
// console.log('  Username: ' + result.username);
// console.log('  Password: ' + result.password);
// console.log('  email: ' + result.email);



//});



//function onErr(err) {
//  console.log(err);
// return 1;
//}



//var obj={
// type:['1','2','3'],

//name:"javascript",
//}
// console.log(obj.type);
// console.log(obj.type[1]);
// console.log(obj['name'])



//
//


//version  2
var prompt = require('prompt');
//var pass1 = /^[a-z0-9-]+$/gi;
//var pass2 = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z\s\-\,\.]{6,}$/;

var properties = [
    {
        name: 'username',
        // validator:  /^[a-zA-Z\s\-]+$/,
        pass1 : /^[a-z0-9-]+$/gi,
        warning: 'Username must be only letters, spaces, or dashes'


    },
    {
        name: 'password',///replace ********
        //validator: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z\s\-\,\.]{6,}$/, pour maj
        pass1: /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z\s\-\,\.]{6,}$/,

        warning: 'error password',
        hidden: true,
        replace: "*",
    },

    {
        name: 'email',
        // hidden: true
    }

];


prompt.start();


prompt.get(properties, function (err, result) {
    
    
  if (properties[0].pass1 !== false){
        console.log('ok')

       
// console.log(properties[0].pass1 !== true)

  //   console.log(properties[1].pass2 !== true)
      
   }

    else if (properties[0].pass1 !== true){
        console.log('error')
    }


 // else  //if((properties[0].pass1 === true) || (properties[1].pass2 === true))
 // {  

       // console.log('error' ) 
    //}

     
    // return  name.matches(properties.password);
    //console.log('Command-line input received:');
    // console.log('  Username: ' + result.username);
    // console.log('  Password: ' + result.password);
    // console.log('  email: ' + result.email);

})







