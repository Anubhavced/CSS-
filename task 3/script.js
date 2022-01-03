
let friends = [
    
    new frndList("Ajay",25 ,true, ["Blue","BlueViolet","Yellow"],) ,
    new frndList("Utkarsh",26 ,true, ["Cornsilk","DarkBlue","DarkCyan"]) ,
    new frndList("Yash",27 ,false, ["DarkOrange","DarkOrchid","DarkSeaGreen","Yellow"]) ,
    new frndList("Rishabh",24 ,true, ["FireBrick","FloralWhite","ForestGreen","Fuchsia"]) ,
    new frndList("Yash Pratap",37 ,true, ["Yellow","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow"]) ,
new frndList("Yash Pratap",37 ,true,["Yellow","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray"]) ,

];
function frndList(Name,Age,isBestFriend,favouriteColor) {
this.Name = Name;
this.Age = Age;
this.isBestFriend = isBestFriend;
this.favouriteColor = favouriteColor;
console.log(this.Name);
this.yellowFavourite =  function() {
    var color = this.favouriteColor.includes("Yellow");
    console.log(color);
         if(color == true){
            return "Yellow is Favourite Color";
         }
         else{
             return "Yellow is not Favourite color";
         }
     } 
}  
//let arr = [];
var length = (arr = Object.keys(friends)).length ;
// document.write(length);
var max = 0;
for( i = 0 ; i< length ;i++){
   
    var len = friends[i].favouriteColor.length ;

    if(len > max){
        max = len;
    }
    
}
document.write(`<h1>Table contains friends data</h1>`);

// document.write(`<h1>${friends[0].favouriteColor.length}</h1>`);

document.write(`<table><tr><th>S.No.</th><th>Name</th><th>Age</th><th>BestFriend</th>
`);

for(i = 1  ; i <= max ; i++){
    document.write(`<th>favoriteColor${i} </th>`)
}

document.write(`<th>YellowFavourite</th></tr>`);
var i = 1 ;
var z = 0 ;

for (i= 0 ; i < length ; i++){


document.write(`<tr>
<td>${i + 1}</td>
<td>${friends[i].Name}</td>
<td>${friends[i].Age}</td>
<td>${friends[i].isBestFriend}</td>
`);
for (t = 0 ; t < max ; t++) {

    if( friends[i].favouriteColor[t] == null ){
        document.write(`<td>    </td>`);
    }else{
    document.write(`<td> ${friends[i].favouriteColor[t]}</td>`);
}
}

document.write(`<td>${friends[i].yellowFavourite()}</td>`);

}
document.write(`</tr></table>`)
