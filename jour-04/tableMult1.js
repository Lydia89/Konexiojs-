// tableMult avec une function et process.argv Bonus1

function tableMult(num) {


  var num = process.argv[2];

  for (var i = 1; i <= 10; i++) {

    result = num * i;


    console.log(num + " * " + i + " = " + result);
  }
}
tableMult();

