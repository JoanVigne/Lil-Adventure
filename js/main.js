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
}

function removeThisClass(thisOne) {
  let thisClass = document.querySelectorAll(`.${thisOne}`);
  Array.from(thisClass);
  thisClass.forEach((Class) => {
    Class.remove();
  });
}

// directions au click
let northDirection = document.createElement("div");
northDirection.setAttribute("id", "northDirection");
let eastDirection = document.createElement("div");
eastDirection.setAttribute("id", "eastDirection");
let southDirection = document.createElement("div");
southDirection.setAttribute("id", "southDirection");
let westDirection = document.createElement("div");
westDirection.setAttribute("id", "westDirection");

function appearDirections() {
  container.append(northDirection);
  northDirection.addEventListener("click", moveNorth);
  container.append(eastDirection);
  eastDirection.addEventListener("click", moveEast);
  container.append(southDirection);
  southDirection.addEventListener("click", moveSouth);
  container.append(westDirection);
  westDirection.addEventListener("click", moveWest);
}
function directionDisappear() {
  northDirection.remove();
  eastDirection.remove();
  southDirection.remove();
  westDirection.remove();
}
// directions au clavier
document.addEventListener("keydown", function (event) {
  const alertBox = document.querySelector("#alertBox");
  const choice = document.querySelector("#promptBox");
  if (choice) {
    const buttons = Array.from(choice.querySelectorAll('input[type="button"]'));
    const focusedButtonIndex = buttons.findIndex(
      (button) => button === document.activeElement
    );
    console.log(focusedButtonIndex);
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
      default:
        break;
    }
    return;
  }
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
      if (alertBox) {
        closeHomeMadeAlert();
      }
      break;
    default:
      break;
  }
});
