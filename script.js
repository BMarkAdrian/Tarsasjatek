var kartyaAdatok = [
    {id:1,value:3,sign:''},
    {id:2,value:4,sign:''},
    {id:3,value:5,sign:''},
    {id:4,value:2,sign:''},
    {id:5,value:-3,sign:''},
    {id:6,value:2,sign:'pap'},
    {id:7,value:0,sign:'taliga'},
    {id:8,value:6,sign:''},
    {id:9,value:-6,sign:''},
    {id:10,value:0,sign:'pap'},
    {id:11,value:5,sign:''},
    {id:12,value:0,sign:'sarkany'},
    {id:13,value:4,sign:''},
    {id:14,value:-5,sign:''},
    {id:15,value:0,sign:'hegy'},
    {id:16,value:-2,sign:''},
    {id:17,value:-1,sign:''},
    {id:18,value:1,sign:''},
    {id:19,value:-4,sign:''},
    {id:20,value:6,sign:''},
    {id:21,value:0,sign:'hegy'},
    {id:22,value:3,sign:''},
    {id:23,value:1,sign:''}
]

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

var eredmeny = document.getElementById("eredmeny");
var tabla = document.createElement("div");
var kartyaBox = document.createElement("div");
var BalOldal = document.createElement("div");
var pontBox = document.createElement("div");
var korokBox = document.createElement("div");


function EredmenyBetoltes(){
    BalOldal.appendChild(kartyaBox);
    BalOldal.appendChild(pontBox);
    eredmeny.appendChild(BalOldal);
    eredmeny.appendChild(tabla);
    eredmeny.appendChild(korokBox);

    
    kartyaBox.innerHTML = "kartya box";
    pontBox.innerHTML = "pont box";
    korokBox.innerHTML = "korok box";
}

function Elrendezes(){
    BalOldal.id = "baloldal";
    kartyaBox.id= "kartyabox";
    tabla.id= "tabla";
    pontBox.id= "pontbox";
    korokBox.id= "korokbox";

}

function Tablageneralas()
{
    var k = 0;
    for (var i = 0; i < 5; i++) 
    {
        var sorDiv = document.createElement("div");
        sorDiv.classList += "sordiv"
        for(var j = 0; j < 6;j++){
            var oszlopDiv = document.createElement("div");
            oszlopDiv.classList += "oszlopdiv"
            oszlopDiv.id = k;
            k++;
            sorDiv.appendChild(oszlopDiv);
        }
        tabla.appendChild(sorDiv);
    }
}

function Tombfeltoltes(tomb, db, n)
{
    while (tomb.length < db)
    {
        var a = Math.floor(Math.random() * n) + 1;
        if (tomb.indexOf(a) === -1) {
            tomb.push(a);
        }
    }
}

function ToronyFeltolt(tomb,tomb2, db, n)
{
    elltomb = [];
    while (tomb.length < db)
    {
        var a = Math.floor(Math.random() * n) + 1;
        var b = Math.floor(Math.random() * n) + 1;
        if (elltomb.indexOf(String(a)+String(b)) === -1) {
            elltomb.push(String(a)+String(b));
            tomb.push(a);
            tomb2.push(b);
        }
        
    }
    console.log(elltomb);
}

function KartyakatTablabaGeneral(db)
{
    //Egy kártyát kiválaszt és elhelyez az első mezőben
    //A kártya elhelyezése egy véletlen helyre
    //db képet helyezzen el véletlen helyre
    //nem ismétlődhet a kép ls a hely sem
    var tomb = [];
    Tombfeltoltes(tomb, db, 23);
    var tomb2 = [];
    Tombfeltoltes(tomb2, 30, 30);
    for (var i = 0; i < db; i++)
    {  
        var img = document.createElement("img");
        img.src = "img/"+(tomb[i])+".png";
        var hely = document.getElementById(tomb2[i]-1);
        hely.appendChild(img)
    }
    var ttomb =[];
    var ttomb2 =[];
    ToronyFeltolt(ttomb, ttomb2, 7, 4);
    console.log(ttomb);
    console.log(ttomb2);
    for (var i = 0; i < ttomb.length; i++)
    {  
        var img = document.createElement("img");
        if (ttomb[i] == 1)
        {
            img.src = "img/kekvar"+(ttomb2[i])+".png";
        }
        else if (ttomb[i] == 2)
        {
            img.src = "img/pirosvar"+(ttomb2[i])+".png";
        }
        else if (ttomb[i] == 3)
        {
            img.src = "img/zoldvar"+(ttomb2[i])+".png";
        }
        else if (ttomb[i] == 4)
        {
            img.src = "img/sargavar"+(ttomb2[i])+".png";
        }
        var hely = document.getElementById(tomb2[i+23]-1);
        hely.appendChild(img)
    }
}

function Main()
{
    EredmenyBetoltes();
    Elrendezes();
    Tablageneralas();
    KartyakatTablabaGeneral(23);
}    
Main();