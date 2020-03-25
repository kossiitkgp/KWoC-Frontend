function sortTable(n) {
    // method === 1 means ascending, -1 means descending for Alphanumerical fields (Name, Username)
    // method === -1 means ascending, 1 means descending for numerical fields (PRs, Commits, Lines Added)

    // Checking if table already sorted; if table sorted in ascending, then we will sort in descending and vice-versa
    let table, method = 1, to_change_method=true;
    table = document.getElementById("statTable");
    let rows_temp = table.rows;
    for(let i=1;i < (rows_temp.length - 1); i++){
        let elementx = rows_temp[i].getElementsByTagName("TD")[n].innerHTML;
        let elementy = rows_temp[i+1].getElementsByTagName("TD")[n].innerHTML;
        let element1, element2;
        if (n<=1){
            element1 = elementx.toLowerCase();
            element2 = elementy.toLowerCase();
        }
        else {
            element1 = parseInt(elementx);
            element2 = parseInt(elementy);
        }
        if (element2 < element1){
            to_change_method = false;
            break;
        }
    }
    if (to_change_method){
        method = -1;
    }
    console.log(method);

    // sorting table elements and then putting them in using jQuery
    let rows = $('#statTable tbody tr').get();
    rows.sort((a, b) => {
        let element1 = $(a).children('td').eq(n).text();
        let element2 = $(b).children('td').eq(n).text();

        if (n<=1){
            if (element1.toLowerCase() < element2.toLowerCase()){
                return -1*method;
            }
            else if (element1.toLowerCase() >= element2.toLowerCase()){
                return method;
            }
            else {
                return 0;
            }
        }
        else {
            if (parseInt(element1) < parseInt(element2)){
                return method;
            }
            else if (parseInt(element1) >= parseInt(element2)){
                return -1*method;
            }
            else {
                return 0;
            }
        }
    });

    $.each(rows, function(index, row) {
        $('#statTable').children('tbody').append(row);
    });
}
sortTable(0);