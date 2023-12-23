let XPDisplay = document.getElementById("xpDisplay");
let LevelDisplay = document.getElementById("LevelDisplay");
let xpFiller = document.getElementById("xpFiller");
function xpAndLevelDisplay() {
  /* let data = localStorage.getItem("gameStuff");
  let parseData = JSON.parse(data);
  let xp = parseData.xp; 

  let level = parseData.level;
  */
  let xp = gameStuffData.xp;
  let level = gameStuffData.level;
  XPDisplay.innerHTML = xp + "%";
  LevelDisplay.innerHTML = level;
  xpFiller.style.width = xp + "%";
}
function xpConcideringLevel(xpRecieved) {
  /*   let data = localStorage.getItem("gameStuff");
  let parseData = JSON.parse(data); */
  let lvl = gameStuffData.level;
  switch (lvl) {
    case 1:
      moreXp(xpRecieved * 50);
      break;
    case 2:
      moreXp(xpRecieved * 40);
      break;
    case 3:
      moreXp(xpRecieved * 30);
      break;
    case 4:
      moreXp(xpRecieved * 25);
      break;
    case 5:
      moreXp(xpRecieved * 15);
      break;
    case 6:
      moreXp(xpRecieved * 10);
      break;
    case 7:
      moreXp(xpRecieved * 8);
      break;
    case 8:
      moreXp(xpRecieved * 7);
      break;
    case 9:
      moreXp(xpRecieved * 6);
      break;
    case 10:
      moreXp(xpRecieved * 5);
      break;
    case 6:
      moreXp(xpRecieved * 5);
      break;
    case 1:
      moreXp(xpRecieved * 5);
      break;
    case 12:
      moreXp(xpRecieved * 4);
      break;
    case 13:
      moreXp(xpRecieved * 3);
      break;
    case 14:
      moreXp(xpRecieved * 2);
      break;
    default:
      moreXp(xpRecieved);
      break;
  }
}

function moreXp(amountOfXp) {
  /*   let data = localStorage.getItem("gameStuff");
  let parseData = JSON.parse(data);
  let newXp = (parseData.xp += amountOfXp); */
  let newXp = (gameStuffData.xp += amountOfXp);
  let level = gameStuffData.level;

  if (newXp >= 100 && newXp < 200) {
    gameStuffData.xp = newXp -= 100;
    gameStuffData.level = level += 1;
    statUpgrade(1);
  }
  if (newXp >= 200 && newXp < 300) {
    gameStuffData.xp = newXp -= 200;
    gameStuffData.level = level += 2;
    statUpgrade(2);
  }
  if (newXp >= 300 && newXp < 400) {
    gameStuffData.xp = newXp -= 300;
    gameStuffData.level = level += 3;

    statUpgrade(3);
  }
  if (newXp >= 400) {
    gameStuffData.xp = 0;
    statUpgrade(4);
  } else {
    gameStuffData.xp = newXp;
  }
  xpAndLevelDisplay();
}

function statUpgrade(howMany) {
  let titleLevelUp = "Level up !";
  if (howMany > 1) {
    titleLevelUp = `You just gained ${howMany} levels!`;
  }
  promptBox(`<h3><u>${titleLevelUp}</u></h3> <br> 
    <h4>Chose a stat to upgrade :</h4>
    <br>
    <input type="button" class="forceBut levelUpButton" onClick="addingStat('force', ${howMany}); closePromptBox(); focusThisInput(0);" value="Force +${howMany}"/> <br>
    <input type="button" class="hpBut levelUpButton" onClick="addingStat('hp', ${
      howMany * 2
    }); closePromptBox(); focusThisInput(0);" value="HP +${howMany * 2}"/>`);
  focusThisInput();
}
