/* 
    Opiskelijan nimi: Liisa
    Tehtävät aloitettu pvm: 15.1.2018
    Tehtävät valmiina pvm: nn
*/

// Älä muuta näitä funktioita 
function tul_nayta() {
    document.getElementById("tul_plus").style.setProperty("display", "none");
    document.getElementById("tul_miinus").style.setProperty("display", "inline");
    document.getElementById("tulostus").style.setProperty("display", "block");
}

function tul_piilota() {
    document.getElementById("tul_plus").style.setProperty("display", "inline");
    document.getElementById("tul_miinus").style.setProperty("display", "none");
    document.getElementById("tulostus").style.setProperty("display", "none");
}

function lask_nayta() {
    document.getElementById("lask_plus").style.setProperty("display", "none");
    document.getElementById("lask_miinus").style.setProperty("display", "inline");
    document.getElementById("laskutoimitukset").style.setProperty("display", "block");
}

function lask_piilota() {
    document.getElementById("lask_plus").style.setProperty("display", "inline");
    document.getElementById("lask_miinus").style.setProperty("display", "none");
    document.getElementById("laskutoimitukset").style.setProperty("display", "none");
}
// muutoskielto loppuu tähän

// Tulostusharjoitukset
function tehtava_t01() {  
    var nimesi = document.getElementById('nimesi').value;
    var viesti = "Tervetuloa opiskelemaan ohjelmointia" +nimesi; // muodosta viesti tähän
    alert(viesti);
};

function tehtava_t02() {
    var nimesi = document.getElementById('nimi').value;
    var viesti = ""; // muodosta viesti tähän
    var tulostus = document.getElementById('viesti');
    tulostus.innerHTML = viesti;
};

function tehtava_t03() {        
    var sekuntejaMinuutissa = 60;
    var minuuttejaTunnissa = 60;

    // määrittele muuttujat, muokkaa laskutoimitusta
    
    var sekunnitVuodessa = sekuntejaMinuutissa * minuuttejaTunnissa;
    
    var viesti = ""; // muodosta viesti tähän
    
    var tulostus = document.getElementById('vuosisekunnit');
    tulostus.innerHTML = viesti;
};

function tehtava_t04() {
    var eka = Number(document.getElementById('eka').value);
    var toka = Number(document.getElementById('toka').value);
    var kolmas = Number(document.getElementById('kolmas').value);
    
    // laske keskiarvo
    
    var viesti = ""; // muodosta viesti tähän
    
    var tulostus = document.getElementById('tulos');
    tulostus.innerHTML = viesti;
}

function tehtava_t05() {
    var luku1 = Number(document.getElementById('luku1').value);
    var luku2 = Number(document.getElementById('luku2').value);
    
    var summa = luku1 + luku2;
    // tee laskutoimitukset
    
    var viesti = luku1 + " + " + luku2 + " = " + summa + "<br>";
    // jatka viestin muodostamista
    
    var tulostus = document.getElementById('tulokset');
    tulostus.innerHTML = viesti;
}

function tehtava_t06() {        

    var tulos = document.getElementById('tulos3');
    
};

function tehtava_t07() {

    var tulos = document.getElementById('tulos4');

}
