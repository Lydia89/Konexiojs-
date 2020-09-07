function formatDate(date) {


    var d = new Date('2018-01-07')
    var aaaa = String(d.getUTCFullYear());

    var jj = String(d.getDate());

    var mm = String(d.getMonth() + 1);

    if (mm.length == 1) {
        mm = "0" + mm;
    }
    if (jj.length == 1) {
        jj = "0" + jj;
    }


    console.log(jj + " /" + mm + "/" + aaaa)

}



formatDate();