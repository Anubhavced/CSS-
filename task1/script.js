/*

let h1 = document.createElement('h1');

document.getElementById('body').appendChild(h1);

h1.innerHTML = "Order Details";

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

// Adding the entire table to the body tag
document.getElementById('body').appendChild(table);

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Sr. No.";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Name";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Company";
row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);*/
const am = "$";
var fName = "Gaurav"
var lName = "Mandhyan"
var Name = "Gaurav" + " " +  "Mandhyan";
var letter = Name.length;
var SubTotal =  letter*5
const shipping = 7 ;
var grandtotal = SubTotal + shipping ;


document.write("<h1>Order Details</h1>");

document.write("<h3>Hello " + fName + " Please Check Your Order:<hr></h3>");

document.write(`<table><tr><th>Name:</th><td>
${Name}</td></tr><tr><th>Total Letters:</th><td>${letter}</td></tr><tr><th>Sub Total:</th><td>
${am + SubTotal}</td></tr><tr><th>Shipping:</th><td>${am + shipping}</td></tr><tr><th>Grand Total:</th><td>
${am + grandtotal}</td></tr></table>`);


document.write("<br><div><a href='#'>Pay Now</a></div>");