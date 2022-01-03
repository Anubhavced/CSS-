// let a = $('input[name=text]').onkeydown(function(){
//     document.write(`yes`);
// });
document.getElementById("text").oninput =  changeValue;

// function myFunction() {
//   document.getElementById("user").style.color = "#ff0000";
// }
function changeValue() {
    var text = document.getElementById("text");
    var s = text.value;
    var User = document.getElementById("user");
    User.innerText = "" + s;
    if( s.length == ''){
        document.getElementById("user").innerHTML = "User";
    }
}
