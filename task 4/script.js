
// products["Electronics"][i]
// if(j["brand"]=="samsung")
// {

// }

var products = {
    "Electronics": {
    "Television" : [
    {
    "id" : "PR001",
    "name" : "MAX-001",
    "brand" : "Samsung"
    },
    {
    "id" : "PR002", 
    "name" : "BIG-301",
    "brand" : "Bravia"
    },
    {
    "id" : "PR003", 
    "name" : "APL-02",
    "brand" : "Apple"
    }
    ],
    "Mobile" : [
    {
    "id" : "PR004", 
    "name" : "GT-1980",
    "brand" : "Samsung"
    },
    {
    "id" : "PR005", 
    "name" : "IG-5467",
    "brand" : "Motorola"
    },
    {
    "id" : "PR006", 
    "name" : "IP-8930",
    "brand" : "Apple"
    }
    ]
    },
    "Jewelry" : {
    "Earrings" : [
    {
    "id" : "PR007", 
    "name" : "ER-001",
    "brand" : "Chopard"
    },
    {
    "id" : "PR008", 
    "name" : "ER-002",
    "brand" : "Mikimoto"
    },
    {
    "id" : "PR009", 
    "name" : "ER-003",
    "brand" : "Bvlgari"
    }
    ],
    "Necklaces" : [
    {
    "id" : "PR010", 
    "name" : "NK-001",
    "brand" : "Piaget"
    },
    {
    "id" : "PR011", 
    "name" : "NK-002",
    "brand" : "Graff"
    },
    {
    "id" : "PR012", 
    "name" : "NK-003",
    "brand" : "Tiffany"
    }
    ]
    }
    }

function one () {


    document.write(`<h1>List all products in this table format<hr></h1>`);

    document.write(`<table><tr><th>Category</th>
    <th>Subcategory</th>
    <th>ID</th>
    <th>Name</th>
    <th>Brand</th>
    </tr>`);
// var key = Object.keys(products);
// document.write(`${key[0]}`);

    for (var i in  products){ 
        for (var j in products[i]){        
         for (var k in  products[i][j]){
            document.write(`<tr><td>${i}</td>`);
            document.write(`<td>${j}</td>`);
            for (var l in products[i][j][k]){
                document.write(`<td>${products[i][j][k][l]}</td>`);
                            }
                            document.write(`</tr>`);           
            }  
        }
   
    }
 
    document.write(`</table>`); 

}
function two(){

    document.write(`<h1>List all products in Mobile subcategory in same format as Above<hr></h1>`);

    document.write(`<table><tr><th>Category</th>
    <th>Subcategory</th>
    <th>ID</th>
    <th>Name</th>
    <th>Brand</th>
    </tr>`);

    for (var i in  products){ 
        for (var j in products[i]){        
         for (var k in  products[i][j]){
            
            if (j == "Mobile")
            {
                document.write(`<tr><td>${i}</td>`);
                document.write(`<td>${j}</td>`);
            for (var l in products[i][j][k]){
                document.write(`<td>${products[i][j][k][l]}</td>`);
                            }
                            document.write(`</tr>`);  
                        }    
                         
            }  
        }
   
    }
 
    document.write(`</table><br><br>`); 

}
function three(){

    
    document.write(`<h1> List all products with their id, name, subcategory and category with brand name = "Samsung"<hr></h1>`);
    document.write(`<div class="container">`); 

    for (var i in  products){ 
        for (var j in products[i]){        
            for (var k in  products[i][j]){
           
                for (var l in products[i][j][k]){
               
                    if (products[i][j][k][l] == "Samsung"){
                        document.write(`<div>`);
                        document.write(`Product Id.:${products[i][j][0]["id"]}<br>`);
                        document.write(`Product Id.:${products[i][j][0]["name"]}<br>`);
                        document.write(`Subcategory :${j}<br>`);
                        document.write(`Category:${i}<br>`);
                        document.write(`</div>`);
                    }
                     
                }  
                    
            }  
        } 
    }
     
    document.write(`</div>`);  
    document.write(`<br><br>`); 
    
}
function four(){
    document.write(`<h1>Delete product with id = PR003.<hr></h1>`);
document.write(`<table><tr><th>Category</th>
<th>Subcategory</th>
<th>ID</th>
<th>Name</th>
<th>Brand</th>
</tr>`);

for (var i in  products){ 
    for (var j in products[i]){        
     for (var k in  products[i][j]){

        if(products[i][j][k]["id"] == "PR003"){
            // document.write(`<h1>yes</h1>`);
            delete products[i][j][k];
            break;
        }
        else{
            document.write(`<tr><td>${i}</td>`);
            document.write(`<td>${j}</td>`);
        }
    
        for (var l in products[i][j][k]){

                    
                    document.write(`<td>${products[i][j][k][l]}</td>`);
                
            }
            
            document.write(`</tr>`);  
                        }
                        
                    }    
                     
        }  
    
        document.write(`</table><br><br>`); 

}

one();
two();
three();
four();

function five(){

    document.write(`<h1> Update product name = "BIG-555" with id = PR002.<hr></h1>`)





document.write(`<table><tr><th>Category</th>
<th>Subcategory</th>
<th>ID</th>
<th>Name</th>
<th>Brand</th>
</tr>`);

for (var i in  products){ 
    for (var j in products[i]){        
     for (var k in  products[i][j]){
        document.write(`<tr><td>${i}</td>`);
//console.log(`${i}`);
        document.write(`<td>${j}</td>`);
        for (var l in products[i][j][k]){     
                if(products[i][j][k]["id"] == "PR002"){
                    products[i][j][k].name = "BIG-555";
                    document.write(`<td>${products[i][j][k][l]}</td>`);
                }else{
                    document.write(`<td>${products[i][j][k][l]}</td>`);
                }
            }
            
            document.write(`</tr>`);  
                        }
                        
                    }    
                     
        }  
        document.write(`</table><br><br>`); 
}

five();



//   products[]
    // document.write(`<tr><td>${i}</td>`);
    // document.write(`<td>${j}</td>`);
    // document.write(`<td>${products[i][j][k][l]}</td>`);
   
  
