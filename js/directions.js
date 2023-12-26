// in this document :
// - going from a map to an other

// directions click
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
// arrow creations
let northArrow = document.createElement("div");
northArrow.setAttribute("id", "north");
northArrow.setAttribute("class", "arrows");
let estArrow = document.createElement("div");
estArrow.setAttribute("id", "est");
estArrow.setAttribute("class", "arrows");
let southArrow = document.createElement("div");
southArrow.setAttribute("id", "south");
southArrow.setAttribute("class", "arrows");
let westArrow = document.createElement("div");
westArrow.setAttribute("id", "west");
westArrow.setAttribute("class", "arrows");

// appearing and disapearing arrow function
let notThisArrow = "none";
let brickWall = 'url("images/obstacles/brickWall.jpg")';
let flowers = 'url("images/floor-ground/pinkFlowers.jpg")';
let north = `url("images/northArrow.png")`;
let east = `url("images/eastArrow.png")`;
let south = `url("images/southArrow.png")`;
let west = `url("images/westArrow.png")`;
function directionArrowsOnAndOff(north, east, south, west) {
  // can be "notThisArrow"
  northDirection.style.backgroundImage = north;
  eastDirection.style.backgroundImage = east;
  southDirection.style.backgroundImage = south;
  westDirection.style.backgroundImage = west;
}

function arrowAppear() {
  container.append(northArrow);
  container.append(estArrow);
  container.append(southArrow);
  container.append(westArrow);
}
function arrowDisapear() {
  northArrow.remove();
  estArrow.remove();
  southArrow.remove();
  westArrow.remove();
}

function changeBackGroundDirections(direction, classBG) {
  const containerDirection = document.getElementById(direction);
  containerDirection.classList.add(classBG);
}

