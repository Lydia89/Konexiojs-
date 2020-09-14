
var num = 3;
var power = 3;

function powerFuncRec(a, b) {
    var res = 1;

    for (var i = 1; i <= b; i++) {
        //var res = a ** b ;


        res *= a;
        console.log(res);

    }
    
    return res;
}

powerFuncRec(num,power);