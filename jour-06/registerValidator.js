
function pass() {
    var num = 6;
    var max = 90;
    var min = 65;
    var max1 = 122;
    var min1 = 97;
    var maxcar = 46;
    var mincar = 44;
    var password = "";
    var index = Math.floor((max - min) + min)
    var index1 = Math.floor((max1 - min1) + min1)
    var indexcar = Math.floor((maxcar - mincar) + mincar)

    var index3 = index, index1, indexcar;
    console.log(index3)
    //for (var i = 0; i <= num; i++) {

        if (index && index1 && indexcar) {

            password =
                 password + String.fromCharCode(index3);
            //console.log("ok")


        }
        if ((index3 !== index) && (index3 !== index1) && (index3 !== indexcar)) {
            //console.log("error")
        }
    //}
    
}

pass()


//var array= ['1','2','3']
//array.push('4');

//console.log(array[0])
//console.log(array[1])
//console.log(array[2])
///console.log(array[3])
