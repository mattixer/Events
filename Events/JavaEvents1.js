/**
 * Created by Ucenik on 16.3.2017..
 */
var mojGumbVar=document.getElementById("mojGumb");
mojGumbVar.onclick=function () {
    alert("Ovaj tekst će biti ispisan!");
}
document.getElementById("upis").addEventListener("mouseover",myCall);

function myCall() {
    document.getElementById("upis2").innerHTML=moj_string;
}

var moj_string = "Pozvali ste me!";