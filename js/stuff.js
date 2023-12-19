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

function createAndAppend(id, className) {
  let element = document.getElementById(id);
  if (!element) {
    element = document.createElement("div");
    element.setAttribute("id", id);
    player.append(element);
  }
  element.setAttribute("class", className);
  return element;
}
function playerStuff() {
  createAndAppend("hat", gameStuffData.hat);
  createAndAppend("face", gameStuffData.face);
  createAndAppend("top", gameStuffData.top);
  createAndAppend("weapon", gameStuffData.weapon);
  createAndAppend("shield", gameStuffData.shield);
}

function newStuff(item, slot, title) {
  if (gameStuffData[slot] === item) {
    return;
  }
  if (titleH1 === "The local master") {
    gameStuffData[slot] = item;
    playerStuff();
    return;
  }

  if (title === "" || title === null || title === undefined) {
    title = `<h4> Nice ${item} </h4>`;
  }
  confirmMessage(title + "<p> Should i take it? </p>", "Yes !", () => {
    gameStuffData[slot] = item;
    closePromptBox();
    if (item === "dark-small-sword") {
      addingStat("force", 2);
      homeMadeAlert(
        "Oh ! I can feel it !",
        "A surge courses through me as I grasp the sword! This blade grants newfound strength! [+2]"
      );
    }
    playerStuff();
  });
}
function orcLeaderStuff() {
  console.log("changemente de stuff");
  gameStuffData.weapon = "white-sword";
  gameStuffData.shield = "bouclier";
  gameStuffData.top = "armure";
  playerStuff();
}

/*  ANCIENNE VERSION PLAYERSTUFF
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
} */
