function playerPositionEvent() {
  // A METTRE ICI LOW HP ANIMATION
  let position = player.style.gridArea;
  let column = player.style.gridColumnStart;
  let numberColumn = Number(column);
  let row = player.style.gridRowStart;
  let numberRow = Number(row);
  switch (titleH1[0].innerHTML) {
    case "The entrance of the village":
      if (
        position == "5 / 2" ||
        position == "5 / 6" ||
        position == "5 / 3" ||
        position == "5 / 5"
      ) {
        bubble("basicGuard", "Back off", -1, 0);
        player.style.gridRowStart = numberRow += 1;
      }
      if (position == "6 / 3" || position == "6 / 5") {
        bubble("basicGuard", "?", -1, 0);
      }
      if (position == "5 / 4") {
        homeMadeAlert(
          "Hey you! stop !",
          " Who are you ?? <br>.... Oh hey bro, you can pass of course, we don't know what happend but everything is dry around.."
        );
        player.style.gridRowStart = numberRow -= 1;
      }
      break;
    case "The village center":
      //gran-ma :
      if (position == "8 / 6") {
        newStuff(
          "black-T-shirt",
          "top",
          "Gran-ma : Dear Lord, your clothes are dirty, i can't let you wear this!"
        );
      }
      //mayor
      if (position == "8 / 4") {
        bubble("mayor", "Good luck!", 0, -1);
      }
      //priest
      if (position == "8 / 2") {
        bubble("priest", "God bless you, son", 0, -1);
      }
      break;
    case "The local master's garden":
      if (
        position == "3 / 4" ||
        position == "4 / 4" ||
        position == "8 / 4" ||
        position == "9 / 4"
      ) {
        bubble("player", "i got a sunflower", 0, -1);
        localStorage.setItem("sunFlower", "true");
      }
      break;
    case "The crossroad of the north":
      if (position == "6 / 3") {
        homeMadeAlert(
          "Directions",
          'North: Flaketown, and the "Dark Montains"<br><br>South: "Hometown" Village<br><br>East: The "Old Castle"<br><br>West: The local master'
        );
      }
      break;
    case "The east of the crossroad":
      if (column == 5) {
        bubble("player", "I can't swim..", -1, -1);
        player.style.gridColumnStart = 4;
      }
      break;

    case "The army roadblock":
      if (row == 2) {
        theArmyRoadBlockMessage();
        player.style.gridRowStart = 7;
        setTimeout(() => {
          bubble("player", "omg!", 0, 1);
        }, 1000);
      }
      break;
    case "The local master's house":
      if (position == "4 / 4") {
        titleH1[0].innerHTML = `The local master`;
        player.style.gridRowStart = 10;
        whereAmI();
      }
      break;
    case "The local master":
      if (
        position == "6 / 5" ||
        position == "7 / 6" ||
        position == "7 / 5" ||
        position == "7 / 4"
      ) {
        bubble("smallVence", "Don't touch my bed !!", 1, -1);
      }
      break;
    case "Tunnel second":
      if (numberRow == 9) {
        saving("auto-save");
      }
      if (numberRow == 5 && column > 2) {
        if (enemyArray[0].done === true) {
          return;
        }
        bubble("player", "WOW !!", 0, -1);
        setTimeout(() => {
          detailEnemy(enemyArray[0], "ksksksks");
          limitTheSpiderFarm();
        }, 500);
      }
      break;
    case "Tunnel third":
      if (position == "4 / 4" || position == "6 / 5" || position == "2 / 4") {
        if (enemyArray[0].done === true) {
          bubble("player", "dead spidey good", 0, -1);
          return;
        }
        bubble("player", "Yerk spidey", 0, -1);
        setTimeout(() => {
          detailEnemy(enemyArray[0], "ksksksks");
          limitTheSpiderFarm();
        }, 500);
      }
      break;
    case "Tunnel fourth":
      if (numberRow == 6) {
        if (enemyArray[1].done == true) {
          homeMadeAlert(
            "yerk",
            "The giant body of the spider is smelling strong now"
          );
        } else {
          bubble("player", "Let's goooo", 0, 1);
          setTimeout(() => {
            detailEnemy(enemyArray[1], "KSKSKSS MY BABIES ARE DEAD");
            enemyArray[1].done = true;
          }, 500);
        }
      }
      break;
    case "Tunnel exit":
      if (position == "6 / 6") {
        newStuff("good-t-shirt", "top");
      }
      if (position == "3 / 3") {
        newStuff("hammer-small", "weapon");
      }
      break;
    case "The Graveyard entrance":
      if (numberColumn === 3) {
        saving("auto-save");
      }
      if (numberColumn == 5) {
        if (numberRow == 5 || numberRow == 6 || numberRow == 7) {
          confirmMessage(
            "This is the graveyard of the northen, do you want to enter?",
            "let's go!",
            enterGraveYard
          );
          function enterGraveYard() {
            TP("The west of the graveyard");
            closePromptBox();
            player.style.gridColumnStart = 2;
          }
        } else {
          player.style.gridColumnStart = 4;
          bubble("player", "Big slippery wall!", -1, -1);
        }
      }
      break;
    case "The north of the graveyard":
      if (position == "5 / 4") {
        if (enemyArray[3].done == false) {
          confirmMessage(
            "You hear a sound inside this shiny tomb, do you want to open it?",
            "I'm curious...",
            () => {
              detailEnemy(enemyArray[3], "My tomb, your death..");
              closePromptBox();
              enemyArray[3].done = true;
            }
          );
        }
      }
      if (position == "4 / 4") {
        if (enemyArray[3].done == true) {
          if (gameStuffData.weapon !== "dark-small-sword") {
            confirmMessage(
              `You got closer to the sword that the skeleton left. <br>
            While getting your hand clother of it, you feel something strange, 
            It's as if the blade retains a whisper of the fallen warrior's essence. <br>`,
              `I want to take it!`,
              () => {
                closePromptBox(), newStuff("dark-small-sword", "weapon");
              }
            );
            return;
          }
          bubble("player", "Just bones", 1, 1);
        }
      }
      break;
    case "The northen crossroad":
      if (position == "6 / 5") {
        setTimeout(() => {
          homeMadeAlert(
            "Directions",
            'North: Flaketown, and the "Dark Montains"<br><br>South: "Hometown" Village<br><br>West: The cemetery'
          );
        }, 300);
      }
      if (enemyArray[4].done === false) {
        // orc
        obstacleCreation1("orc-Leather", 6, 10);
        bubble("orc-Leather", "zZzzz", 0, -1);
        if (numberRow == 8) {
          bubble("orc-Leather", "???", 0, -1);
        }
        if (numberRow == 9) {
          bubble("orc-Leather", "human???", 0, -1);
          setTimeout(() => {
            detailEnemy(enemyArray[4], "Me smash human");
          }, 1000);
          enemyArray[4].done = true;
        }
      }

      break;
    case "The front":
      if (numberRow == 4) {
        homeMadeAlert(
          "woaw",
          "You re cocky... They all jump on you and cut your head off..."
        );
        setTimeout(() => {
          playerDeath();
        }, 3000);
      }
      break;
    case "The orc camp":
      if (position == "9 / 2" || position == "8 / 5") {
        bubble("player", "fire burn.. [-1 hp]", 0, 1);
        addingStat("hp", -1);
      }
      break;
    case "The west of the orc camp":
      if (enemyArray[5].done === false) {
        if (numberRow <= 5) {
          bubble("orc-Leather", "HUMANNN !!!!", 0, 1);
          setTimeout(() => {
            detailEnemy(enemyArray[5], "HUMAN IN CAMP? NEED ALERT");
          }, 500);
          enemyArray[5].done = true;
        }
      }
      if (position == "10 / 2" || position == "8 / 4") {
        bubble("player", "fire burn.. [-1 hp]", 0, 1);
        addingStat("hp", -1);
      }
      if (position == "9 / 3" && amIDrunk === false) {
        confirmMessage(
          "The orc beer is well known as making you stronger and weaker at the same time...",
          "I wanna try!",
          () => {
            orcBeerDrink(), closePromptBox();
          }
        );
      }

      break;
    case "The north of the orc camp":
      if (numberRow == 3) {
        saving("auto-save");
      }
      if (position == "10 / 2") {
        bubble("player", "fire burn.. [-1 hp]", 0, 1);
        addingStat("hp", -1);
      }
      break;
    case "After the river":
      if (column == 6) {
        saving("auto-save");
      }
      break;
    case "The lost land":
      if (column == 4) {
        if (enemyArray[13].done === false) {
          promptBox(`Wtf? Who are you ? A civilian? What the hell are you doing here?<br>
            <input type='button' 
            onclick='detailEnemy(enemyArray[13], "I cant let you!"), closePromptBox()'
             value="Okay!">`);

          enemyArray[13].done = true;
        }
      }
      break;
    case "The first ruins":
      if (column == 3) {
        if (enemyArray[14].done === false) {
          promptBox(`Wtf? Who are you ? A civilian? What the hell are you doing here?<br>
        <input type='button'
         onclick='detailEnemy(enemyArray[14], "Stop!"), closePromptBox()' 
         value="Okay!">`);
          enemyArray[14].done = true;
        }
      }
      if (column == 5) {
        if (enemyArray[15].done === false) {
          promptBox(`Wtf? Who are you ? A civilian? What the hell are you doing here?<br>
                  <input type='button'
                   onclick='detailEnemy(enemyArray[15], "En guarde!"), closePromptBox()' 
                   value="Okay!">`);
          enemyArray[15].done = true;
        }
      }
      break;
    case "The second ruins":
      if (column == 3) {
        if (enemyArray[16].done === false) {
          promptBox(`Wtf? Who are you ? A civilian? What the hell are you doing here?<br>
                          <input type='button'
                           onclick='detailEnemy(enemyArray[16], "Stop!"), closePromptBox()' 
                           value="Okay!">`);
          enemyArray[16].done = true;
        }
      }
      if (column == 5) {
        if (enemyArray[17].done === false) {
          promptBox(`Wtf? Who are you ? A civilian? What the hell are you doing here?<br>
                        <input type='button'
                         onclick='detailEnemy(enemyArray[17], "En guarde!"), closePromptBox()' 
                         value="Okay!">`);
          enemyArray[17].done = true;
        }
      }
      break;
    case "The old castle":
      if (position == "3 / 6") {
        confirmMessage(
          "This green potion looks suspicious...",
          "I wanna try!",
          () => {
            greenPotion(), closePromptBox();
          }
        );
      }
      break;
    default:
      break;
  }
}
