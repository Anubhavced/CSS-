const am = "Rs. ";
var hotel = {};
hotel.name = "Taj" ;
hotel.rent = 240;
hotel.rate = 15;
hotel.discounted_rate  = function() {
    return (this.rent -(this.rent * this.rate / 100) )
  }
;
let numWeeks = 1;

const dayNames = [  "Sunday" ,"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"

];

let now = new Date();
now.setDate(now.getUTCDate() + numWeeks * 7);
let date = now.getDate();
let day = dayNames[now.getDay()];
/*let month = monthNames[now.getMonth()];*/
let year = now.getFullYear() ;
var MONTH = now.toLocaleString('default', { month: 'long' });

/*document.write(MONTH);*/


today =  `<p>Offer expires Next ${day}  <br>( ${date}  ${MONTH}  ${year} )`;




document.write(`<div id="card">
<h1 class="main">${hotel.name}</h1>
<div class="top">
<h1>Room Rate:</h1><h2> ${am + hotel.rent.toFixed(2)}</h2>
</div>

<div class="center">
<h1>Discounted Rate:</h1><h2> ${ am + hotel.discounted_rate()}</h2>
</div>
<div class="bottom">
<h2> ${ today}</h2>
</div>


</div>`);
/*
let numWeeks = 3;
var today = new Date();
var dd = (today.getDate());
var mm = String(today.getMonth());
var yyyy = today.getFullYear();
var ddn = dd + numWeeks *7;

today =  `<p>Offer expires Next Week <br>${mm}/${ddn}/${yyyy}`;


document.write(today);*/


