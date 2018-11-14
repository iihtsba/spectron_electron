let $ = require("jquery");

let cnt = 0;

console.log("Current val :"+cnt);

//display current cnt
$('#abc').text(cnt.toString());

//increment cnt when button is clicked
$('#cbtn').on('click', function (){ 
    cnt++; console.log(cnt);
    $('#abc').text(cnt.toString());
});