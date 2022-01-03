

var products = [

    {
      "id": 0,
        "category": "Shirt",
        "image": "../one.jpeg",
        "Rate": 500,
        "quantity":0,
        "inCart": false,
    },
    {
      "id": 1,
        "category": "T-Shirt",
        "image": "../two.jpeg",
        "Rate": 300,
        "quantity":0,
        "inCart": false,
    },
    {
      "id": 2,
        "category": "Trousers",
        "image": "../three.jpg",
        "Rate": 1000,
        "quantity":0,
        "inCart": false,
    },
    {
      "id": 3,
        "category": "Blazer",
        "image": "../four.jpg",
        "Rate": 2000,
        "quantity":0,
        "inCart": false,
    },
    {
      "id": 4,
        "category": "Phone",
        "image": "../five.jpg",
        "Rate": 12000,
        "quantity":0,
        "inCart": false,
    },
    {
      "id": 5,
        "category": "Tie",
        "image": "../six.jpg",
        "Rate": 150,
        "quantity":0,
        "inCart": false,
    }

]
var count = 0 ;
function addTableInView() {
  var cartItems = products.filter((product) => product.inCart);
  // console.log(product);

  var cart = document.getElementById("cart");
 
  

  if (cartItems.length > 0) {
    var table = document.createElement('table');
    table.id = 'myTable';

    for (var [index, item] of cartItems.entries()) {


      var row = table.insertRow(index);
      var rowid = row.setAttribute("class", index);
      // console.log(cartItems.length);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var priceid = cell3.setAttribute("class", "price");
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var url = item.image;
      var img = `<img src= "${url}" >`
      var del = `<button><i class="fas fa-trash-alt" id ="bu${item.id}" onclick="myDelete(${item.id})"></i></button>`;
      cell5.innerHTML = del;
      var button = `<input type="number" id="qu${item.id}" name="quantity" min="1" class="quantity" onchange="onInputChange(${item.id})" value="${item.quantity}">`;
      cell1.innerHTML = item.category;
      cell2.innerHTML = img;
      cell3.innerHTML = item.Rate;
      cell4.innerHTML = button;
      document.getElementById("left").innerHTML = `<button onclick="purchase()" >Purchase</button>`;
      
    }
    cart.innerHTML = '';
    // console.log(table);
    cart.appendChild(table);
  
      document.getElementById("tablehead").innerHTML = `<h5>Category</h5><h5>Image</h5><h5>Price</h5><h5>Quantity</h5>`;

 
  } else {
    cart.innerHTML = '';
    left.innerHTML = '';
    tablehead.innerHTML = '';
  }
}

var carts = [];
// console.log(carts.length);

document.write(`<div class="container" id="main">`);
document.write(`<h1>Our Products</h1>`);
for( i = 0 ;i< products.length ;i++){

    document.write(`<div id="div${i}"><h2>${products[i].category}</h2>`);
    document.write(`<img src="${products[i].image}">`);
    document.write(`<div id="inner"><h2>${products[i].Rate}</h2>`);
    document.write(`<button id="${i}" onclick = "changeValue(this.id)">Add to Cart</button></div></div>`);

}
document.write(`</div>`);
document.write(`<div id="tablehead">`);
document.write(`</div>`);
    document.write(`<div id="cartpage">`);
    document.write(`<div id="left">`);
        document.write(`</div>`);
        document.write(`<div id="cart">`);
        document.write(`</div>`);
        document.write(`<div id="right">`);
        document.write(`</div">`);
    document.write(`</div">`);


    function myDelete(id) {
      var product = products.find((product) => product.id === +id);
     
        product.quantity = 0;
        if (product.quantity == 0) {
          product.inCart = false;
        }
      

      addTableInView();
      calculatePrice();
    }

    function changeValue(id) {
      var product = products.find((product) => product.id === +id);
      
        product.inCart = true;
        product.quantity += 1;
      
      addTableInView();
      calculatePrice();
    }

    function onInputChange(id) {
      var element = document.getElementById(`qu${id}`);
      var product = products.find((product) => product.id === +id);

        product.inCart = true;
        product.quantity = +element.value;
        if (product.quantity <= 0) {
          product.inCart = false;
        }
      
      addTableInView();
      calculatePrice();
    }

    function calculatePrice() {
      var cartItems = products.filter((product) => product.inCart);
      let totalSum = cartItems.reduce((acc, as) => {
        // console.log(acc);
        // console.log(as);
        return acc + (as.quantity * as.Rate)
      }, 0)
      appendCartPrice(totalSum)
    }

    function appendCartPrice(price) {
      var cart = document.getElementById("right");
      if (price > 0) {
        cart.innerHTML = "<h1> Your Cart Total amount is -</h1><br>" + price;
      } else {
        cart.innerHTML = '';
      }
    }

    function purchase(){
     
      alert("Thank You For Shopping");
      var cart = document.getElementById("cart");
      var left = document.getElementById("left");
      var right = document.getElementById("right");
      var tablehead = document.getElementById("tablehead");
      var row = "";
      cart.innerHTML = '';
      left.innerHTML = '';
      right.innerHTML = '';
      tablehead.innerHTML = '';
      var cartItems = products.filter((product) => product.inCart);
      // console.log(cartItems);
      // console.log(cartItems.length);
      // cartItems = [];
     
      for( i = 0 ; i <cartItems.length; i++){
        console.log(cartItems[i].quantity);
        cartItems[i].quantity = 0
        // cartItems.remove(cartItems[i]);
        if (cartItems[i].quantity == 0) {
          cartItems[i].inCart = false;
          // cartItems[i].remove
        }
      }

      calculatePrice(); 

      // cartItems.splice(0);
      // carts.splice(0 ,carts.length);
    //   var carts1 =[];
    // var carts = carts1;
    // removeTable();
    
      
    
    }
  

   

