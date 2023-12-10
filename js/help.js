// help menu

let help = document.getElementById("help");
help.addEventListener("click", helpMessage);

// WHERE AM I ASKING FOR HELP ?
function helpMessage() {
  //menu
  let itsHomeMenu = document.getElementsByClassName("menuImg");
  if (itsHomeMenu !== null) {
    helpMenuButtons(
      "What kind of help do you need?",
      "I don't understand the menu",
      explainedMenu,
      "I lost my saved games !!",
      lostOfSavedGames
    );
  }
  //on map
  let itsOnTheMap = document.getElementById("northDirection");
  if (itsOnTheMap !== null) {
    helpMenuButtons(
      "What kind of help do you need?",
      "i can't see my character anymore",
      helpPosition,
      "I lost one of my stuff",
      () =>
        homeMadeAlert(
          "sorry",
          "this bug is not fixed yet... but you are gonna find new stuff soon enought don't worry"
        )
    );
  }
  //in fight
  let itsAFight = document.getElementById("enemyContainer");
  if (itsAFight !== null) {
    helpMenuButtons(
      "What kind of help do you need?",
      "I have too many enemies, seems wrong",
      tooManyEnemies,
      "not fixed yet",
      autre
    );
  }
}

// ANSWER AND SOLUTION FUNCTIONS

// home
function explainedMenu() {
  homeMadeAlert(
    "",
    `If you already played, you hopefully 
    saved your game, so click on continue.</br></br>
    If you just arrived, Press on the red button and discover this amazing adventure !</br></br>
    The about button is to know who created all of this... if you don't already know.`
  );
}

function lostOfSavedGames() {
  homeMadeAlert(
    "",
    `You probably erased your saved games that were in the local storage of your browser
    by cleaning your browsing history.</br></br>
     But the adventure is not so long, you can speed run what you already did !`
  );
}
// in  fight
function tooManyEnemies() {
  let enemiesInContainer = document.getElementsByClassName("opponent");
  if (enemiesInContainer.length > 1) {
    enemiesInContainer[1].remove();
    closePromptBox();
    closePromptBox();
  } else {
    homeMadeAlert(
      "Everything seems ok",
      "You only have one enemy detected right now... fight!"
    );
  }
}

// on the map
function helpPosition() {
  player.style.gridArea = "8 / 4 / auto / auto";
  ("8 / 4 / auto / auto");
  closePromptBox();
  bubble("player", "i'm back baby", 0, 1);
}

function autre() {
  console.log("autre");
}
