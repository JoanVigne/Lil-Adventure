// xpConcideringLevel(xpRecieved) to give xp to player

function displayStatsPlayer(container) {
  container.innerHTML = `<u>Stats:</u><br>    
    <p>
    <bold>HP:<span id="hpPlayer">${gameStuffData.hp}</span></bold><br>
    armor:<span id="armorPlayer">${gameStuffData.armor}</span>
    force:<span id="forcePlayer">${gameStuffData.force}</span>
    spe:<span id="spePlayer">${gameStuffData.spe}</span> 
    </p>
    `;
}

function profile() {
  if (titleH1[0].innerHTML === "Menu") {
    return;
  }
  // <p><u>spe</u>:${gameStuffData.spe}</p>
  homeMadeAlert(
    "Profile",
    `<p><u>Level</u>:${gameStuffData.level} <u>HP</u>:${gameStuffData.hp} <u>force</u>:${gameStuffData.force}   
    <h4>My stuff :</h4>
    <p><u>total armor</u>:${gameStuffData.armor}</p>
    <p><u>hat</u>:${gameStuffData.hat} <u>top</u>:${gameStuffData.top} </p>
    <p><u>weapon</u>:${gameStuffData.weapon}</p>
    <p><u>shield</u>:${gameStuffData.shield} </p>
 `
  );
  focusThisInput("alertBox");
}

let xpContainer = document.getElementById("xpContainer");
xpContainer.addEventListener("click", profile);

function addingStat(stat, howMuch) {
  gameStuffData[stat] += howMuch;
  playerStuff();

  if (gameStuffData.hp <= 0) {
    playerDeath();
  }
}

/* function addingHp(howMuch) {
  gameStuffData.hp = gameStuffData.hp += howMuch;
  if (gameStuffData.hp <= 0) {
    playerDeath();
  }
  playerStuff();
}
function addingForce(howMuch) {
  gameStuffData.force = gameStuffData.force += howMuch;
  playerStuff();
}
function addingArmor(howMuch) {
  gameStuffData.armor = gameStuffData.armor += howMuch;
  playerStuff();
} */

function orcBeerDrink() {
  homeMadeAlert(
    "GlupGlup",
    "You drink a pint of this orc beer of cheap quality. Your biceps got bigger but it hurt you... <br>[+1force]<br>[-1 HP]"
  );
  /*  addingForce(1); */
  addingStat("force", 1);
  /*   addingHp(-1); */
  addingStat("hp", -1);
}
function greenPotion() {
  homeMadeAlert(
    "Yerk",
    `It tastes TERRIBLE, and you have a strong stomach ache now..., 
    you feel your face and all your body burning!!<br>
    You lose 2hp...`
  );
  /*   addingHp(-2); */
  addingStat("hp", -2);
}
