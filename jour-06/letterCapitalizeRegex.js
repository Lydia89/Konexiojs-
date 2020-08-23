function letterCapitalizeRegex(str){


    //var str = "An apple was eaten";

    var str = "Hey tget these words please";
    var wor = str.match(/\b[a-z]+/gi); 

console.log(wor);
}
//console.log(letterCapitalizeRegex());
letterCapitalizeRegex()