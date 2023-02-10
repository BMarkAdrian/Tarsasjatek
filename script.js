

var tabla = document.createElement("div");
var kartyaBox = document.createElement("div");
var BalOldal = document.createElement("div");
var pontBox = document.createElement("div");
var korokBox = document.createElement("div");
var eredmeny = document.getElementById("eredmeny");


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
    for (var i = 0; i < 5; i++) 
    {
        var sorDiv = document.createElement("div");
        sorDiv.classList += "sordiv"
        for(var j = 0; j < 6;j++){
            var oszlopDiv = document.createElement("div");
            oszlopDiv.innerHTML="X"
            oszlopDiv.classList += "oszlopdiv"
            sorDiv.appendChild(oszlopDiv);
        }
        tabla.appendChild(sorDiv);
    }

}


    function Main()
    {
        EredmenyBetoltes();
        Elrendezes();
        Tablageneralas();
    }    

    Main();
    
