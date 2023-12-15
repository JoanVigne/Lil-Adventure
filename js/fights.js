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

function youTouch(DMG) {
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
  let hpPlayer = parseInt(hpPlayerData.innerHTML, 10);
  const armorPlayerData = document.getElementById("armorPlayer");
  let armorPlayer = parseInt(armorPlayerData.innerHTML, 10);
  const forcePlayerData = document.getElementById("forcePlayer");
  let forcePlayer = parseInt(forcePlayerData.innerHTML, 10);

  //
  let dammAndForce = (DMG += forcePlayer);
  let newHPEnemy = (hp -= dammAndForce -= armor);
  // player dead ?

  // switch
  switch (titleH1[0].innerHTML) {
    case "The local master":
      enemyChatContainer.innerHTML = `<p>You success !</p>`;
      mainChatContainer.innerHTML = `<p>If it was a real fight, you would ve done <br><bold> ${DMG} dammages <bold>.<br>`;
      buttons("ok", "ok", "Okay", "trainingVence2()", mainChatContainer);
      break;
    default:
      function dmgDisplay() {
        hpx.innerHTML = newHPEnemy;
        mainChatContainer.innerHTML += `<p>You hit and deal <br><bold>${DMG}</bold> dammage <br> The opponent<bold> blocked ${armor} dammge with his armor</bold></p> `;
        buttons(
          "attackAgain",
          "",
          "Attack again",
          "weaponChoseDices(); removeThis()",
          mainChatContainer
        );
        focusFirstInput();
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
          mainChatContainer.innerHTML = `You hit one last time, deal ${DMG} and kill ! <br> you win!`;
          xpConcideringLevel(xp);
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
            // ENEMY DAMMAGE
            const chanceToTouch = oneToAHundred();
            const dmgEnemy = 1 + force - armorPlayer;
            let newHPPlayer = hpPlayer - dmgEnemy;
            if (chanceToTouch <= 50 + force * 2) {
              if (newHPPlayer <= 0 || hpPlayer <= 0) {
                playerDeath();
              }
              mainChatContainer.innerHTML = `<p>Your enemy attacked and you lost ${dmgEnemy} HP</p> `;
              hpPlayerData.innerHTML = newHPPlayer;
              dmgDisplay();
            } else {
              mainChatContainer.innerHTML = `Your opponent missed his attack.`;
              dmgDisplay();
            }
          }
        }
        focusFirstInput();
      }
      // armor too high?
      else {
        const chanceToTouch = oneToAHundred();
        const dmgEnemy = 1 + force - armorPlayer;
        let newHPPlayer = hpPlayer - dmgEnemy;
        if (chanceToTouch <= 50 + force * 2) {
          if (hpPlayer <= 0) {
            playerDeath();
          }
          mainChatContainer.innerHTML = `<p>Your enemy attacked and you lost ${dmgEnemy} HP</p> `;
          hpPlayerData.innerHTML = newHPPlayer;
        } else {
          mainChatContainer.innerHTML = `Your opponent missed his attack.`;
        }
        mainChatContainer.innerHTML += `<h4>His armor is too strong for such a weak hit !</h4>`;
        buttons(
          "attackAgain",
          "",
          "Try again",
          "weaponChoseDices(); removeThis()",
          mainChatContainer
        );
      }
      break;
  }
}
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
                 <p>Your enemy attacked and you lost ${dmgEnemy} HP</p> `;
        hpPlayerData.innerHTML = newHPPlayer;
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
