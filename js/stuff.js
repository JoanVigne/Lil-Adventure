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

function howMuchArmor() {
  const stuff = {
    Wooden: 2,
    Iron: 2,
  };
  gameStuffData.armor = stuff[gameStuffData.shield] + stuff[gameStuffData.top];
}
