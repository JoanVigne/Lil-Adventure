
// MOVING THE PLAYER
function moveNorth() {
    let column = player.style.gridColumnStart;
    let numberColumn = Number(column);
    let row = player.style.gridRowStart;
    let numberRow = Number(row);
    // FOR THE LITTLE SCENARIO OF THE ENTRANCE OF THE VILLAGE
    if (titleH1[0].innerHTML == "The entrance of the village") {
        if (numberRow == 6) {
            if (numberRow == 6 && numberColumn == 4) {
                homeMadeAlert("Hey you! stop !", " Who are you ?? <br>.... Oh hey bro, you can pass of course, we don't know what happend but everything is dry around..");
                player.style.gridRowStart = numberRow -= 2;
                row = 3;
            }
            else if (numberRow == 6) {
                bubble("They won't let me", player);
                player.style.gridRowStart = numberRow += 1;
            }
        }
        else if (numberRow == 2) {
            toTheNorth();
        }
        else {
            player.style.gridRowStart = numberRow -= 1;
        }
    }
    // FOR ALL THE PAGES
    else if (numberRow == 2) {
        toTheNorth();
    }
    else {
        player.style.gridRowStart = numberRow -= 1;
        console.log("dans le eslse?");
    }
}

function moveEast() {
    let column = player.style.gridColumnStart;
    let numberColumn = Number(column);
    if (numberColumn == 6) {
        toTheEast();
    }
    else {
        player.style.gridColumnStart = numberColumn += 1;
    }
}
function moveSouth() {
    let row = player.style.gridRowStart;
    let numberRow = Number(row);

    if (numberRow == 10) {
        toTheSouth();
    }
    else {
        player.style.gridRowStart = numberRow += 1;
    }
}
function moveWest() {
    let column = player.style.gridColumnStart;
    let numberColumn = Number(column);

    if (numberColumn == 2) {
        toTheWest();
    }
    else {
        player.style.gridColumnStart = numberColumn -= 1;
    }
}

function setTimeOutMoves(direction) {
    setTimeout(direction, 1000);
}

