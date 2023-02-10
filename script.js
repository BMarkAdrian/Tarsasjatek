var objektum = {
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
console.log(objektum.Szomszedok[0]);

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

function KartyakatTablabaGeneral(db)
{
    //Egy kártyát kiválaszt és elhelyez az első mezőben
    //A kártya elhelyezése egy véletlen helyre
    //db képet helyezzen el véletlen helyre
    //nem ismétlődhet a kép ls a hely sem
    for (var i = 0; i < db; i++)
    {
        var a = Math.floor(Math.random()*23)+1;
        var img = document.createElement("img");
        img.src = "img/"+a+".png";
        var velhelyszam = Math.floor(Math.random()*29)+1;
        var hely = document.getElementById(velhelyszam);
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
