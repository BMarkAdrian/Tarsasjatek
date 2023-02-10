var div = document.getElementById("eredmeny");



var table = document.createElement("table");

for(var i =0;i< 5;i++){
   var tr = document.createElement("tr");
    for(var j = 0;j < 6;j++){
        var td = document.createElement("td");
        var img = document.createElement("img");
        var a = Math.floor(Math.random()*23)+1;
        switch(a){
            case 1: img.src= "kep/23.png" ;break;
            case 2: img.src= "kep/1.png" ;break;
            case 3: img.src= "kep/2.png" ;break;
            case 4: img.src= "kep/3.png" ;break;
            case 5: img.src= "kep/4.png" ;break;
            case 6: img.src= "kep/5.png" ;break;
            case 7: img.src= "kep/6.png" ;break;
            case 8: img.src= "kep/7.png" ;break;
            case 9: img.src= "kep/8.png" ;break;
            case 10: img.src= "kep/9.png" ;break;
            case 11: img.src= "kep/10.png" ;break;
            case 12: img.src= "kep/11.png" ;break;
            case 13: img.src= "kep/12.png" ;break;
            case 14: img.src= "kep/13.png" ;break;
            case 15: img.src= "kep/14.png" ;break;
            case 16: img.src= "kep/15.png" ;break;
            case 17: img.src= "kep/16.png" ;break;
            case 18: img.src= "kep/17.png" ;break;
            case 19: img.src= "kep/18.png" ;break;
            case 20: img.src= "kep/19.png" ;break;
            case 21: img.src= "kep/20.png" ;break;
            case 22: img.src= "kep/21.png" ;break;
            case 23: img.src= "kep/22.png" ;break;
            
        }
        img.style.width=("200px");
        img.style.height=("200px");
        img.title = "kep"
        img.alt = "kep"
        td.appendChild(img);
        tr.appendChild(td);
    }
    
    table.appendChild(tr);
}
div.appendChild(table);