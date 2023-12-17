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
}

// CONTINUE MENU IN LOAD.JS

function start() {
  quitMenu();
  appearDirections();
  titleH1[0].innerHTML = `Home sweet home`;
  container.append(player);
  playerStuff();
  whereAmI();
  player.style.gridColumn = 4;
  player.style.gridRow = 6;
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
