// MENU CONTINUE
/* function continueGame() {
  let saves = localStorage.getItem("saves");
  if (saves === null) {
    homeMadeAlert("No game saved yet", "press Start New Game to play");
    return;
  }

  let menuButtonContainer = document.getElementsByTagName("fieldset");
  if (menuButtonContainer.length < 2) {
    console.log(menuButtonContainer.length);
    if (menuButtonContainer.length === 0) {
      return;
    }
    quitMenu();
  }

  const gameSaved = JSON.parse(saves);

  const continueMenu = document.createElement("div");
  continueMenu.setAttribute("id", "continueMenu");

  let theGameSaved = document.createElement("div");
  theGameSaved.setAttribute("id", "theGameSaved");

  continueMenu.innerHTML = `<div id="continueTitleAndBack">
  <img src="images/westArrow.png" alt="back" onClick="backFunction()">
  <h5>Which save do you want to use?</h5></div>
            <br>  `;

  gameSaved.forEach((element) => {
    let oneSaving = document.createElement("div");
    oneSaving.classList.add("savings");

    let title = element[0];
    let location = element[1];
    let stuff = element[2];
    let timeOfSaving = element[3];
    let position = element[4];
    let enemyArray = element[5];

    let space = " ";
    let elementContainer = document.createElement("input");
    elementContainer.type = "button";

    elementContainer.addEventListener("click", () =>
      load(title, location, JSON.parse(stuff), position, JSON.parse(enemyArray))
    );

    let buttonDelet = document.createElement("button");
    buttonDelet.innerHTML = "x";
    buttonDelet.setAttribute("class", "buttonDelet");
    buttonDelet.addEventListener("click", () => {
      deletASaving(element);
    });
    elementContainer.value = title + space + timeOfSaving;
    oneSaving.append(elementContainer, buttonDelet);
    theGameSaved.append(oneSaving);
  });

  continueMenu.append(theGameSaved);
  container.append(continueMenu);
  focusThisInput(0);

  function deletASaving(element) {
    confirmMessage(
      "Do you really want to delet this save?",
      "yes, delet it",
      () => {
        let index = gameSaved.indexOf(element);
        gameSaved.splice(index, 1);
        closePromptBox();
        localStorage.setItem("saves", JSON.stringify(gameSaved));
      }
    );
  }
} */
// creation var global au lieu de getItem tout le temps
const myGames = JSON.parse(localStorage.getItem("saves"));
console.log(myGames);
// nouvelle
function continueGame() {
  if (myGames === null || myGames.length === 0) {
    homeMadeAlert("No game saved yet", "press Start New Game to play");
    return;
  }
  let menuButtonContainer = document.getElementsByTagName("fieldset");
  if (menuButtonContainer.length < 2) {
    console.log(menuButtonContainer.length);
    if (menuButtonContainer.length === 0) {
      return;
    }
    quitMenu();
  }
  const continueMenu = document.createElement("div");
  continueMenu.setAttribute("id", "continueMenu");

  let theGameSaved = document.createElement("div");
  theGameSaved.setAttribute("id", "theGameSaved");

  continueMenu.innerHTML = `<div id="continueTitleAndBack">
  <img src="images/westArrow.png" alt="back" onClick="backFunction()">
  <h5>Which save do you want to use?</h5></div>
            <br>  `;

  continueMenu.append(theGameSaved);
  container.append(continueMenu);

  displayMyGames();
  /*   focusThisInput(0); */
}
function removeDisplayedGames() {
  const allTheSavingDisplayed = document.querySelectorAll(".savings");
  if (allTheSavingDisplayed.length === 0) {
    return;
  }
  allTheSavingDisplayed.forEach((element) => {
    element.remove();
  });
}
function displayMyGames() {
  removeDisplayedGames();
  myGames.forEach((element) => {
    let oneSaving = document.createElement("div");
    oneSaving.classList.add("savings");
    let title = element[0];
    let location = element[1];
    let stuff = element[2];
    let timeOfSaving = element[3];
    let position = element[4];
    let enemyArray = element[5];
    let elementContainer = document.createElement("input");
    elementContainer.type = "button";
    elementContainer.addEventListener("click", () =>
      load(title, location, JSON.parse(stuff), position, JSON.parse(enemyArray))
    );
    const containerTimeOfSaving = document.createElement("p");
    containerTimeOfSaving.innerHTML = timeOfSaving;
    let buttonDelet = document.createElement("button");
    buttonDelet.innerHTML = "x";
    buttonDelet.setAttribute("class", "buttonDelet");
    buttonDelet.addEventListener("click", () => {
      confirmMessage(
        "Do you really want to delete this save ?",
        "yes, i am sure",
        () => {
          // modifier "myGames" plutot que gamesaved
          myGames.splice(myGames.indexOf(element), 1);
          closePromptBox();
          localStorage.setItem("saves", JSON.stringify(myGames));
          displayMyGames();
        }
      );
    });
    elementContainer.value = title;
    oneSaving.append(elementContainer, containerTimeOfSaving, buttonDelet);
    theGameSaved.append(oneSaving);
  });
}

// LOAD AND START PLAYING
function load(title, location, stuff, position, enemies) {
  let continueMenu = document.getElementById("continueMenu");
  continueMenu.remove();

  appearDirections();
  titleH1[0].innerHTML = location;
  gameStuffData = stuff;
  enemyArray = enemies;

  container.append(player);
  player.style.gridArea = position;
  playerStuff();
  whereAmI();
  homeMadeAlert(
    "Game Loaded.",
    `The saved game you loaded is named "${title}".<br>You are here : <br> ${location}. <br> Good luck Have fun`
  );
}

function backFunction() {
  let continueMenu = document.getElementById("continueMenu");
  continueMenu.remove();
  menu();
}
