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
    `If you've already played, you hopefully have
    saved your game, so click on "Continue the adventure".</br></br>
    If you've just arrived, Press the red button and embark on this amazing adventure!</br></br>
    The "About" button provides informations about who created all of this...`
  );
}

function lostOfSavedGames() {
  homeMadeAlert(
    "",
    `If you've cleaned your browsing history, you likely erased your saved games stored in your browser's local storage.</br></br>
    But don't worry, the adventure isn't so long; you can speed run through what you've already accomplished!`
  );
}
// in  fight
function tooManyEnemies() {
  let enemiesInContainer = document.getElementsByClassName("opponent");

  if (enemiesInContainer.length <= 1) {
    homeMadeAlert(
      "Everything seems ok",
      "You only have one enemy detected right now... fight!"
    );
    return;
  }
  enemiesInContainer[1].remove();
  closePromptBox();
  closePromptBox();

  /*   if (enemiesInContainer.length > 1) {
    enemiesInContainer[1].remove();
    closePromptBox();
    closePromptBox();
  } else {
    homeMadeAlert(
      "Everything seems ok",
      "You only have one enemy detected right now... fight!"
    );
  } */
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
