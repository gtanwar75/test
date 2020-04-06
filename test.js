var datainof = [];
var OBJD = {};
//datainof.push(OBJD);
function onFormSubmit(){
    var formData =readFormData();
    insertNewRecord(formData);
    
}
function myFunction(rownum) {
    //alert();
    //var numco = parseInt(rownum);
   // row=td.parentElement.parentElement;
    document.getElementById("contactDiary").deleteRow(rownum);
}

function readFormData(){
    var formData={};
    formData["Name"]= document.getElementById("Name").value;
    formData["Mobile"]= document.getElementById("Mobile").value;
    return formData;
}
function insertNewRecord(data){
    var table= document.getElementById("contactDiary").getElementsByTagName('tbody')[0];
    //debugger;
    var rownum = datainof.length+1;
    //alert(rownum);
    var newRow =table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.Name;
    cell1=newRow.insertCell(1);
    cell1.innerHTML=data.Mobile;
    cell1=newRow.insertCell(2);
     cell1.innerHTML='<button type="button" onclick="myFunction(\''+rownum+'\')">remove</button>'
}
