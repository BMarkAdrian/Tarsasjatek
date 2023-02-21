var kartyaAdatok=[
    {id:1,value:3,sign:''},
    {id:2,value:4,sign:''},
    {id:3,value:5,sign:''},
    {id:4,value:2,sign:''},
    {id:5,value:-3,sign:''},
    {id:6,value:2,sign:''},
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
    {id:23,value:1,sign:''},

]

var varAdatok = [
    {id:1,value:1,color:'kek'},
    {id:2,value:2,color:'kek'},
    {id:3,value:3,color:'kek'},
    {id:4,value:4,color:'kek'},
    {id:5,value:1,color:'piros'},
    {id:6,value:2,color:'piros'},
    {id:7,value:3,color:'piros'},
    {id:8,value:4,color:'piros'},
    {id:9,value:1,color:'sarga'},
    {id:10,value:2,color:'sarga'},
    {id:11,value:3,color:'sarga'},
    {id:12,value:4,color:'sarga'},
    {id:13,value:1,color:'zold'},
    {id:14,value:2,color:'zold'},
    {id:15,value:3,color:'zold'},
    {id:16,value:4,color:'zold'},

]
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


function Main()
{

    EredmenyBetoltes();
    Elrendezes();
    Tablageneralas();

}    
Main();
