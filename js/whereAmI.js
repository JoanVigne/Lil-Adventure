// to put the good background, the decorations and obstacles


// appearing and disapearing arrow function
let notThisArrow = "none";
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


function whereAmI() {
    let containerBGI = container.classList;

    let iAmHere = titleH1[0].innerHTML;
    // to delet the previous obstacles of the last visited map
    deletAllObstacle();
    deletAllPeople();
    switch (iAmHere) {
        case "Menu":
            container.classList.add("menuImg");
            break;

        // BEGGNING OF THE GAME { neighborhood }
        case "Home sweet home":
            container.classList.replace(containerBGI, "homeSweetHome");
            obstacleCreation1("lightFromOutside", 4, 2);
            obstacleCreation1("tableMirror", 2, 4);
            obstacleCreation4("purpleBed", 4, 9);
            directionArrowsOnAndOff(north, notThisArrow, notThisArrow, notThisArrow);
            break;
        case "The Garden":
            container.classList.replace(containerBGI, "dryGround");
            obstacleCreation4("home", 3, 9);
            obstacleCreation1("pineTreeBlack", 5, 3);
            obstacleCreation1("leftTreeBlack", 2, 8);
            obstacleCreation1("bigTreeBlack", 5, 7);
            directionArrowsOnAndOff(north, east, south, west);
            break;
        case "The west Neighbor's":
            container.classList.replace(containerBGI, "dryGround");
            obstacleCreation6("burningHouse", 2, 5);
            bubble("Oh damn !", player);
            directionArrowsOnAndOff(notThisArrow, east, notThisArrow, notThisArrow);
            break;
        case "The east Neighbor's":
            container.classList.replace(containerBGI, "dryGround");
            obstacleCreation6("burningHouse", 5, 2);
            bubble("That's no good", player);
            directionArrowsOnAndOff(notThisArrow, notThisArrow, notThisArrow, west);
            break;
        case "The way to the village":
            obstacleCreation4("burningHouse", 5, 2);
            obstacleCreation4("burningHouse", 2, 8);
            obstacleCreation4("burningHouse", 5, 6);
            directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
            break;
        case "The entrance of the village":
            container.classList.replace(containerBGI, "dryGround");
            obstacleCreation1("villageGate", 4, 4);
            obstacleCreation1("brownWall", 2, 4);
            obstacleCreation1("brownWall", 3, 4);
            obstacleCreation1("brownWall", 5, 4);
            obstacleCreation1("brownWall", 6, 4);
            creationOfPeople("basicGuard", 5, 5);
            creationOfPeople("basicGuard", 3, 5);
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

}

