// GENERAL VAR
let container = document.getElementById("container");

let titleH1 = document.getElementsByTagName("h1");
let saveImg = document.getElementById("save");

// GENERAL FUNCTIONS
// function to teleport somewhere
function TP(where) {
  titleH1[0].innerHTML = where;
  whereAmI();
}

function buttons(
  idOfThisButton,
  classOfThisButton,
  valueOfThisButton,
  theEvent,
  whereDoItAppend
) {
  let aButton = document.createElement("input");
  aButton.setAttribute("type", "button");
  aButton.setAttribute("id", idOfThisButton);
  aButton.setAttribute("class", classOfThisButton);
  aButton.setAttribute("value", valueOfThisButton);
  aButton.setAttribute("onclick", theEvent);
  whereDoItAppend.append(aButton);
  // exemple :
  //  buttons("start", "menuButton", "Start the adventure", "aFunction()", menuButtonContainer);
  focusThisInput(0);
}

function removeThisClass(thisOne) {
  let thisClass = document.querySelectorAll(`.${thisOne}`);
  Array.from(thisClass);
  thisClass.forEach((Class) => {
    Class.remove();
  });
}

function focusThisInput(indexOrContainer) {
  const levelUpButton = document.querySelector(".levelUpButton");
  if (levelUpButton) {
    levelUpButton.focus();
    return;
  }
  if (indexOrContainer === "alertBox") {
    const alertButton = document.querySelector(
      "#alertBox input[type='button']"
    );
    alertButton?.focus();
    return;
  }
  const promptboxON = document.querySelector("#promptBox");
  if (promptboxON) {
    promptboxON.querySelector('input[type="button"]').focus();
    return;
  }
  const inputButtons = document.querySelectorAll('input[type="button"]');
  if (typeof indexOrContainer === "number") {
    indexOrContainer = indexOrContainer.toString();
  }
  if (inputButtons.length >= 0) {
    inputButtons[indexOrContainer].focus();
    inputButtons[indexOrContainer].classList.add("focusWithArrow");
  }
}
// directions au clavier
document.addEventListener("keydown", function (event) {
  const alertBox = document.querySelector("#alertBox");
  if (alertBox) {
    switch (event.key) {
      case "Enter":
        closeHomeMadeAlert();
        break;
    }
  }
  // choix selectionner
  const inputButtons = document.querySelectorAll('input[type="button"]');

  if (inputButtons.length > 0) {
    const buttons = Array.from(inputButtons);
    const focusedButtonIndex = buttons.findIndex(
      (button) => button === document.activeElement
    );
    switch (event.key) {
      case "ArrowUp":
        if (focusedButtonIndex > 0) {
          buttons[focusedButtonIndex - 1].focus();
        } else {
          buttons[buttons.length - 1].focus();
        }
        break;
      case "ArrowDown":
        if (focusedButtonIndex < buttons.length - 1) {
          buttons[focusedButtonIndex + 1].focus();
        } else {
          buttons[0].focus();
        }
        break;
      case "Escape":
        let backButton = document.getElementById("continueTitleAndBack");
        if (backButton) {
          backFunction();
        }
      default:
        break;
    }
    return;
  }
  // MOUVEMENT SUR MAP CLASSIQUE
  switch (event.key) {
    case "ArrowUp":
      moveNorth();
      break;
    case "ArrowDown":
      moveSouth();
      break;
    case "ArrowRight":
      moveEast();
      break;
    case "ArrowLeft":
      moveWest();
      break;
    case "Enter":
      break;
    default:
      break;
  }
});
