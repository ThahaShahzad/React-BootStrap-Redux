export function timeSince(date) {
  let seconds = Math.floor((new Date() - date) / 1000)

  let interval = Math.floor(seconds / 31536000)

  if (interval > 1) {
    return interval + ' years'
  }
  interval = Math.floor(seconds / 2592000)
  if (interval > 1) {
    return interval + ' months'
  }
  interval = Math.floor(seconds / (86400 * 7))
  if (interval > 1) {
    return interval + ' weeks'
  }
  interval = Math.floor(seconds / 86400)
  if (interval > 1) {
    return interval + ' days'
  }
  interval = Math.floor(seconds / 3600)
  if (interval > 1) {
    return interval + ' hours'
  }
  interval = Math.floor(seconds / 60)
  if (interval > 1) {
    return interval + ' minutes'
  }
  return Math.floor(seconds) + ' seconds'
}

export function isEmpty(str) {
  return !str || 0 === str.length
}

function getFilename(dname) {
    return prompt("Only current page will be exported. Please enter File name:", dname);
}

export function fnExcelReport(table_id, file_name)
{
    let fname = getFilename(file_name + ".xls");
    if (fname==null) return;
    
    let tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
    let textRange; let j=0;
    let tab = document.getElementById(table_id); // id of table

    for(j = 0 ; j < tab.rows.length ; j++) 
    {     
        tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
        //tab_text=tab_text+"</tr>";
    }

    tab_text=tab_text+"</table>";
    tab_text= tab_text.replace(/<a[^>]*>|<\/a>/g, "");//remove if u want links in your table
    tab_text= tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table
    tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    let ua = window.navigator.userAgent;
    let msie = ua.indexOf("MSIE "); 

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
    {
        txtArea1.document.open("txt/html","replace");
        txtArea1.document.write(tab_text);
        txtArea1.document.close();
        txtArea1.focus(); 
        let sa=txtArea1.document.execCommand("SaveAs",true,"test.xls");
    }  
    else {                 //other browser not tested on IE 11
        let a = document.createElement('a');
        //getting data from our div that contains the HTML table
        let data_type = 'data:application/vnd.ms-excel';
        let url = URL.createObjectURL( new Blob( [tab_text], {type:'data:application/vnd.ms-excel'} ) );
        //a.href = data_type + ', ' + encodeURIComponent(tab_text);
        a.href = url;
        //setting the file name
        a.download = fname;
        //triggering the function
        a.click();
        //just in case, prevent default behaviour
        //e.preventDefault();       
        //let sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));  
    }   
    
    return (sa);
}

export function fnSavePDF(file_name, data)
{
    let fname = file_name;
    //let fname = getFilename(file_name + ".pdf");
    //if (fname==null) return;
    
        let a = document.createElement('a');
        let url = URL.createObjectURL( new Blob( [data], {type:'application/pdf'} ) );
        a.href = url;
        //setting the file name
        a.download = fname;
        //triggering the function
        a.click();
        //just in case, prevent default behaviour
        //e.preventDefault();       
        //let sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));  
    
    return ;
}
   
export function exportTableToCSV(table_id, filename) {

    let fname = getFilename(filename + ".xls");
    if (fname==null) return;
    let $table = document.getElementById(table_id); // id of table
    let $rows = $table.find('tr:has(td),tr:has(th)'),

        // Temporary delimiter characters unlikely to be typed by keyboard
        // This is to avoid accidentally splitting the actual contents
        tmpColDelim = String.fromCharCode(11), // vertical tab character
        tmpRowDelim = String.fromCharCode(0), // null character

        // actual delimiter characters for CSV format
        colDelim = '","',
        rowDelim = '"\r\n"',

        // Grab text from table into CSV formatted string
        csv = '"' + $rows.map(function (i, row) {
            let $row = $(row), $cols = $row.find('td,th');

            return $cols.map(function (j, col) {
                let $col = $(col), text = $col.text();

                return text.replace(/"/g, '""'); // escape double quotes

            }).get().join(tmpColDelim);

        }).get().join(tmpRowDelim)
            .split(tmpRowDelim).join(rowDelim)
            .split(tmpColDelim).join(colDelim) + '"',



        // Data URI
        csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);

        console.log(csv);

        if (window.navigator.msSaveBlob) { // IE 10+
            //alert('IE' + csv);
            window.navigator.msSaveOrOpenBlob(new Blob([csv], {type: "text/plain;charset=utf-8;"}), "csvname.csv")
        } 
        else {
            let url = URL.createObjectURL( new Blob( [csvData], {type:'text/plain'} ) );
            $(this).attr({ 'download': fname, 'href': csvData, 'target': '_blank' }); 
        }
}
