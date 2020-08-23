
//module.exports = {
    //getTimePassed:
     //   function (date1, date2) {

         //   var date1 = new Date("December 27, 1987 11:20:00");
         //   var date2 = new Date("December 30, 1987 11:40:00");
           // var timeDiff = date2.getTime() - date1.getTime();

          //  var minDiff = timeDiff / 60 / 1000;
            //var hDiff = timeDiff / 3600 / 1000;

           // var hours = Math.floor(hDiff);
          //  var minutes = minDiff - 60 * hours;

           // timeDiff /= 1000;

           // var jour = Math.floor(timeDiff / 86400)

            //var timeDiff = date2 - date1;


          //  console.log("Day passed  :" + jour + "  " + "minutes passed :" + minutes);
        //}


//};


// version 2 process argv 


module.exports = {
    getTimePassed:
        function (date1, date2) {

            var date1 = process.argv[2];
            var date2 = process.argv[3];
            var d1= new Date(date1);
            var d2 = new Date(date2);
            var timeDiff = d2.getTime() - d1.getTime();

            var minDiff = timeDiff / 60 / 1000;
            var hDiff = timeDiff / 3600 / 1000;

            var hours = Math.floor(hDiff);
            var minutes = minDiff - 60 * hours;

            timeDiff /= 1000;

            var jour = Math.floor(timeDiff / 86400)

            var timeDiff = d2 - d1;


            console.log("Day passed  :" + jour + "  " + "minutes passed :" + minutes);
        }


};

