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
/* function getPlayerStats() {
  return {
    hp: gameStuffData.hp,
    armor: gameStuffData.armor,
    force: gameStuffData.force,
    level: gameStuffData.level,
    xp: gameStuffData.xp,
  };
}
function touch() {
  // player
  const hpPlayer = document.getElementById("hpPlayer");
  hpPlayer.innerHTML = gameStuffData.hp;
  const armorPlayer = document.getElementById("armorPlayer");
  armorPlayer.innerHTML = gameStuffData.armor;
  const forcePlayer = document.getElementById("forcePlayer");
  forcePlayer.innerHTML = gameStuffData.force;
}
function refreshStats(){

} */
function youTouch(DMG) {
  if (titleH1.innerHTML === "The local master") {
    enemyChatContainer.innerHTML = `<p>You success !</p>`;
    mainChatContainer.innerHTML = `<p>If it was a real fight, you would ve done <br><span class="myDmg"> ${DMG}<span> dammage .<br>`;
    buttons("ok", "ok", "Okay", "trainingVence2()", mainChatContainer);
    return;
  }
  // var enemy :
  const hpx = document.getElementById("hpFight");
  let hp = parseInt(hpx.innerHTML, 10);
  const armorx = document.getElementById("armor");
  let armor = parseInt(armorx.innerHTML, 10);
  const xpx = document.getElementById("xp");
  let xp = parseInt(xpx.innerHTML, 10);
  const forcex = document.getElementById("force");
  let force = parseInt(forcex.innerHTML, 10);

  // var player :
  const hpPlayerData = document.getElementById("hpPlayer");
  let hpPlayer = gameStuffData.hp;
  let armorPlayer = gameStuffData.armor;
  let forcePlayer = gameStuffData.force;

  //
  let dammAndForce = (DMG += forcePlayer);
  let newHPEnemy = (hp -= dammAndForce -= armor);
  // condition if number negatif alors = 0;

  function dmgDisplay() {
    hpx.innerHTML = newHPEnemy;
    mainChatContainer.innerHTML += `<p>You hit and deal <br><span class="myDmg">${DMG}</span> dammage <br> The opponent<bold> blocked ${armor} dammge with his armor</bold></p> `;
    buttons(
      "attackAgain",
      "",
      "Attack again",
      "weaponChoseDices(); removeThis()",
      mainChatContainer
    );
    dammagePlayerMovement();
  }
  function enemyDmgDisplay() {
    const chanceToTouch = oneToAHundred();
    const dmgEnemy = 1 + force - armorPlayer;
    /*   let newHPPlayer = hpPlayer - dmgEnemy; */
    if (chanceToTouch <= 50 + force * 2) {
      mainChatContainer.innerHTML = `<p>Your enemy attacked and you lost <span class="enemyDmg"> ${dmgEnemy}</span> HP </p> `;
      gameStuffData.hp = gameStuffData.hp - dmgEnemy;
      dmgDisplay();
      dammageEnemyMovement();
    }
  }
  //  armor ?
  if (dammAndForce >= armor) {
    // ENEMY IS DEAD ?? ??
    if (newHPEnemy <= 0) {
      // IMPORTANT ENEMIES ??
      importantEnemyDeath(titleH1[0].innerHTML); // death
      setALocalStorage();
      //
      let enemyImgToDelet = document.getElementsByClassName("opponent");
      enemyImgToDelet[0].remove();
      hpx.innerHTML = newHPEnemy;
      //
      gameStuffData.hp = hpPlayer;

      playerStuff();
      //
      mainChatContainer.innerHTML = `You hit one last time, deal<span class="myDmg"> ${DMG}<span> and kill ! <br> you win!`;
      xpConcideringLevel(xp);
      dammagePlayerMovement();
      if (titleH1[0].innerHTML == "The fight arena") {
        console.log("wait");
      } else {
        buttons(
          "finishFight",
          "",
          "Going back to the map",
          "endOfFight(), whereAmI()",
          mainChatContainer
        );
      }
    } else {
      // strong hit?
      if (hp == 1) {
        mainChatContainer.innerHTML = `Your enemy is weak, and is too afraid to fight back !</p> `;
        dmgDisplay();
      } else {
        enemyDmgDisplay();
      }
    }
  }
  // armor too high?
  else {
    enemyDmgDisplay();
    mainChatContainer.innerHTML += `<h4>His armor is too strong for such a weak hit !</h4>`;
    buttons(
      "attackAgain",
      "",
      "Try again",
      "weaponChoseDices(); removeThis()",
      mainChatContainer
    );
  }
  // METTRE A JOUR LES HP
  hpPlayerData.innerHTML = gameStuffData.hp;
  if (gameStuffData.hp <= 0) {
    playerDeath();
    console.log("a la toute fin de la fonction youtouch ");
  }
}

//! END OF YOU TOUCH
function youMiss(result) {
  switch (titleH1[0].innerHTML) {
    case "The local master":
      enemyChatContainer.innerHTML = `<p> YOU FAILED NOOB</p> `;
      mainChatContainer.innerHTML = `<p> Try again...</p><br>`;
      buttons(
        "ok",
        "ok",
        "Okay",
        "choseYourDice(2, 4, 6, 8)",
        mainChatContainer
      );
      break;
    default:
      // ENEMY DAMMAGE
      const chanceToTouch = oneToAHundred();
      const dmgEnemy = 1 + force - armorPlayer;
      let newHPPlayer = hpPlayer - dmgEnemy;
      if (chanceToTouch <= 50 + force * 2) {
        if (hpPlayer <= 0) {
          playerDeath();
        }
        mainChatContainer.innerHTML = `<h4>You missed the target ! The opponent is laughing at you.. </h4>
                 <p>Your enemy attacked and you lost <span class="enemyDmg"> ${dmgEnemy}</span> HP </p> `;
        hpPlayerData.innerHTML = newHPPlayer;
        dammageEnemyMovement();
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
      break;
  }
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
