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
}

function Elrendezes(){
    BalOldal.id = "baloldal";
    kartyaBox.id= "kartyabox";
    tabla.id= "tabla";
    pontBox.id= "pontbox";
    korokBox.id= "korokbox";
}

function velszam(also, felso)
{
    return Math.floor(Math.random()*(felso-also+1) + also);
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

function CoinGeneralas(){
    for (let index = 1; index <= 4; index++) {
        let div = document.createElement("div");
        for (let i = 1; i <= 3; i++) {
           
            var img = document.createElement("img");
            img.src = "img/forint"+(index)+".png";
            img.style.height = 4+"vw";
            img.style.width = 4+"vw";
            pontBox.appendChild(div);
            div.appendChild(img);
            
            
        }
        
    }
    
}

function Main()
{
    EredmenyBetoltes();
    Elrendezes();
    Tablageneralas();
    KartyakatTablabaGeneral(23);
    CoinGeneralas();
}    
Main();
