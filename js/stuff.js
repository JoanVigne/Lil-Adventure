/* 

let theHat = document.createElement("div");
let theFace = document.createElement("div");
let theBody = document.createElement("div");
let theWeapon = document.createElement("div");
let theShield = document.createElement("div");
theHat.setAttribute("id", "hat");
theFace.setAttribute("id", "face");
theBody.setAttribute("id", "top");
theWeapon.setAttribute("id", "weapon");
theShield.setAttribute("id", "shield");

function playerStuff() {

    var gameStuff = JSON.parse(localStorage.getItem("gameStuff"));
    let hat = gameStuff.hat;
    let face = gameStuff.face;
    let top = gameStuff.top;
    let weapon = gameStuff.weapon;
    let shield = gameStuff.shield;


    theHat.setAttribute("class", hat);
    player.append(theHat);

    theFace.setAttribute("class", face);
    player.append(theFace);

    theBody.setAttribute("class", top);
    player.append(theBody);

    theWeapon.setAttribute("class", weapon);
    player.append(theWeapon);

    theShield.setAttribute("class", shield);
    player.append(theShield);
}
// WEAPON ODDS IN DICE.JS
function modifyWeapon(newWeapon) {
    let actualStuff = localStorage.getItem("gameStuff");
    let stuff = JSON.parse(actualStuff);
    stuff.weapon = newWeapon;
    localStorage.setItem("gameStuff", JSON.stringify(stuff));
    playerStuff();
}
function modifyHat(newHat) {
    let actualStuff = localStorage.getItem("gameStuff");
    let stuff = JSON.parse(actualStuff);
    stuff.hat = newHat;
    localStorage.setItem("gameStuff", JSON.stringify(stuff));
    playerStuff();
}
function modifyShield(newShield) {
    let actualStuff = localStorage.getItem("gameStuff");
    let stuff = JSON.parse(actualStuff);
    stuff.shield = newShield;
    localStorage.setItem("gameStuff", JSON.stringify(stuff));
    playerStuff();
}
function modifyTop(newTop) {
    let actualStuff = localStorage.getItem("gameStuff");
    let stuff = JSON.parse(actualStuff);
    stuff.top = newTop;
    localStorage.setItem("gameStuff", JSON.stringify(stuff));
    playerStuff();
} */

// Déclarez une variable globale pour stocker les informations du gameStuff
let gameStuffData = {
  face: "joan",
  weapon: "bambou",
  shield: "",
  top: "startShirt",
  hat: "startHat",
  hp: 10,
  armor: 0,
  force: 0,
  spe: "",
  level: 1,
  xp: 0,
};

let theHat = document.createElement("div");
let theFace = document.createElement("div");
let theBody = document.createElement("div");
let theWeapon = document.createElement("div");
let theShield = document.createElement("div");

theHat.setAttribute("id", "hat");
theFace.setAttribute("id", "face");
theBody.setAttribute("id", "top");
theWeapon.setAttribute("id", "weapon");
theShield.setAttribute("id", "shield");

function playerStuff() {
  // Utilisez la variable globale au lieu de localStorage
  let hat = gameStuffData.hat;
  let face = gameStuffData.face;
  let top = gameStuffData.top;
  let weapon = gameStuffData.weapon;
  let shield = gameStuffData.shield;

  theHat.setAttribute("class", hat);
  player.append(theHat);

  theFace.setAttribute("class", face);
  player.append(theFace);

  theBody.setAttribute("class", top);
  player.append(theBody);

  theWeapon.setAttribute("class", weapon);
  player.append(theWeapon);

  theShield.setAttribute("class", shield);
  player.append(theShield);
}

// Fonctions pour modifier la variable globale gameStuffData
function modifyWeapon(newWeapon) {
  gameStuffData.weapon = newWeapon;
  playerStuff();
}

function modifyHat(newHat) {
  gameStuffData.hat = newHat;
  playerStuff();
}

function modifyShield(newShield) {
  gameStuffData.shield = newShield;
  playerStuff();
}

function modifyTop(newTop) {
  gameStuffData.top = newTop;
  playerStuff();
}
