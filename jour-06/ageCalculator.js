//function ageCalculator(date){

//var date= new Date('January 31, 1989 11:20:00');

//return Math.abs(date.getUTCFullYear()-2020);


//}

//console.log(ageCalculator(Date));

// version 2  timestamp

function ageCalculator(date) {
    var d= new Date()
    
    var aaaa = String(d.getUTCFullYear());
    var timestamp = new Date('January 31, 1989 11:20:00');

    var timestamp = Math.abs(date = new Date(timestamp).getFullYear() -aaaa);
    console.log(timestamp)
}
ageCalculator()