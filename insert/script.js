document.write(`<button onclick="before()">Insert Before</button>`)




var executed = false ;
function before() {

    if (!executed){
        executed = true ;




        var node = document.createElement("li");
        var textnode = document.createTextNode("Air Freshner");
        node.appendChild(textnode);
        // var txt = document.getElementById("list").appendChild(node);
        var list = document.getElementById("list")
        list.insertBefore(node, list.querySelectorAll("li")[5]);
    //     var list = document.getElementById("list");
    // var node = document.createElement("LI");
    // var textnode = document.createTextNode("Text");
    
    

    // list.insertBefore(node ,list.childNodes[6] );
    // var tex = node.appendChild(textnode);
    // list.insertBefore(tex, list.childNodes[6]);
    }
  }