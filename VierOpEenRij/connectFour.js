function tableCreate(){
    var body = document.body,
        tbl  = document.createElement('table');
    tbl.style.border = '1px solid black';

    for(var i = 0; i < 6; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < 7; j++){
            var td = tr.insertCell();
            td.style.border = '1px solid black';
            td.style.width = '40px';
            td.style.height = '40px';
            td.id = [i + 1,j + 1]
        }
    }
    body.appendChild(tbl);
}
tableCreate();