

//var arg1 =6,
   // arg2, arg3 =12;


//var args = process.argv.slice(2);
// console.log(args)
//if (args.length === 3) {
    //console.log(doop(arg1, arg2, arg3))



//} else {
   // return 'error'

//}


//function doop(arg1, arg2, arg3) {
  // console.log(6 + '+' + 12)

   //console.log(parseInt(process.argv[arg1]))
    //console.log(process.argv[2])
    //  console.log(parseInt(process.argv[3]) )
    // console.log(typeof process.argv[3])
   // console.log(parseInt(process.argv[arg3]))

  // return(parseInt(process.argv[arg1]) +  parseInt(process.argv[arg2])  + parseInt(process.argv[arg3]));

//}


function doop(arg1,arg2,arg3){
  var arg1 = parseInt(process.argv[2]);
  var arg2 = process.argv[3];
  var arg3 = parseInt(process.argv[4]);
// var result=1;

  if(arg2 == '+'){
    result = arg1 + arg3;
    // return result;
  } else if (arg2 ==  '*' ){

    result = arg1 * arg3;
  }
  
  return result;
}
console.log(doop())