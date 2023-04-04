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
var lerakottkep = 0;
var cellak = [];

var kepKivalasztva = false;
var kepElhelyezve = true;
var kepIndex;
var kepe = false;
var pothely = document.getElementById("potHely");
var varhely = document.createElement("div");
var kephely = document.createElement("div");
kephely.classList.add("kepHely");
varhely.classList.add("varHely");
pothely.appendChild(varhely);
pothely.appendChild(kephely);




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
        sorDiv.classList += "sordiv";
        for (var j = 0; j < 6; j++) {
            var oszlopDiv = document.createElement("div");
            oszlopDiv.addEventListener("mouseover" , function(){
                this.style.border = "1px solid white";
                this.style.width = "16.5%"
            });


            oszlopDiv.addEventListener("mouseleave" , function(){
                this.style.border = "1px solid black";
                this.style.width = "16.6%"

            });
            oszlopDiv.classList += "oszlopdiv";
            oszlopDiv.id = k;
            k++;

            //oszlopDiv.setAttribute("onclick", "Rakattint(this)")
            
            // if(!kepe){

                
                oszlopDiv.addEventListener("click", function(){
                    if(kepKivalasztva && !kepElhelyezve && kepe == true && this.innerHTML == ''){
                        kepElhelyezve = true;
                        kepKivalasztva = false;
                        console.log(kepIndex);
                        var kep = document.createElement("img");
                        kep.src = "img/"+kepIndex+".png";
                        lerakottkep += 1;
                        kephely.innerHTML = '';
                        
                        this.appendChild(kep);
                    }
                })
            // }
            // else{
               
                oszlopDiv.addEventListener("click", function(){
                    if(kepKivalasztva && !kepElhelyezve && kepe == false  && this.innerHTML == ''){
                        kepElhelyezve = true;
                        kepKivalasztva = false;
                        console.log(kepIndex);
                        var kep = document.createElement("img");
                        kep.src = "img/var"+(kepIndex-23)+".png";
                        this.appendChild(kep);
                    }
                })

               
            // }
            sorDiv.appendChild(oszlopDiv);
        }
        tabla.appendChild(sorDiv);

        

    }
}

// function Korvonal()
// {
//     oszlopDiv.style.border = "3px solid white";
// } 

  function Vanebenne(tomb,ertek){
     var i = 0;
     while(i < tomb.length && tomb[i] != ertek){
        i++;
     }
    return i<tomb.length;
 }



function PotHelyreGeneralas()
{
    var doboz = document.createElement("img");
    doboz.src = "img/doboz.png";
    kartyaBox.appendChild(doboz);
    let i = 0;
    // let rak = false;
    
    doboz.addEventListener("click", function(){
        // if(!kepElhelyezve){
        //     rak = true;
        // }   
        // if(i < 23 && rak)
        // {
        //     var kep = document.createElement("img");
        //     kep.src = "img/"+(i+1)+".png";
        //     kep.style.width = "150px";
        //     kep.value = i+1; //kép indexét tárolom le
        //     kep.addEventListener("click", function(){
        //         if(!kepKivalasztva && kepElhelyezve){
        //             kepIndex = this.value;
        //             kepKivalasztva = true; 
        //             this.style.visibility = "hidden";
        //             kepElhelyezve = false;
        //             kepe = true;
        //         }
        //     })
        //     //kep.setAttribute("onclick" , "Kepkivalasztas(this)")
            
            
        //     pothely.appendChild(kep);
            
            
        //    i++;
        // }
        if(i == lerakottkep && i < 23){
            var kep = document.createElement("img");
            kep.src = "img/"+(i+1)+".png";
            kep.style.width = "150px";
            kep.style.border = "3px solid black";
            kep.value = i+1; //kép indexét tárolom le
                if(!kepKivalasztva && kepElhelyezve){
                    kepIndex = kep.value;
                    kepKivalasztva = true; 
                    kepElhelyezve = false;
                    kepe = true;
                    
                }
            //kep.setAttribute("onclick" , "Kepkivalasztas(this)")
            kephely.appendChild(kep);
           i++;
        }
    })

   
let vn = 1;
  for (let i = 0; i < 10; i++) {
    var kep = document.createElement("img");
     kep.src = "img/var"+(vn)+".png";
     kep.value = vn+23;
     if(i ==3){
        vn++;
     }
     if(i==6){
        vn++;
     }
     if(i== 8){
        vn++;
     }
     kep.style.width = "100px";
      //kép indexét tárolom le
     kep.addEventListener("click", function(){
         if(!kepKivalasztva && kepElhelyezve){
             kepIndex = this.value;
             kepKivalasztva = true; 
             this.style.visibility = "hidden";
             kepElhelyezve = false;
             kepe = false; 
         }
     })
     varhely.appendChild(kep);
    }
}

function Kepkivalasztas()
{
    if(!kepKivalasztva && kepElhelyezve){
        kepIndex = this.value;
        kepKivalasztva = true; 
            this.style.visibility = "hidden";
            kepBerakva = false;
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


function Main() {
    Elrendezes(); 
    EredmenyBetoltes();
    Tablageneralas();
    PotHelyreGeneralas();
    
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