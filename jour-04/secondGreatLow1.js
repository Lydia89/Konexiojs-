

var arr = process.argv[2];
function secondGreatLow(arr) {

  arr.sort(function (a, b) {

    return a - b;
  });
  console.log(arr);

  first = arr[1];

  second = arr[arr.length - 2]
  console.log(first + ' ' + second);

}

console.log(secondGreatLow());