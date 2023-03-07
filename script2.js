var kartyaAdatok = [
    { id: 1, value: 3, sign: '' },
    { id: 2, value: 4, sign: '' },
    { id: 3, value: 5, sign: '' },
    { id: 4, value: 2, sign: '' },
    { id: 5, value: -3, sign: '' },
    { id: 6, value: 2, sign: '' },
    { id: 7, value: 0, sign: 'taliga' },
    { id: 8, value: 6, sign: '' },
    { id: 9, value: -6, sign: '' },
    { id: 10, value: 0, sign: 'pap' },
    { id: 11, value: 5, sign: '' },
    { id: 12, value: 0, sign: 'sarkany' },
    { id: 13, value: 4, sign: '' },
    { id: 14, value: -5, sign: '' },
    { id: 15, value: 0, sign: 'hegy' },
    { id: 16, value: -2, sign: '' },
    { id: 17, value: -1, sign: '' },
    { id: 18, value: 1, sign: '' },
    { id: 19, value: -4, sign: '' },
    { id: 20, value: 6, sign: '' },
    { id: 21, value: 0, sign: 'hegy' },
    { id: 22, value: 3, sign: '' },
    { id: 23, value: 1, sign: '' },
]

var varAdatok = [
    { id: 1, value: 1, color: 'kek' },
    { id: 2, value: 2, color: 'kek' },
    { id: 3, value: 3, color: 'kek' },
    { id: 4, value: 4, color: 'kek' },
    { id: 5, value: 1, color: 'piros' },
    { id: 6, value: 2, color: 'piros' },
    { id: 7, value: 3, color: 'piros' },
    { id: 8, value: 4, color: 'piros' },
    { id: 9, value: 1, color: 'sarga' },
    { id: 10, value: 2, color: 'sarga' },
    { id: 11, value: 3, color: 'sarga' },
    { id: 12, value: 4, color: 'sarga' },
    { id: 13, value: 1, color: 'zold' },
    { id: 14, value: 2, color: 'zold' },
    { id: 15, value: 3, color: 'zold' },
    { id: 16, value: 4, color: 'zold' },
]
var eredmeny = document.getElementById("eredmeny");
var tabla = document.createElement("div");
var kartyaBox = document.createElement("div");
var BalOldal = document.createElement("div");
var pontBox = document.createElement("div");
var korokBox = document.createElement("div");

var cellak = [];

function EredmenyBetoltes() {
    BalOldal.appendChild(kartyaBox);
    BalOldal.appendChild(pontBox);
    eredmeny.appendChild(BalOldal);
    eredmeny.appendChild(tabla);
    eredmeny.appendChild(korokBox);
}

//

function Elrendezes() {
    BalOldal.id = "baloldal";
    kartyaBox.id = "kartyabox";
    tabla.id = "tabla";
    pontBox.id = "pontbox";
    korokBox.id = "korokbox";
}

function velszam(also, felso) {
    return Math.floor(Math.random() * (felso - also + 1) + also);
}

function Tablageneralas() {
    var k = 0;
    for (var i = 0; i < 5; i++) {
        var sorDiv = document.createElement("div");
        sorDiv.classList += "sordiv"
        for (var j = 0; j < 6; j++) {
            var oszlopDiv = document.createElement("div");
            oszlopDiv.classList += "oszlopdiv"
            oszlopDiv.id = k;
            k++;
            sorDiv.appendChild(oszlopDiv);
        }
        tabla.appendChild(sorDiv);
    }
}

 function Vanebenne(tomb,ertek){
     var i = 0;
     while(i < tomb.length && tomb[i] != ertek){
        i++;
     }
    return i<tomb.length;
 }


function CellakKeverese() {
    for (let index = 0; index < 100; index++) {
        var vel1 = Math.floor(Math.random() * 30);
        var vel2 = Math.floor(Math.random() * 30);
        var sv = cellak[vel1];
        cellak[vel1] = cellak[vel2];
        cellak[vel2] = sv;

    }
}

function Tombfel(tomb) {
    for (let index = 0; index < 7; index++) {
        var random = velszam(0, 15);
        if (!Vanebenne(tomb, random)) {
            tomb.push(random);
        }
        else{
             index--;
         }
    }
}

function cellakFeltoltese() 
{
    for (let i = 0; i < 23; i++) {
        cellak[i] = {};
        cellak[i].type = "kártya";
        cellak[i].info = kartyaAdatok[i];
    }
    var randomtomb = [];
    Tombfel(randomtomb);
    console.log(randomtomb);
    for (let j = 23; j < 30; j++) {
        cellak[j] = {};
        cellak[j].type = "vár";
        cellak[j].info = varAdatok[randomtomb[j-23]];
        // if(!Vanebenne(varAdatok[j-23+random])){
        //      cellak[j].info = varAdatok[j-23+random];
        // }
    }
}

function SorOsszeg(){
    for (var i = 0; i < 5; i++) 
    {
        let sorosszeg = 0;
        for (let j = 0; j < 6; j++) 
        {
            sorosszeg += cellak[i*6+j].info.value;
            //36
        }
        console.log(sorosszeg);
    }
    console.log("\n");
}

function OszlopOsszeg(){
    for (var i = 0; i < 5; i++) 
    {
        let oszloposszeg = 0;
        for (let j = 0; j < 6; j++) 
        {
            console.log(cellak[i+6*j].info.value);
            oszloposszeg += cellak[i+6*j].info.value;
            //37
        }
        console.log(oszloposszeg);
    }
}

/*function cellakOszzekerese(cellak) {
    return cellak.sort(() => Math.random() - 0.5);
  }*/

function cellakMegjelenitese() {
    for (let i = 0; i < cellak.length; i++) {
        var index = cellak[i].info.id
        var img = document.createElement("img");
        if (cellak[i].type == "kártya") {
            img.src = "img/" + (index) + ".png"
        }
        else {
            img.src = "img/var" + (index) + ".png"
        }
        var div = document.getElementById(i);
        div.appendChild(img);
    }
}

function Main() {
    EredmenyBetoltes();
    Elrendezes();
    Tablageneralas();
    cellakFeltoltese();
    CellakKeverese();
    cellakMegjelenitese();
    SorOsszeg();
    OszlopOsszeg();
}
Main();
 /*
cellak[i] -> cella
cella = {
   type: "vár" / "kártya",
   info: {id:1, color:"piros", value:1} {id:3, value:1, sign=''}
}
cella.type -> vár
cella.info.id -> 1
*/