// north east south west
function toTheNorth() {
  let iAmHere = titleH1[0].innerHTML;
  let row = player.style.gridRowStart;
  let numberRow = Number(row);
  let column = player.style.gridColumnStart;
  let numberColumn = Number(column);
  // if the charactere is on this this case of the grid and go up´

  if (numberRow == 2) {
    switch (iAmHere) {
      // BEGGNING OF THE GAME { neighborhood }
      case "Home sweet home":
        titleH1[0].innerHTML = `The Garden`;
        player.style.gridRowStart = 8;
        homeMadeAlert(
          "What The Hell !!!",
          "My garden was green and full of life, what happend ?? My trees are dead and my lands are as dry as bones"
        );

        break;
      case "The Garden":
        titleH1[0].innerHTML = `The way to the village`;
        player.style.gridRowStart = 10;
        break;
      case "The way to the village":
        titleH1[0].innerHTML = `The entrance of the village`;
        player.style.gridRowStart = 10;
        break;
      // THE VILLAGE
      case "The entrance of the village":
        titleH1[0].innerHTML = `The village south`;
        player.style.gridRowStart = 10;
        break;
      case "The village south":
        titleH1[0].innerHTML = `The village center`;
        player.style.gridColumnStart = 4;
        player.style.gridRowStart = 9;
        break;
      case "The village center":
        titleH1[0].innerHTML = `The village north`;
        player.style.gridRowStart = 10;
        break;
      case "The village south-west":
        titleH1[0].innerHTML = `The village west`;
        player.style.gridRowStart = 10;
        break;
      case "The village south-east":
        titleH1[0].innerHTML = `The village east`;
        player.style.gridRowStart = 10;
        break;
      case "The village north":
        titleH1[0].innerHTML = `The north entrance of the village`;
        player.style.gridRowStart = 10;
        break;
      // END OF THE VILLAGE
      case "The north entrance of the village":
        titleH1[0].innerHTML = `The way from the village`;
        player.style.gridRowStart = 10;
        break;
      case "The way from the village":
        titleH1[0].innerHTML = `The crossroad of the north`;
        player.style.gridRowStart = 10;
        break;
      // THE CROSSROAD
      case "The crossroad of the north":
        titleH1[0].innerHTML = `The north of the crossroad`;
        player.style.gridRowStart = 10;
        break;
      case "The north of the crossroad":
        titleH1[0].innerHTML = `The army roadblock`;
        player.style.gridRowStart = 10;
        break;
      case "The local master":
        titleH1[0].innerHTML = `Tunnel entrance`;
        player.style.gridRowStart = 10;
        break;
      case "Tunnel entrance":
        titleH1[0].innerHTML = `Tunnel first`;
        player.style.gridRowStart = 10;

        break;
      case "Tunnel first":
        titleH1[0].innerHTML = `Tunnel second`;
        player.style.gridRowStart = 10;

        break;
      case "Tunnel second":
        titleH1[0].innerHTML = `Tunnel third`;
        player.style.gridRowStart = 10;
        break;
      case "Tunnel third":
        titleH1[0].innerHTML = `Tunnel fourth`;
        player.style.gridRowStart = 10;
        break;
      case "Tunnel fourth":
        titleH1[0].innerHTML = `Tunnel exit`;
        player.style.gridRowStart = 10;
        break;
      case "Tunnel exit":
        titleH1[0].innerHTML = `Random House`;
        player.style.gridRowStart = 10;
        break;
      case "Random House":
        titleH1[0].innerHTML = `The North West`;
        player.style.gridRowStart = 10;
        break;
      case "The center of the graveyard":
        titleH1[0].innerHTML = `The north of the graveyard`;
        player.style.gridRowStart = 10;
        break;
      case "The front":
        titleH1[0].innerHTML = `The northen crossroad`;
        player.style.gridRowStart = 10;
        break;
      case "The northen crossroad":
        titleH1[0].innerHTML = `The orc camp`;
        player.style.gridRowStart = 10;
        break;
      case "The orc camp":
        titleH1[0].innerHTML = `The north of the orc camp`;
        player.style.gridRowStart = 10;
        break;
      case "The north of the orc camp":
        titleH1[0].innerHTML = `The orc vanguard`;
        player.style.gridRowStart = 10;
        break;
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
        bubble("player", "I'll paint that", -1, -1);
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
      // VILLAGE
      case "The village south":
        titleH1[0].innerHTML = `The village south-east`;
        player.style.gridColumnStart = 2;
        break;
      case "The village center":
        titleH1[0].innerHTML = `The village east`;
        player.style.gridColumnStart = 2;
        break;
      case "The village south-west":
        titleH1[0].innerHTML = `The village south`;
        player.style.gridColumnStart = 2;
        break;
      case "The village west":
        titleH1[0].innerHTML = `The village center`;
        player.style.gridColumnStart = 4;
        player.style.gridRowStart = 9;
        break;
      case "The crossroad of the north":
        titleH1[0].innerHTML = "The east of the crossroad";
        player.style.gridColumnStart = 2;
        break;
      case "The west of the crossroad":
        titleH1[0].innerHTML = `The crossroad of the north`;
        player.style.gridColumnStart = 2;
        break;
      case "The land of the local master":
        titleH1[0].innerHTML = `The west of the crossroad`;
        player.style.gridColumnStart = 2;
        break;
      case "The local master's garden":
        titleH1[0].innerHTML = `The land of the local master`;
        player.style.gridColumnStart = 2;
        break;
      case "The local master's house":
        titleH1[0].innerHTML = `The local master's garden`;
        player.style.gridColumnStart = 2;
        break;
      case "The North West":
        titleH1[0].innerHTML = `The Graveyard entrance`;
        player.style.gridColumnStart = 2;
        break;
      case "The Graveyard entrance":
        titleH1[0].innerHTML = `The west of the graveyard`;
        player.style.gridColumnStart = 2;
        break;
      case "The west of the graveyard":
        titleH1[0].innerHTML = `The center of the graveyard`;
        player.style.gridColumnStart = 2;
        break;
      case "The center of the graveyard":
        titleH1[0].innerHTML = `The east of the graveyard`;
        player.style.gridColumnStart = 2;
        break;
      case "The east of the graveyard":
        titleH1[0].innerHTML = `The exit of the graveyard`;
        player.style.gridColumnStart = 2;
        break;
      case "The exit of the graveyard":
        titleH1[0].innerHTML = `The northen crossroad`;
        player.style.gridColumnStart = 2;
        break;
      case "The west of the orc camp":
        titleH1[0].innerHTML = `The orc camp`;
        player.style.gridColumnStart = 2;
        break;
      // OLD CASTLE AROUND
      case "After the river":
        titleH1[0].innerHTML = `The lost land`;
        player.style.gridColumnStart = 2;
        break;
      case "The lost land":
        titleH1[0].innerHTML = `The first ruins`;
        player.style.gridColumnStart = 2;
        break;
      case "The first ruins":
        titleH1[0].innerHTML = `The second ruins`;
        player.style.gridColumnStart = 2;
        break;
      case "The second ruins":
        titleH1[0].innerHTML = `The old castle`;
        player.style.gridColumnStart = 2;
        break;
      case "The old castle":
        titleH1[0].innerHTML = `The old castle second`;
        player.style.gridColumnStart = 2;
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
      case "The Garden":
        if (numberColumn == 4 || numberColumn == 3) {
          titleH1[0].innerHTML = `Home sweet home`;
          player.style.gridRowStart = 2;
          break;
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
      case "The village south":
        titleH1[0].innerHTML = `The entrance of the village`;
        player.style.gridRowStart = 2;
        break;
      case "The village center":
        titleH1[0].innerHTML = `The village south`;
        player.style.gridRowStart = 2;
        break;
      case "The village north":
        titleH1[0].innerHTML = `The village center`;
        player.style.gridRowStart = 2;
        break;
      case "The village west":
        titleH1[0].innerHTML = `The village south-west`;
        player.style.gridRowStart = 2;
        break;
      case "The village east":
        titleH1[0].innerHTML = `The village south-east`;
        player.style.gridRowStart = 2;
        break;

      case "The north entrance of the village":
        titleH1[0].innerHTML = `The village north`;
        player.style.gridRowStart = 2;
        break;
      case "The way from the village":
        titleH1[0].innerHTML = `The north entrance of the village`;
        player.style.gridRowStart = 2;
        break;
      // THE CROSSROAD
      case "The crossroad of the north":
        titleH1[0].innerHTML = `The way from the village`;
        player.style.gridRowStart = 2;
        break;
      case "The north of the crossroad":
        titleH1[0].innerHTML = `The crossroad of the north`;
        player.style.gridRowStart = 2;
        break;
      case "The army roadblock":
        titleH1[0].innerHTML = `The north of the crossroad`;
        player.style.gridRowStart = 2;
        break;
      // MASTER HOUSE
      case "The local master":
        titleH1[0].innerHTML = `The local master's house`;
        player.style.gridRowStart = 5;
        break;
      case "Tunnel entrance":
        titleH1[0].innerHTML = `The local master`;
        player.style.gridRowStart = 2;
        break;
      case "Tunnel first":
        titleH1[0].innerHTML = `Tunnel entrance`;
        player.style.gridRowStart = 2;
        break;
      case "Tunnel second":
        titleH1[0].innerHTML = `Tunnel first`;
        player.style.gridRowStart = 2;
        break;
      case "Tunnel third":
        titleH1[0].innerHTML = `Tunnel second`;
        player.style.gridRowStart = 2;
        break;
      case "Tunnel fourth":
        titleH1[0].innerHTML = `Tunnel third`;
        player.style.gridRowStart = 2;
        break;
      case "Tunnel exit":
        titleH1[0].innerHTML = `Tunnel fourth`;
        player.style.gridRowStart = 2;
        break;
      case "Random House":
        titleH1[0].innerHTML = `Tunnel exit`;
        player.style.gridRowStart = 2;
        break;
      // out north ouest
      case "The North West":
        titleH1[0].innerHTML = `Random House`;
        player.style.gridRowStart = 2;
        break;
      case "The north of the graveyard":
        titleH1[0].innerHTML = `The center of the graveyard`;
        player.style.gridRowStart = 2;
        break;
      case "The northen crossroad":
        titleH1[0].innerHTML = `The front`;
        player.style.gridRowStart = 2;
        homeMadeAlert(
          "Oh damn",
          "They didn't see you yet... it seems that you can go back north without being seen"
        );
        break;
      case "The orc camp":
        titleH1[0].innerHTML = `The northen crossroad`;
        player.style.gridRowStart = 2;
        break;
      case "The north of the orc camp":
        titleH1[0].innerHTML = `The orc camp`;
        player.style.gridRowStart = 2;
        break;
      /* case "The orc vanguard":
                titleH1[0].innerHTML = `The north of the orc camp`;
                player.style.gridRowStart = 2;
                break; */
      default:
        break;
    }
    whereAmI();
  }
}

function toTheWest() {
  let iAmHere = titleH1[0].innerHTML;
  let column = player.style.gridColumnStart;
  let numberColumn = Number(column);
  if (numberColumn == 2) {
    switch (iAmHere) {
      // BEGGNING OF THE GAME { neighborhood }
      case "Home sweet home":
        player.style.gridColumnStart = 2;
        break;
      case "The Garden": // dead-end
        titleH1[0].innerHTML = `The west Neighbor's`;
        player.style.gridColumnStart = 6;
        break;
      case "The east Neighbor's": // from a dead-end
        titleH1[0].innerHTML = `The Garden`;
        player.style.gridColumnStart = 6;
        break;
      // THE VILLAGE
      case "The village south":
        titleH1[0].innerHTML = `The village south-west`;
        player.style.gridColumnStart = 6;
        break;
      case "The village south-east":
        titleH1[0].innerHTML = `The village south`;
        player.style.gridColumnStart = 6;
        break;
      case "The village center":
        titleH1[0].innerHTML = `The village west`;
        player.style.gridColumnStart = 6;
        break;
      case "The village east":
        titleH1[0].innerHTML = `The village center`;
        player.style.gridColumnStart = 4;
        player.style.gridRowStart = 9;
        break;
      case "The east of the crossroad":
        titleH1[0].innerHTML = "The crossroad of the north";
        player.style.gridColumnStart = 6;
        break;
      case "The crossroad of the north":
        titleH1[0].innerHTML = `The west of the crossroad`;
        player.style.gridColumnStart = 6;
        break;
      case "The west of the crossroad":
        titleH1[0].innerHTML = `The land of the local master`;
        player.style.gridColumnStart = 6;
        break;
      case "The land of the local master":
        titleH1[0].innerHTML = `The local master's garden`;
        player.style.gridColumnStart = 6;
        break;
      case "The local master's garden":
        titleH1[0].innerHTML = `The local master's house`;
        player.style.gridColumnStart = 6;
        break;
      case "The Graveyard entrance":
        titleH1[0].innerHTML = `The North West`;
        player.style.gridColumnStart = 6;
        break;
      case "The west of the graveyard":
        titleH1[0].innerHTML = `The Graveyard entrance`;
        player.style.gridColumnStart = 6;
        break;
      case "The center of the graveyard":
        titleH1[0].innerHTML = `The west of the graveyard`;
        player.style.gridColumnStart = 6;
        break;
      case "The east of the graveyard":
        titleH1[0].innerHTML = `The center of the graveyard`;
        player.style.gridColumnStart = 6;
        break;
      case "The exit of the graveyard":
        titleH1[0].innerHTML = `The east of the graveyard`;
        player.style.gridColumnStart = 6;
        break;
      case "The northen crossroad":
        titleH1[0].innerHTML = `The exit of the graveyard`;
        player.style.gridColumnStart = 6;
        break;
      case "The orc camp":
        titleH1[0].innerHTML = `The west of the orc camp`;
        player.style.gridColumnStart = 6;
        break;
      // OLD CASTLE AROUND
      case "The lost land":
        titleH1[0].innerHTML = `After the river`;
        player.style.gridColumnStart = 6;
        break;
      case "The first ruins":
        titleH1[0].innerHTML = `The lost land`;
        player.style.gridColumnStart = 6;
        break;
      case "The second ruins":
        titleH1[0].innerHTML = `The first ruins`;
        player.style.gridColumnStart = 6;
        break;
      case "The old castle":
        titleH1[0].innerHTML = `The second ruins`;
        player.style.gridColumnStart = 6;
        break;
      case "The old castle second":
        titleH1[0].innerHTML = `The old castle`;
        player.style.gridColumnStart = 6;
        break;
      default:
        break;
    }
    whereAmI();
  }
}
