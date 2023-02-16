var div = document.getElementById("eredmeny");



var table = document.createElement("table");

for(var i =0;i< 5;i++){
   var tr = document.createElement("tr");
    for(var j = 0;j < 6;j++){
        var td = document.createElement("td");
        var img = document.createElement("img");
        var a = Math.floor(Math.random()*23)+1;
        switch(a){
            case 1: img.src= "img/23.png"; break;
            case 2: img.src= "img/1.png"; break;
            case 3: img.src= "img/2.png"; break;
            case 4: img.src= "img/3.png"; break;
            case 5: img.src= "img/4.png"; break;
            case 6: img.src= "img/5.png"; break;
            case 7: img.src= "img/6.png"; break;
            case 8: img.src= "img/7.png"; break;
            case 9: img.src= "img/8.png"; break;
            case 10: img.src= "img/9.png"; break;
            case 11: img.src= "img/10.png"; break;
            case 12: img.src= "img/11.png"; break;
            case 13: img.src= "img/12.png"; break;
            case 14: img.src= "img/13.png"; break;
            case 15: img.src= "img/14.png"; break;
            case 16: img.src= "img/15.png"; break;
            case 17: img.src= "img/16.png"; break;
            case 18: img.src= "img/17.png"; break;
            case 19: img.src= "img/18.png"; break;
            case 20: img.src= "img/19.png"; break;
            case 21: img.src= "img/20.png"; break;
            case 22: img.src= "img/21.png"; break;
            case 23: img.src= "img/22.png"; break;
            
        }
        img.style.width=("200px");
        img.style.height=("200px");
        img.title = "img"
        img.alt = "img"
        td.appendChild(img);
        tr.appendChild(td);
    }
    
    table.appendChild(tr);
}
div.appendChild(table);


let Ujtop = velszam(666, pontBox.offsetHeight+55);
            let Ujleft = velszam(26, pontBox.offsetWidth-50);
            console.log(pontBox.offsetHeight);
            console.log(pontBox.offsetWidth);
            div.style.top = Ujtop/20 + "vw";
            div.style.left = Ujleft/20 + "vw";


/*var objektum = {
    szam1: 34,
    szam2: 23,
    id: 0,
    ertek: "Zöldvár4",
    Torol: Torol(),
    Szomszedok: [234,535,5235,45]
}

function Torol()
{
    console.log("töröl");
}

console.log(objektum.szam1);
console.log(objektum.Szomszedok[0]);*/