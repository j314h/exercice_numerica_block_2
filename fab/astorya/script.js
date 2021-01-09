//constantes pour selectionner les elements du DOM
const dateFooter = document.querySelector("#date");
const dateDuJour = document.querySelector("#dateLong");
const Dheure = document.querySelector("#Dheure");
const dMinute = document.querySelector("#minute");
const dSecond = document.querySelector("#second");

//constante pour savoir sur quel page on est
const lien = document.querySelector(".lien");

//recuperation de tout les li dans la nav ul
const as = document.querySelectorAll(".nav > li > a");

//fonction pour ajouter la class active sur le menu
for (const a of as) {
  if (lien.textContent === "Accueil" && a.textContent === "Accueil") {
    a.classList.add("active_menu");
  }
  if (lien.textContent === "Produit" && a.textContent === "Produit") {
    a.classList.add("active_menu");
  }
  if (lien.textContent === "Equipe" && a.textContent === "Equipe") {
    a.classList.add("active_menu");
  }
  if (lien.textContent === "Contact" && a.textContent === "Contact") {
    a.classList.add("active_menu");
  }
}

//tableau pour mois de l'année
const tabMois = [
  "janvier",
  "fevrier",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "novembre",
  "decembre",
];

//interval pour dynamiser l'heure
const time = setInterval(() => {
  activeDate();
}, 1000);

//fonction affiche l'heure dynamiquement
function activeDate() {
  //init date appareil utilisateur
  let dateHeure = new Date();
  //init variable heure
  let heure = dateHeure.getHours();
  let minute = dateHeure.getMinutes();
  let second = dateHeure.getSeconds();

  //l'heure
  Dheure.textContent = heure + ":";

  //afficher le 0
  if (minute < 10) {
    dMinute.textContent = "0" + minute + ":";
  } else {
    dMinute.textContent = minute + ":";
  }

  //afficher le 0
  if (second < 10) {
    dSecond.textContent = "0" + second;
  } else {
    dSecond.textContent = second;
  }
}

//date dans le corps de la page
dateDuJour.textContent = new Date().getDate() + " " + tabMois[new Date().getMonth()] + " " + new Date().getFullYear();
//année dans le footer
dateFooter.textContent = new Date().getFullYear();
