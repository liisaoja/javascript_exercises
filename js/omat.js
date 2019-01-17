/* 
    Opiskelijan nimi: xxx
    Tehtävät aloitettu pvm: mm
    Tehtävät valmiina pvm: nn
*/

function tehtava_v01() {
    var svuosi = Number(document.getElementById("svuosi").value);
    var viesti;
    
    if (svuosi > 2000){
        viesti = ("Alaikäinen");
    } else {
         viesti = ("Tervetuloa!");
    }
       
   var tulos = document.getElementById('portsari');
      tulos.innerHTML = viesti;
    
}

function tehtava_v02() {
    var luku1 = Number(document.getElementById("luku1").value);
    var luku2 = Number(document.getElementById("luku2").value);
    var tulos = document.getElementById("pienempi");
    var viesti; 
    
    if (luku1<luku2)
        viesti = "Pienempi luku on " + luku1;
    else
        viesti = "Pienempi luku on " + luku2;
    
    tulos.innerHTML = viesti;
       
}

function tehtava_v03() {
    var luku1 = Number(document.getElementById("luku1").value);
    var luku2 = Number(document.getElementById("luku2").value);
    var tulos = document.getElementById("negatiivinen");
    var viesti;
    
    if (luku1 * luku2 < 0)
        viesti = "Toinen luvuista on negatiivinen.";
     else
         viesti = "Molemmat luvut ovat positiivisia tai negatiivisia.";
     
     tulos.innerHTML = viesti;

}

function tehtava_v04() {
    var sivu1 = Number(document.getElementById("sivu1").value);
    var sivu2 = Number(document.getElementById("sivu2").value);
    var tulos = document.getElementById("ruutu");
    var viesti;
    
    if (sivu1 !== sivu2)
        viesti = "Suorakaide";
    else
        viesti = "Neliö";
    
    tulos.innerHTML = viesti;
}

function tehtava_v05() {
    var luku = Number(document.getElementById("luku3").value);
    var tulos = document.getElementById("pariton");
    var viesti;
    
if (luku%2 === 0)
    viesti = "Luku on parillinen.";
else
    viesti = "Luku on pariton.";

tulos.innerHTML = viesti;
}


function tehtava_v06() {
    var luku = Number(document.getElementById("luku3").value);
    var tulos = document.getElementById("positiivinen");
    var viesti;
    
    if(luku < 0)
        viesti = "negatiivinen";
    else if (luku > 0)
        viesti = "positiivinen";
        else 
            viesti = "nolla";
    
    tulos.innerHTML = viesti;
}

function tehtava_v07() {
    var lukuA = Number(document.getElementById("lukua").value);
    var lukuB = Number(document.getElementById("lukub").value);
    var lukuC = Number(document.getElementById("lukuc").value);
    var tulos = document.getElementById("pienin");
    
    var pieninLuku = 0;
    
    if(lukuA < lukuB){
        pieninLuku = lukuA;
        }else{
            pieninLuku = lukuB;}
    
            if(lukuC < pieninLuku)
                 pieninLuku = lukuC;
            
            
              
    tulos.innerHTML = "Pienin luku on " +pieninLuku+ ".";
    }
    
function tehtava_v08() {
    var vuosi = Number(document.getElementById("vuosi").value);
    var tulos = document.getElementById("karkausvuosi");
    var viesti;
    
    if (vuosi%100===0 && vuosi%400===0)
        viesti = "on karkausvuosi";
        else if (vuosi%4===0 && vuosi%100!==0)
        viesti = "on karkausvuosi";
            else 
                viesti = "ei ole karkausvuosi";
    
    tulos.innerHTML = viesti;
}
