// a lot of stuff in dice.js
//

function detailEnemy(arrayEnemyIndex, sentence) {
  fightContainer();
  // the array
  let thisEnemy = arrayEnemyIndex;
  //
  mainChatContainer.innerHTML = `<h3>${thisEnemy.name} attacks !</h3>`;
  // img
  let imgEnemy = document.createElement("div");
  imgEnemy.setAttribute("class", "opponent");
  imgEnemy.setAttribute("id", thisEnemy.name);
  enemyContainer.append(imgEnemy);
  // stats
  statEnemyContainer.innerHTML = `
    <p> max hp:<span id="hpMax">${thisEnemy.hp}</span>
    armor:<span id="armor">${thisEnemy.armor}</span>
    force:<span id="force">${thisEnemy.force}</span><br>
    spe:<span id="spe">${thisEnemy.spe}</span> 
    xp:<span id="xp">${thisEnemy.xp}</span> <br>
    HP:<span id="hpFight">${thisEnemy.hp}</span>
    </p>
    `;
  // sentence of the enemy
  enemyChatContainer.innerHTML = `<h4>${thisEnemy.name}</h4><p> ${sentence}</p>`;
}
function oneToAHundred() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}

function enemyDmgDisplay() {
  console.log("dans enemyDmgDisplay()");
  const forcex = document.getElementById("force");
  let force = parseInt(forcex.innerHTML, 10);
  const chanceToTouch = oneToAHundred();
  const dmgEnemy = 1 + force - gameStuffData.armor;
  if (chanceToTouch <= 50 + force * 2) {
    mainChatContainer.innerHTML += `<p>Your enemy attacked and you lost <span class="enemyDmg"> ${dmgEnemy}</span> HP </p> `;
    gameStuffData.hp = gameStuffData.hp - dmgEnemy;
    dammageEnemyMovement();
    /*  playerStuff(); */
    let hpContainer = document.getElementById("hpPlayer");
    hpContainer.innerHTML = gameStuffData.hp;
  }
  if (chanceToTouch >= 50 + force * 2) {
    mainChatContainer.innerHTML += `<p>Your enemy failed his attack</p> `;
  }
}
function normalDammage(DMG, armorEnemy) {
  mainChatContainer.innerHTML += `<p>You hit and deal <br><span class="myDmg">${DMG}</span> dammage <br> The opponent<bold> blocked ${armorEnemy} dammge with his armor</bold></p> `;
  buttons(
    "attackAgain",
    "",
    "Attack again",
    "weaponChoseDices(); removeThis()",
    mainChatContainer
  );
  dammagePlayerMovement();
  /* focusThisInput(0); */
}
function enemyDeath(DMG) {
  importantEnemyDeath(titleH1[0].innerHTML);
  const xpEnemyContainer = document.getElementById("xp");
  let xpEnemy = parseInt(xpEnemyContainer.innerHTML, 10);
  let enemyImgToDelet = document.getElementsByClassName("opponent");
  enemyImgToDelet[0].remove();
  xpConcideringLevel(xpEnemy);
  //
  mainChatContainer.innerHTML = `You hit one last time, deal<span class="myDmg"> ${DMG}<span> and kill ! <br> you win!`;
  buttons(
    "finishFight",
    "",
    "Going back to the map",
    "endOfFight(), whereAmI()",
    mainChatContainer
  );
}
function newTouch(DMG) {
  const etape = localStorage.getItem("localMaster");
  if (etape === "3") {
    console.log("dans le if");
    enemyChatContainer.innerHTML = `<p>You success !</p>`;
    mainChatContainer.innerHTML = `<p>If it was a real fight, you would ve done <br><span class="myDmg"> ${DMG}<span> dammage .<br>`;
    buttons("ok", "ok", "Okay", "trainingVence2()", mainChatContainer);
    return;
  }
  //
  const hpEnemyContainer = document.getElementById("hpFight");
  let hpEnemy = parseInt(hpEnemyContainer.innerHTML, 10);
  const armorEnemyContainer = document.getElementById("armor");
  let armorEnemy = parseInt(armorEnemyContainer.innerHTML, 10);
  // dammage deals to the enemy =>
  let totalDammage = (DMG += gameStuffData.force);
  let hpEnemyAfterDammage = (hpEnemy -= totalDammage -= armorEnemy);
  hpEnemyContainer.innerHTML = hpEnemyAfterDammage;
  // MESSAGES :
  mainChatContainer.innerHTML = "";
  // DEATHS =>
  if (gameStuffData.hp <= 0) {
    playerDeath();
    return;
  }
  if (hpEnemyAfterDammage <= 0) {
    enemyDeath(totalDammage);
    return;
  }
  if (armorEnemy >= totalDammage) {
    // function blockDammage
  }
  if (totalDammage >= armorEnemy) {
    normalDammage(totalDammage, armorEnemy);
  }
  // ENEMEY DAMMAGE =>
  enemyDmgDisplay();
  focusThisInput(0);
}

function youMiss(result) {
  if (titleH1[0].innerHTML === "The local master") {
    enemyChatContainer.innerHTML = `<p> YOU FAILED NOOB</p> `;
    mainChatContainer.innerHTML = `<p> Try again...</p><br>`;
    buttons("ok", "ok", "Okay", "choseYourDice(2, 4, 6, 8)", mainChatContainer);
  }
  // ENEMY DAMMAGE
  /*   const chanceToTouch = oneToAHundred();
  const dmgEnemy = 1 + force - armorPlayer;
  let newHPPlayer = hpPlayer - dmgEnemy; */
  if (chanceToTouch <= 50 + force * 2) {
    if (hpPlayer <= 0) {
      playerDeath();
    }
    mainChatContainer.innerHTML = `<h4>You missed the target ! The opponent is laughing at you.. </h4>
                 <p>Your enemy attacked and you lost <span class="enemyDmg"> ${dmgEnemy}</span> HP </p> `;
    /* hpPlayerData.innerHTML = newHPPlayer; */
    dammageEnemyMovement();
    enemyDmgDisplay();
  } else {
    mainChatContainer.innerHTML = `
                 <h4>You missed the target ! The opponent is laughing at you.. </h4>
                 Your opponent missed his attack.`;
  }
  buttons(
    "attackAgain",
    "",
    "Try again",
    "weaponChoseDices(); removeThis()",
    mainChatContainer
  );
}

function removeThis() {
  document.getElementById("attackAgain").remove();
}

function dammageEnemyMovement() {
  const opponent = document.querySelector(".opponent");
  opponent.classList.add("attackMovement");
  setTimeout(function () {
    opponent.classList.remove("attackMovement");
  }, 500);
}
function dammagePlayerMovement() {
  const playerFight = document.getElementById("player");
  playerFight.classList.add("playerAttackMovement");
  setTimeout(function () {
    playerFight.classList.remove("playerAttackMovement");
  }, 500);
}
