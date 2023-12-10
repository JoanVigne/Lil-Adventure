window.onload = menu();

function menu() {
  // function buttons(idOfThisButton, classOfThisButton, valueOfThisButton, theEvent, whereDoItAppend)
  titleH1[0].innerHTML = `Menu`;

  let menuButtonContainer = document.createElement("fieldset");
  container.append(menuButtonContainer);
  container.classList.add("menuImg");

  buttons(
    "continue",
    "menuButton",
    "Continue the adventure",
    "continueGame()",
    menuButtonContainer
  );
  buttons(
    "startOver",
    "menuButton",
    "Start new game",
    "start()",
    menuButtonContainer
  );
  buttons(
    "about",
    "menuButton",
    "About the creator",
    "about()",
    menuButtonContainer
  );

  localStorage.setItem(
    "gameStuff",
    JSON.stringify({
      face: "joan",
      weapon: "bambou",
      shield: "",
      top: "startShirt",
      hat: "startHat",
      hp: 10,
      armor: 0,
      force: 0,
      spe: null,
    })
  );
}

// CONTINUE MENU IN LOAD.JS

function start() {
  /*   clear local storage to reboot game except saves*/
  let localStorageSaves = localStorage.getItem("saves");
  if (localStorageSaves === "null") {
    localStorage.clear();
    let arrayOfSaves = [];
    localStorage.setItem("saves", JSON.stringify(arrayOfSaves));
  } else {
    localStorage.setItem("saves", localStorageSaves);
  }
  quitMenu();
  appearDirections();
  titleH1[0].innerHTML = `Home sweet home`;
  let newGameStuff = {
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
  localStorage.setItem("gameStuff", JSON.stringify(newGameStuff));
  container.append(player);
  playerStuff();
  whereAmI();
  homeMadeAlert(
    "Good morning sunshine",
    "Welcome home, you wake up as usual in your little house"
  );
}

function quitMenu() {
  let menuButtonContainer = document.getElementsByTagName("fieldset");
  menuButtonContainer[0].remove();
}

function about() {
  homeMadeAlert(
    "Joan Vigne",
    '<a href="https://joanvigne.github.io/" target="_blank" >My portfolio</a>'
  );
}
