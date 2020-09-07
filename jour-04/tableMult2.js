function tableMult(num) {
    var num = process.argv[2];

    if (num == null) {
        console.log('error')

    } else {

        for (var i = 1; i <= 10; i++) {

            result = num * i;


            console.log(num + " * " + i + " = " + result);
        }


    }
    return num
}
tableMult();

