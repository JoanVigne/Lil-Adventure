// MOVING THE PLAYER
function moveNorth() {
  let row = player.style.gridRowStart;
  let numberRow = Number(row);
  if (numberRow == 2) {
    toTheNorth();
  } else {
    player.style.gridRowStart = numberRow -= 1;
  }
  playerPositionEvent();
}

function moveEast() {
  let column = player.style.gridColumnStart;
  let numberColumn = Number(column);
  if (numberColumn == 6) {
    toTheEast();
  } else {
    player.style.gridColumnStart = numberColumn += 1;
  }
  playerPositionEvent();
}
function moveSouth() {
  let row = player.style.gridRowStart;
  let numberRow = Number(row);
  if (numberRow == 10) {
    toTheSouth();
  } else {
    player.style.gridRowStart = numberRow += 1;
  }
  playerPositionEvent();
}
function moveWest() {
  let column = player.style.gridColumnStart;
  let numberColumn = Number(column);
  if (numberColumn == 2) {
    toTheWest();
  } else {
    player.style.gridColumnStart = numberColumn -= 1;
  }
  playerPositionEvent();
}
