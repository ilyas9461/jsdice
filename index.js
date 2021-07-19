console.log("start...");

function zar(){
    var rnd1 = Math.floor(Math.random() * 6) + 1;
    var rndDiceImgSource1 = "images/" + "dice" + rnd1 + ".png";
    img1 = document.querySelectorAll("img")[0];
    console.log("img1: "+rndDiceImgSource1);
    img1.setAttribute("src", rndDiceImgSource1);

    var rnd2 = Math.floor(Math.random() * 6) + 1;
    var rndDiceImgSource2 = "images/" + "dice" + rnd2 + ".png";

    img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", rndDiceImgSource2);

    if (rnd1 > rnd2) {
        document.querySelector("h1").innerHTML = "⛳Oyuncu1 kazandı...";
    } else if (rnd1 < rnd2) {
        document.querySelector("h1").innerHTML = "Oyuncu2 kazandı... ⛳";
    } else {
        document.querySelector("h1").innerHTML = "⛔Oyuncu1 = Oyuncu2 ⛔";
    }
}

zar();