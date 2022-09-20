// in this document you can :
// - going from a map to an other
// 

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

// CHANGE MAP

function toTheNorth() {
    let iAmHere = titleH1[0].innerHTML;
    let row = player.style.gridRowStart;
    let numberRow = Number(row);
    let column = player.style.gridColumnStart;
    let numberColumn = Number(column);
    // if the charactere is on this this case of the grid and go up
    if (numberRow == 2) {
        switch (iAmHere) {
            // BEGGNING OF THE GAME { neighborhood }
            case "Home sweet home":
                {
                    if (numberColumn == 4) {
                        titleH1[0].innerHTML = `The Garden`;
                        player.style.gridRowStart = 9;
                        homeMadeAlert("What The Hell !!!",
                            "My garden was green and full of life, what happend ?? My trees are dead and my lands are as dry as bones");
                    }
                }
                break;
            case "The Garden":
                titleH1[0].innerHTML = `The way to the village`;
                player.style.gridRowStart = 10;
                bubble("Here too?!", player);
                break;
            case "The way to the village":
                titleH1[0].innerHTML = `The entrance of the village`;
                player.style.gridRowStart = 10;
                break;
            case "The entrance of the village":
                titleH1[0].innerHTML = `The village`;
                player.style.gridRowStart = 10;
                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

            default:
                break;
        }
        whereAmI();
    }
}
function toTheEast() {
    let iAmHere = titleH1[0].innerHTML;
    let row = player.style.gridRowStart;
    let numberRow = Number(row);
    let column = player.style.gridColumnStart;
    let numberColumn = Number(column);
    if (numberColumn == 6) {
        switch (iAmHere) {
            // BEGGNING OF THE GAME { neighborhood }
            case "Home sweet home":
                bubble("I'll paint that", player);
                break;
            case "The Garden":
                titleH1[0].innerHTML = `The east Neighbor's`;
                player.style.gridColumnStart = 2;
                break;
            case "The west Neighbor's":
                // GOING BACK FROM THE DEAD END
                titleH1[0].innerHTML = `The Garden`;
                player.style.gridColumnStart = 2;
                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            default:
                break;
        }
        whereAmI();
    }
}
function toTheSouth() {
    let iAmHere = titleH1[0].innerHTML;

    let row = player.style.gridRowStart;
    let numberRow = Number(row);
    let column = player.style.gridColumnStart;
    let numberColumn = Number(column);
    if (numberRow == 10) {
        switch (iAmHere) {
            // BEGGNING OF THE GAME { neighborhood }
            case "Home sweet home":
                bubble("It is a wall", player);
                break;
            case "The Garden":
                if (numberColumn == 4) {
                    titleH1[0].innerHTML = `Home sweet home`;
                    player.style.gridRowStart = 2;
                    bubble("Nothing to do here...", player)
                }
                break;
            case "The way to the village":
                titleH1[0].innerHTML = `The Garden`;
                player.style.gridRowStart = 2;
                break;
            case "The entrance of the village":
                titleH1[0].innerHTML = `The way to the village`;
                player.style.gridRowStart = 2;
                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            default:
                break;
        }
        whereAmI();
    }
}

function toTheWest() {
    let iAmHere = titleH1[0].innerHTML;
    let row = player.style.gridRowStart;
    let numberRow = Number(row);
    let column = player.style.gridColumnStart;
    let numberColumn = Number(column);
    if (numberColumn == 2) {
        switch (iAmHere) {
            // BEGGNING OF THE GAME { neighborhood }
            case "Home sweet home":
                bubble("It is a wall", player);
                break;
            case "The Garden":
                // DEAD END
                titleH1[0].innerHTML = `The west Neighbor's`;
                player.style.gridColumnStart = 6;
                break;
            case "The east Neighbor's":
                // FROM A DEAD END
                titleH1[0].innerHTML = `The Garden`;
                player.style.gridColumnStart = 6;
                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            case "Menu":

                break;
            default:
                break;
        }
        whereAmI();
    }
}