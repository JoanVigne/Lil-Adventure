
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

function buttons(idOfThisButton, classOfThisButton, valueOfThisButton, theEvent, whereDoItAppend) {
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
    thisClass.forEach(Class => {
        Class.remove();
    });
}

// directions
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