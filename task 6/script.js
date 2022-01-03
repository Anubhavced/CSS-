
//  document.getElementsByTagName("li").setAttribute("class", "food");

document.write(`<div><button onclick="addItem()">Click to add</button>`);
document.write(`<button onclick="removeItem()">Click to remove</button></div>`);


 for(i= 0 ; i< document.getElementsByTagName("li").length ; i++)
 {  
    document.getElementsByTagName("li")[i].setAttribute("class", "food")
     ;
 }




var executed = false ;
function addItem() {

if (!executed){
    executed = true ;
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Air Freshner");
    node.appendChild(textnode)
    document.getElementById("list").appendChild(node).setAttribute("class", "food");


}
 
  }


  function removeItem() {
    var list = document.getElementById("list");
    var child = list.lastElementChild;
    // console.log(child);
    if( child != null){
      list.removeChild(child);
    }   

  }
