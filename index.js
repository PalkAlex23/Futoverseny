import { FUTOK } from "./adatok.js";

const befutottVersenyzok = [];

letrehozTablazat();
osszesit();
befutott();
torolEsemeny();

// 1. feladat
function letrehozTablazat() {
    const tablaELEM = document.querySelector("#feladat_1")
    let txt = ""
    txt += `<table>`
    for (let i = 0; i < FUTOK.length; i++) {
        txt += `<tr>
                    <th>${FUTOK[i].nev}</th>
                    <td>${FUTOK[i].nemzetiseg}</td>
                    <td>${FUTOK[i].versenySzam}</td>
                </tr>`
    }
    txt += "</table>"
    console.log(txt)
    tablaELEM.innerHTML = txt
}

// 2. feladat
function osszesit() {
    const osszesitoELEM = document.querySelector("#feladat_2")
    let felmarat = 0
    let marat = 0
    let tizkm = 0
    for (let i = 0; i < FUTOK.length; i++) {
        if (FUTOK[i].versenySzam === "félmaraton") {
            felmarat += 1
        } else if (FUTOK[i].versenySzam === "maraton") {
            marat += 1
        } else {
            tizkm += 1
        }
    }
    let txt = `<p>félmaraton: ${felmarat} db</p>
                <p>maraton: ${marat} db</p>
                <p>10 km: ${tizkm} db</p>`
    osszesitoELEM.innerHTML += txt
}

// 3. feladat
function befutott() {
    const trELEMEK = document.querySelectorAll("#feladat_1 tr")
    console.log(trELEMEK)
    const felHaromELEM = document.querySelector("#feladat_3")
    for (let i = 0; i < trELEMEK.length; i++) {
        trELEMEK[i].addEventListener("click", function() {
            felHaromELEM.innerHTML += `<tr>
                <td>${FUTOK[i].nev}</td>
                <td>${FUTOK[i].nemzetiseg}</td>
                <td>${FUTOK[i].versenyIdo}</td>
            </tr>`
        })
    }
}

// 4. feladat
function torolEsemeny() {
    const gombELEM = document.querySelector("#options button")
    gombELEM.addEventListener("click", function() {
        const felHar = document.querySelector("#feladat_3")
        felHar.innerHTML = ""
    })
}

// 5. feladat
function ellenoriz(){

}