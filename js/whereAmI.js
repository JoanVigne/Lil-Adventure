// to put the good background, the decorations and obstacles

function whereAmI() {
  let containerBGI = container.classList;
  playerStuff();

  xpAndLevelDisplay();
  let iAmHere = titleH1[0].innerHTML;
  // to delet the previous obstacles of the last visited map
  deletAllObstacle();
  deletAllPeople();
  //

  switch (iAmHere) {
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
      obstacleCreation4("bigTreeBlack", 5, 7);
      directionArrowsOnAndOff(north, east, south, west);
      break;
    case "The west Neighbor's":
      container.classList.replace(containerBGI, "dryGround");
      obstacleCreationSPAN("burningHouse", 2, 5, 2, 2);
      obstacleCreationSPAN("leftTreeBlack", 2, 2, 3, 3);
      bubble("player", "Oh damn !", 0, -1);
      directionArrowsOnAndOff(notThisArrow, east, notThisArrow, notThisArrow);
      break;
    case "The east Neighbor's":
      container.classList.replace(containerBGI, "dryGround");
      obstacleCreationSPAN("burningHouse", 4, 2, 3, 3);
      obstacleCreationSPAN("bigTreeBlack", 5, 8, 2, 2);
      bubble("player", "That's no good", 0, -1);
      directionArrowsOnAndOff(notThisArrow, notThisArrow, notThisArrow, west);
      break;
    case "The way to the village":
      container.classList.replace(containerBGI, "dryGround");
      obstacleCreation4("burningHouse", 5, 2);
      obstacleCreation4("burningHouse", 2, 8);
      obstacleCreation4("burningHouse", 5, 6);
      obstacleCreation4("pineTreeBlack", 2, 3);
      obstacleCreation1("leftTreeBlack", 3, 7);
      obstacleCreation1("bigTreeBlack", 6, 9);
      directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
      bubble("player", "Here too?!", -1, -1);
      break;
    // THE VILLAGE
    case "The entrance of the village":
      container.classList.replace(containerBGI, "dryGround");
      obstacleCreation1("villageGate", 4, 4);
      obstacleCreation1("brickWall", 2, 2);
      obstacleCreation1("brickWall", 2, 3);
      obstacleCreation1("brickWall", 2, 4);
      obstacleCreation1("brickWall", 3, 4);
      obstacleCreation1("brickWall", 5, 4);
      obstacleCreation1("brickWall", 6, 4);
      obstacleCreation1("brickWall", 6, 3);
      obstacleCreation1("brickWall", 6, 2);
      creationOfPeople("basicGuard", 5, 5);
      creationOfPeople("basicGuard", 3, 5);
      break;
    case "The village south":
      container.classList.replace(containerBGI, "cityFloorHolly");
      obstacleCreationSPAN("cityRoad", 4, 2, 1, 9);
      obstacleCreationSPAN("cityRoad", 2, 4, 5, 1);
      obstacleCreation1("brickWall", 2, 10);
      obstacleCreation1("brickWall", 6, 10);
      obstacleCreation4("home", 2, 2);
      obstacleCreation4("home", 5, 2);
      directionArrowsOnAndOff(north, east, south, west);
      break;
    case "The village south-west":
      // corner bottom left
      obstacleCreation1("brickWall", 1, 11);

      obstacleCreationSPAN("cityRoad", 5, 2, 1, 9);
      obstacleCreationSPAN("cityRoad", 5, 4, 2, 1);
      obstacleCreation4("home", 3, 2);
      obstacleCreationSPAN("home", 3, 4, 2, 3);
      obstacleCreationSPAN("home", 3, 7, 2, 3);

      // obstacleCreation1("brownWall", col, row, spanCol, spanRow);
      directionArrowsOnAndOff(north, east, brickWall, brickWall);
      break;
    case "The village west":
      // corner left top
      obstacleCreation1("brickWall", 1, 1);

      obstacleCreationSPAN("cityRoad", 5, 5, 1, 6);
      obstacleCreationSPAN("cityRoad", 5, 5, 2, 1);
      obstacleCreation4("home", 3, 3);
      obstacleCreation4("home", 5, 3);

      directionArrowsOnAndOff(brickWall, east, south, brickWall);
      break;
    case "The village south-east":
      obstacleCreationSPAN("cityRoad", 4, 2, 1, 2);
      obstacleCreationSPAN("cityRoad", 4, 4, 1, 2);

      obstacleCreationSPAN("cityRoad", 3, 5, 1, 2);
      obstacleCreationSPAN("cityRoad", 3, 7, 1, 2);
      obstacleCreationSPAN("cityRoad", 3, 9, 1, 2);
      obstacleCreationSPAN("cityRoad", 4, 2, 1, 2);

      obstacleCreationSPAN("cityRoad", 2, 4, 2, 1);

      obstacleCreationSPAN("home", 4, 8, 3, 3);
      obstacleCreationSPAN("home", 4, 5, 3, 3);
      // corner bottom right
      obstacleCreation1("brickWall", 7, 11);

      directionArrowsOnAndOff(north, brickWall, brickWall, west);
      break;
    case "The village east":
      obstacleCreationSPAN("cityRoad", 2, 6, 2, 1);
      obstacleCreationSPAN("cityRoad", 4, 2, 1, 2);
      obstacleCreationSPAN("cityRoad", 4, 4, 1, 2);
      obstacleCreationSPAN("cityRoad", 4, 6, 1, 2);
      obstacleCreationSPAN("cityRoad", 4, 8, 1, 2);
      obstacleCreationSPAN("cityRoad", 4, 10, 1, 1);
      // corner right top
      obstacleCreation1("brickWall", 7, 1);

      obstacleCreationSPAN("home", 5, 2, 2, 2);
      obstacleCreationSPAN("home", 5, 5, 2, 2);
      obstacleCreationSPAN("home", 5, 7, 2, 2);

      directionArrowsOnAndOff(brickWall, brickWall, south, west);
      break;
    case "The village center":
      obstacleCreationSPAN("cityHall2", 3, 3, 3, 5);
      creationOfPeople("basicGuard", 3, 7);
      creationOfPeople("basicGuard", 5, 7);
      creationOfPeople("farmerMan", 3, 10);
      creationOfPeople("farmerWoman", 4, 10);
      creationOfPeople("farmerBoy", 5, 10);
      creationOfPeople("detective", 6, 10);
      creationOfPeople("goodMan", 6, 9);
      creationOfPeople("oldWoman", 6, 7);
      creationOfPeople("priest", 2, 7);
      /*       creationOfPeople("girl", 2, 8); */
      creationOfPeople("mayor", 4, 7);
      creationOfPeople("rogue", 3, 9);
      directionArrowsOnAndOff(north, east, south, west);
      theVillageCenterMessage();

      break;
    case "The village north":
      container.classList.replace(containerBGI, "cityFloorHolly");
      // corner left top
      obstacleCreation1("brickWall", 1, 1);
      // corner right top
      obstacleCreation1("brickWall", 7, 1);
      // corner bottom right
      obstacleCreation1("brickWall", 7, 11);
      // corner bottom left
      obstacleCreation1("brickWall", 1, 11);

      directionArrowsOnAndOff(north, brickWall, south, brickWall);
      break;
    // END OF THE VILLAGE
    case "The north entrance of the village":
      container.classList.replace(containerBGI, "dryGround");
      obstacleCreation1("villageGate", 4, 8);
      obstacleCreation1("brickWall", 2, 10);
      obstacleCreation1("brickWall", 2, 9);
      obstacleCreation1("brickWall", 2, 8);
      obstacleCreation1("brickWall", 3, 8);
      obstacleCreation1("brickWall", 5, 8);
      obstacleCreation1("brickWall", 6, 8);
      obstacleCreation1("brickWall", 6, 9);
      obstacleCreation1("brickWall", 6, 10);
      creationOfPeople("basicGuard", 5, 7);
      bubble("basicGuard", "Good luck!", 0, -1);
      creationOfPeople("basicGuard", 3, 7);
      directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
      break;
    case "The way from the village":
      directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
      break;
    case "The crossroad of the north":
      container.classList.replace(containerBGI, "dryGround");
      directionArrowsOnAndOff(north, east, south, west);
      obstacleCreation1("dryGround", 4, 10);
      obstacleCreation1("dryGround", 4, 9);
      obstacleCreation1("dryGround", 4, 8);
      obstacleCreation1("dryGround", 4, 7);
      obstacleCreation1("dryGround", 4, 6);
      obstacleCreation1("dryGround", 4, 5);
      obstacleCreation1("dryGround", 4, 4);
      obstacleCreation1("dryGround", 4, 3);
      obstacleCreation1("dryGround", 4, 2);
      obstacleCreation1("dryGround", 2, 6);
      obstacleCreation1("dryGround", 3, 6);
      obstacleCreation1("dryGround", 5, 6);
      obstacleCreation1("dryGround", 6, 6);

      //
      obstacleCreation1("sign", 3, 5);
      obstacleCreationSPAN("burningHouse", 5, 4, 2, 2);
      break;
    // THE EAST
    case "The east of the crossroad":
      homeMadeAlert(
        "Woaw",
        `This water looks deep ! Unfortunately, I never learned how to swim ... <br>
            Here was a bridge... so it seems that i have to go back.`
      );
      container.classList.replace(containerBGI, "dryGround");
      directionArrowsOnAndOff(notThisArrow, notThisArrow, notThisArrow, west);
      obstacleCreation1("dryGround", 4, 6);
      obstacleCreation1("dryGround", 2, 6);
      obstacleCreation1("dryGround", 3, 6);
      //
      obstacleCreationSPAN("blueWater", 5, 2, 2, 9);
      break;
    // THE NORTH
    case "The north of the crossroad":
      container.classList.replace(containerBGI, "dryGround");
      directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
      obstacleCreation1("dryGround", 4, 10);
      obstacleCreation1("dryGround", 4, 9);
      obstacleCreation1("dryGround", 4, 8);
      obstacleCreation1("dryGround", 4, 7);
      obstacleCreation1("dryGround", 4, 6);
      obstacleCreation1("dryGround", 4, 5);
      obstacleCreation1("dryGround", 4, 4);
      obstacleCreation1("dryGround", 4, 3);
      obstacleCreation1("dryGround", 4, 2);
      //
      obstacleCreationSPAN("burningHouse", 2, 4, 2, 2);
      obstacleCreation4("pineTreeBlack", 5, 3);
      obstacleCreation1("leftTreeBlack", 3, 7);
      obstacleCreation1("bigTreeBlack", 6, 9);
      break;
    case "The army roadblock":
      directionArrowsOnAndOff(notThisArrow, notThisArrow, south, notThisArrow);
      creationOfPeople("basicGuard", 2, 2);
      creationOfPeople("basicGuard", 3, 2);
      creationOfPeople("basicGuard", 4, 2);
      creationOfPeople("basicGuard", 5, 2);
      creationOfPeople("basicGuard", 6, 2);
      bubble("basicGuard", "Back off", 1, 1);
      break;
    // THE WEST OF THE CROSSROAD
    case "The west of the crossroad":
      container.classList.replace(containerBGI, "dryGround");
      directionArrowsOnAndOff(notThisArrow, east, notThisArrow, west);
      obstacleCreation4("pineTreeBlack", 5, 3);
      obstacleCreation4("palmTreeBlack", 3, 8);
      obstacleCreation4("palmTreeBlack", 5, 9);
      obstacleCreation1("lightFromOutside", 2, 4);
      obstacleCreation1("lightFromOutside", 2, 5);
      obstacleCreation1("lightFromOutside", 2, 6);
      obstacleCreation1("lightFromOutside", 2, 7);
      obstacleCreation1("lightFromOutside", 2, 8);
      obstacleCreation1("grassClose", 2, 2);
      obstacleCreation1("grassClose", 2, 3);
      obstacleCreation1("grassClose", 2, 9);
      obstacleCreation1("grassClose", 2, 10);
      break;
    case "The land of the local master":
      container.classList.replace(containerBGI, "grass");
      directionArrowsOnAndOff(notThisArrow, east, notThisArrow, west);
      obstacleCreation4("palmTreeFresh", 2, 2);
      obstacleCreation4("palmTreeFresh", 2, 9);
      obstacleCreation4("palmTreeFresh", 5, 2);
      obstacleCreation4("palmTreeFresh", 5, 9);

      break;
    case "The local master's garden":
      directionArrowsOnAndOff(notThisArrow, east, notThisArrow, west);
      obstacleCreation1("pinkFlowers", 2, 2);
      obstacleCreation1("pinkFlowers", 3, 2);
      obstacleCreation1("pinkFlowers", 4, 2);
      obstacleCreation1("pinkFlowers", 5, 2);
      obstacleCreation1("pinkFlowers", 6, 2);
      obstacleCreation1("pinkFlowers", 2, 10);
      obstacleCreation1("pinkFlowers", 3, 10);
      obstacleCreation1("pinkFlowers", 4, 10);
      obstacleCreation1("pinkFlowers", 5, 10);
      obstacleCreation1("pinkFlowers", 6, 10);

      obstacleCreation1("purpleFlowers", 2, 3);
      obstacleCreation1("purpleFlowers", 2, 4);
      obstacleCreation1("purpleFlowers", 3, 3);
      obstacleCreation1("purpleFlowers", 3, 4);

      obstacleCreation1("redFlowers", 2, 8);
      obstacleCreation1("redFlowers", 2, 9);
      obstacleCreation1("redFlowers", 3, 8);
      obstacleCreation1("redFlowers", 3, 9);

      obstacleCreation1("yellowFlowers", 4, 3);
      obstacleCreation1("yellowFlowers", 4, 4);

      obstacleCreation1("yellowFlowers", 4, 8);
      obstacleCreation1("yellowFlowers", 4, 9);

      obstacleCreation1("cityRoad", 2, 6);
      obstacleCreation1("cityRoad", 3, 6);
      obstacleCreation1("cityRoad", 4, 6);
      obstacleCreation1("cityRoad", 5, 6);
      obstacleCreation1("cityRoad", 6, 6);

      break;
    case "The local master's house":
      directionArrowsOnAndOff(notThisArrow, east, notThisArrow, notThisArrow);
      container.classList.replace(containerBGI, "grass");
      obstacleCreationSPAN("masterHouse", 3, 2, 3, 3);

      obstacleCreation1("purpleFlowers", 2, 2);
      obstacleCreation1("purpleFlowers", 2, 3);
      obstacleCreation1("purpleFlowers", 6, 2);
      obstacleCreation1("purpleFlowers", 6, 3);

      obstacleCreation1("cityRoad", 4, 5);
      obstacleCreation1("cityRoad", 4, 6);
      obstacleCreation1("cityRoad", 5, 6);
      obstacleCreation1("cityRoad", 6, 6);
      localMasterPlace();
      break;
    case "The local master":
      container.classList.replace(containerBGI, "homeSweetHome");
      obstacleCreationSPAN("purpleBed", 4, 5, 3, 3);
      creationOfPeople("smallVence", 5, 5);
      // scenarios.js
      let localMasterScenario = localStorage.getItem("localMaster");
      if (localMasterScenario == 4) {
        appearDirections();
        directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
      } else {
        localMasterPlace();
      }
      break;
    case "Tunnel entrance":
      container.classList.replace(containerBGI, "tunnelEntrance");
      directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
      obstacleCreation1("barrel", 3, 3);
      obstacleCreation1("barrel", 5, 7);
      obstacleCreation1("barrel", 5, 8);
      obstacleCreation1("barrel", 6, 7);
      obstacleCreation1("barrel", 2, 9);
      obstacleCreation1("barrel", 6, 8);
      bubble("player", "It's so dark!", 0, -1);
      const venceScenarioStorage = localStorage.getItem("localMaster");
      if (venceScenarioStorage === "4") {
        enemyArray[2].done = true;
        localStorage.removeItem("localMaster");
        localStorage.removeItem("sunFlower");
      }
      break;
    case "Tunnel first":
      container.classList.replace(containerBGI, "tunnel");
      obstacleCreation1("stones", 6, 8);
      obstacleCreation1("stones", 6, 9);
      obstacleCreation1("stones", 3, 5);
      obstacleCreation1("stones", 4, 5);
      obstacleCreation1("stones", 3, 6);
      obstacleCreation1("stones", 4, 6);
      obstacleCreation1("stones", 5, 5);

      obstacleCreation1("spiderWeb", 2, 2);
      obstacleCreation1("spiderWeb", 6, 2);
      break;
    case "Tunnel second":
      container.classList.replace(containerBGI, "tunnel");
      directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
      obstacleCreation1("stones", 6, 10);
      obstacleCreation1("stones", 5, 10);
      obstacleCreation1("stones", 3, 10);

      obstacleCreation1("spiderWeb", 2, 2);
      obstacleCreation1("spiderWeb", 2, 3);
      obstacleCreation1("spiderWeb", 2, 4);

      obstacleCreation1("spiderWeb", 3, 4);
      obstacleCreation1("spiderWeb", 3, 5);
      obstacleCreation1("spiderWeb", 3, 6);
      obstacleCreation1("spiderWeb", 4, 4);
      obstacleCreation1("spiderWeb", 4, 5);
      obstacleCreation1("spiderWeb", 4, 6);
      obstacleCreation1("spiderWeb", 5, 5);
      obstacleCreation1("spiderWeb", 6, 5);
      obstacleCreation1("spiderWeb", 5, 6);
      obstacleCreation1("spiderWeb", 6, 5);
      break;
    case "Tunnel third":
      container.classList.replace(containerBGI, "tunnel");
      directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
      obstacleCreation1("stones", 2, 10);
      obstacleCreation1("stones", 5, 10);
      obstacleCreation1("stones", 3, 10);
      obstacleCreation1("stones", 6, 2);
      obstacleCreation1("stones", 6, 3);
      obstacleCreation1("stones", 6, 4);
      obstacleCreation1("stones", 2, 5);

      obstacleCreation1("spiderWeb", 2, 2);
      obstacleCreation1("spiderWeb", 4, 2);
      obstacleCreation1("spiderWeb", 5, 2);
      obstacleCreation1("spiderWeb", 2, 4);
      obstacleCreation1("spiderWeb", 2, 5);
      obstacleCreation1("spiderWeb", 3, 4);
      obstacleCreation1("spiderWeb", 3, 5);
      obstacleCreation1("spiderWeb", 3, 6);
      obstacleCreation1("spiderWeb", 4, 4);
      obstacleCreation1("spiderWeb", 4, 5);
      obstacleCreation1("spiderWeb", 4, 6);
      obstacleCreation1("spiderWeb", 5, 6);

      break;
    case "Tunnel fourth":
      container.classList.replace(containerBGI, "tunnel");
      directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
      if (enemyArray[1].done == false) {
        obstacleCreationSPAN("queenSpider", 3, 3, 3, 3);
      }
      if (enemyArray[1].done == true) {
        obstacleCreation1("blood", 4, 4);
        obstacleCreation1("blood", 6, 3);
      }
      obstacleCreation1("spiderWeb", 2, 2);
      obstacleCreation1("spiderWeb", 4, 2);
      obstacleCreation1("spiderWeb", 5, 2);
      obstacleCreation1("spiderWeb", 2, 4);
      obstacleCreation1("spiderWeb", 2, 5);
      obstacleCreation1("spiderWeb", 3, 4);
      obstacleCreation1("spiderWeb", 3, 5);
      obstacleCreation1("spiderWeb", 3, 6);
      obstacleCreation1("spiderWeb", 4, 4);
      obstacleCreation1("spiderWeb", 4, 5);
      obstacleCreation1("spiderWeb", 4, 6);
      obstacleCreation1("spiderWeb", 5, 6);
      break;
    case "Tunnel exit":
      container.classList.replace(containerBGI, "tunnelEntrance");
      directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
      obstacleCreation1("barrel", 3, 2);
      obstacleCreation1("barrel", 5, 7);
      obstacleCreation1("barrel", 5, 8);
      obstacleCreation1("barrel", 6, 7);
      obstacleCreation1("barrel", 2, 9);
      obstacleCreation1("barrel", 6, 8);
      if (gameStuffData.weapon !== "hammer-small") {
        obstacleCreation1("hammer-small", 3, 3);
      }
      if (gameStuffData.top !== "good-t-shirt") {
        obstacleCreation1("good-t-shirt", 6, 6);
      }

      break;
    case "Random House":
      container.classList.replace(containerBGI, "homeSweetHome");
      directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
      obstacleCreationSPAN("purpleBed", 2, 2, 2, 2);
      break;
    case "The North West":
      container.classList.replace(containerBGI, "wildSnow");
      directionArrowsOnAndOff(notThisArrow, east, south, notThisArrow);
      obstacleCreation1("pineTreeFrozen", 5, 3);
      obstacleCreation1("leftTreeFrozen", 2, 8);
      obstacleCreation4("bigTreeFrozen", 5, 9);
      bubble("player", "it's freezing here!", -1, -1);
      break;
    case "The Graveyard entrance":
      container.classList.replace(containerBGI, "bigSnow");
      directionArrowsOnAndOff(notThisArrow, east, notThisArrow, west);
      obstacleCreationSPAN("gateWest", 5, 5, 2, 3);
      obstacleCreation1("brickWall", 5, 2);
      obstacleCreation1("brickWall", 5, 3);
      obstacleCreation1("brickWall", 5, 4);
      obstacleCreation1("brickWall", 5, 8);
      obstacleCreation1("brickWall", 5, 9);
      obstacleCreation1("brickWall", 5, 10);
      obstacleCreation1("brickWall", 6, 4);
      obstacleCreation1("brickWall", 6, 3);
      obstacleCreation1("brickWall", 6, 2);
      obstacleCreation1("brickWall", 6, 8);
      obstacleCreation1("brickWall", 6, 9);
      obstacleCreation1("brickWall", 6, 10);
      break;
    case "The west of the graveyard":
      container.classList.replace(containerBGI, "cityFloor2");
      directionArrowsOnAndOff(notThisArrow, east, notThisArrow, west);
      obstacleCreation1("graveStoneCool", 3, 4);
      obstacleCreation1("graveStoneCool", 4, 4);
      obstacleCreation1("graveStoneCool", 5, 4);
      obstacleCreation1("graveStoneCool", 6, 4);
      obstacleCreation1("graveStoneCool", 3, 4);
      obstacleCreation1("graveStoneCool", 3, 6);
      obstacleCreation1("graveStoneCool", 4, 6);
      obstacleCreation1("graveStoneCool", 5, 6);
      obstacleCreation1("graveStoneCool", 6, 6);
      obstacleCreation1("graveStoneCool", 3, 8);
      obstacleCreation1("graveStoneCool", 4, 8);
      obstacleCreation1("graveStoneCool", 5, 8);
      obstacleCreation1("graveStoneCool", 6, 8);

      break;
    case "The center of the graveyard":
      container.classList.replace(containerBGI, "cityFloor2");
      directionArrowsOnAndOff(north, east, notThisArrow, west);
      obstacleCreation1("graveStoneCool", 2, 4);
      obstacleCreation1("graveStoneCool", 3, 4);
      obstacleCreation1("graveStoneCool", 4, 4);
      obstacleCreation1("graveStoneCool", 5, 4);
      obstacleCreation1("graveStoneCool", 6, 4);
      obstacleCreation1("graveStoneCool", 3, 4);
      obstacleCreation1("graveStoneCool", 2, 6);
      obstacleCreation1("graveStoneCool", 3, 6);
      obstacleCreation1("graveStoneCool", 4, 6);
      obstacleCreation1("graveStoneCool", 5, 6);
      obstacleCreation1("graveStoneCool", 6, 6);
      obstacleCreation1("graveStoneCool", 2, 8);
      obstacleCreation1("graveStoneCool", 3, 8);
      obstacleCreation1("graveStoneCool", 4, 8);
      obstacleCreation1("graveStoneCool", 5, 8);
      obstacleCreation1("graveStoneCool", 6, 8);
      break;
    case "The north of the graveyard":
      container.classList.replace(containerBGI, "cityFloor2");
      directionArrowsOnAndOff(notThisArrow, notThisArrow, south, notThisArrow);
      obstacleCreation1("graveStoneRIP", 2, 2);

      obstacleCreationSPAN("graveStoneTopCross", 3, 3, 1, 2);
      if (enemyArray[3].done === true) {
        if (gameStuffData.weapon !== "dark-small-sword") {
          obstacleCreation1("dark-small-sword", 4, 4);
        }
      }
      if (enemyArray[3].done === false) {
        obstacleCreation1("graveStonePurple", 4, 4);
      }
      obstacleCreationSPAN("graveStoneTopCross", 5, 3, 1, 2);

      obstacleCreationSPAN("graveStoneChrist", 2, 7, 2, 2);
      obstacleCreationSPAN("graveStoneChrist", 5, 7, 2, 2);

      break;
    case "The east of the graveyard":
      container.classList.replace(containerBGI, "cityFloor2");
      directionArrowsOnAndOff(notThisArrow, east, notThisArrow, west);
      obstacleCreation1("graveStoneCool", 2, 4);
      obstacleCreation1("graveStoneCool", 3, 4);
      obstacleCreation1("graveStoneCool", 4, 4);
      obstacleCreation1("graveStoneCool", 5, 4);

      obstacleCreation1("graveStoneCool", 2, 6);
      obstacleCreation1("graveStoneCool", 3, 6);
      obstacleCreation1("graveStoneCool", 4, 6);
      obstacleCreation1("graveStoneCool", 5, 6);

      obstacleCreation1("graveStoneCool", 2, 8);
      obstacleCreation1("graveStoneCool", 3, 8);
      obstacleCreation1("graveStoneCool", 4, 8);
      obstacleCreation1("graveStoneCool", 5, 8);

      break;
    case "The exit of the graveyard":
      container.classList.replace(containerBGI, "cityFloor2");
      directionArrowsOnAndOff(notThisArrow, east, notThisArrow, west);
      obstacleCreationSPAN("blood", 2, 7, 2, 2);
      obstacleCreation1("blood", 4, 4);
      obstacleCreation1("blood", 6, 3);
      obstacleCreation1("pierre", 2, 3);
      obstacleCreation1("pierre", 5, 7);
      obstacleCreation1("pierre", 2, 7);
      obstacleCreation1("stones", 6, 3);
      obstacleCreation1("stones", 6, 4);
      obstacleCreation1("stones", 2, 5);
      obstacleCreation1("stones", 3, 3);
      obstacleCreation1("stones", 2, 6);
      obstacleCreation1("stones", 2, 9);
      obstacleCreation1("metalPieces", 2, 5);
      obstacleCreation1("metalPieces", 2, 6);
      obstacleCreation1("metalPieces", 5, 2);
      obstacleCreation1("metalPieces", 4, 3);
      obstacleCreation1("metalPieces", 4, 7);
      obstacleCreation1("metalPieces", 5, 9);
      metalPieces;
      obstacleCreation1("brickWall", 3, 4);
      obstacleCreation1("brickWall", 3, 8);
      obstacleCreation1("brickWall", 3, 10);
      break;
    case "The northen crossroad":
      container.classList.replace(containerBGI, "bigSnow");
      directionArrowsOnAndOff(north, notThisArrow, south, west);
      obstacleCreation1("pierre", 2, 4);
      obstacleCreation1("pierre", 5, 6);
      obstacleCreation1("pierre", 2, 6);
      obstacleCreation1("pierre", 4, 3);
      obstacleCreation1("pierre", 6, 6);
      obstacleCreation1("pierre", 2, 7);
      obstacleCreation1("stones", 6, 3);
      obstacleCreation1("stones", 6, 4);
      obstacleCreation1("stones", 2, 5);
      obstacleCreation1("blood", 2, 3);
      obstacleCreation1("blood", 6, 8);
      obstacleCreation1("metalPieces", 2, 5);
      obstacleCreation1("blood", 6, 8);

      if (enemyArray[4].done === true) {
        obstacleCreation1("blood", 5, 10);
        obstacleCreation1("blood", 6, 10);
        obstacleCreation1("blood", 5, 9);
      }
      //
      obstacleCreation1("sign", 5, 5);

      break;
    case "The front":
      container.classList.replace(containerBGI, "bigSnow");
      directionArrowsOnAndOff(north, notThisArrow, notThisArrow, notThisArrow);
      obstacleCreation1("pierre", 2, 4);
      obstacleCreation1("pierre", 5, 6);
      obstacleCreation1("pierre", 2, 6);
      obstacleCreation1("pierre", 4, 3);
      obstacleCreation1("pierre", 6, 6);
      obstacleCreation1("pierre", 2, 7);
      obstacleCreation1("stones", 6, 3);
      obstacleCreation1("stones", 6, 4);
      obstacleCreation1("stones", 2, 5);
      obstacleCreation1("blood", 2, 3);
      obstacleCreation1("blood", 6, 8);
      obstacleCreation1("blood", 3, 3);
      obstacleCreation1("blood", 6, 8);
      obstacleCreation1("blood", 5, 4);
      obstacleCreation1("blood", 2, 9);
      obstacleCreation1("blood", 2, 10);
      obstacleCreationSPAN("blood", 4, 9, 2, 2);
      obstacleCreation1("blood", 6, 10);

      // orcs
      obstacleCreation1("orc-Soldier-Dark", 2, 8);
      obstacleCreation1("orc-Soldier-Armor", 3, 8);
      obstacleCreation1("orc-Soldier-Light", 4, 8);
      obstacleCreation1("orc-Soldier-Armor-2", 5, 8);
      obstacleCreation1("orc-Leather", 6, 8);
      obstacleCreation1("orc-Soldier-Dark", 6, 7);
      obstacleCreation1("orc-Soldier-Armor", 5, 7);
      obstacleCreation1("orc-Soldier-Light", 2, 7);
      obstacleCreation1("orc-Soldier-Armor-2", 3, 7);
      obstacleCreation1("orc-Leather", 4, 7);
      break;

    case "The orc camp":
      container.classList.replace(containerBGI, "bigSnow");
      directionArrowsOnAndOff(north, notThisArrow, south, west);
      obstacleCreationSPAN("tentOrc", 2, 2, 2, 2);
      obstacleCreationSPAN("tentOrc2", 2, 4, 2, 2);
      obstacleCreationSPAN("tentOrc", 2, 6, 2, 2);

      obstacleCreationSPAN("tentOrc2", 5, 2, 2, 2);
      obstacleCreationSPAN("tentOrc", 5, 4, 2, 2);
      obstacleCreationSPAN("tentOrc2", 5, 6, 2, 2);

      obstacleCreation1("fireCamp", 5, 8);
      obstacleCreation1("fog", 5, 7);
      obstacleCreation1("fireCamp", 2, 9);
      obstacleCreation1("fog", 2, 8);
      obstacleCreation1("wood", 6, 8);
      break;
    case "The west of the orc camp":
      container.classList.replace(containerBGI, "bigSnow");
      directionArrowsOnAndOff(notThisArrow, east, notThisArrow, notThisArrow);
      /*  let westCampOrc = localStorage.getItem("westCampOrc"); */

      if (enemyArray[5].done === false) {
        obstacleCreation1("orc-Leather", 4, 2);
        bubble("orc-Leather", "zzzz", 0, 1);
      }
      if (enemyArray[5].done === true) {
        obstacleCreation1("blood", 4, 2);
      }
      if (amIDrunk === false) {
        obstacleCreation1("mug", 3, 9);
      }

      obstacleCreationSPAN("tentOrc", 2, 2, 2, 2);
      obstacleCreationSPAN("tentOrc2", 2, 4, 2, 2);
      obstacleCreationSPAN("tentOrc", 2, 6, 2, 2);

      obstacleCreationSPAN("tentOrc2", 5, 2, 2, 2);
      obstacleCreationSPAN("tentOrc", 5, 4, 2, 2);
      obstacleCreationSPAN("tentOrc2", 5, 6, 2, 2);

      obstacleCreation1("fireCamp", 4, 8);
      obstacleCreation1("fog", 4, 7);
      obstacleCreation1("fireCamp", 2, 10);
      obstacleCreation1("fog", 2, 9);
      obstacleCreation1("wood", 2, 8);
      break;
    case "The north of the orc camp":
      container.classList.replace(containerBGI, "bigSnow");
      directionArrowsOnAndOff(north, notThisArrow, south, notThisArrow);
      if (enemyArray[6].done === true) {
        obstacleCreation1("blood", 4, 6);
      }
      if (enemyArray[6].done === false) {
        obstacleCreation1("orc-Strong", 4, 6);
        bubble("orc-Strong", "wtf?", 0, 1);
        setTimeout(() => {
          detailEnemy(enemyArray[6], "Human? here? mmmh you need to disapear");
        }, 1000);
        enemyArray[6].done = true;
      }
      obstacleCreationSPAN("tentOrc", 2, 2, 2, 2);
      obstacleCreationSPAN("tentOrc2", 2, 4, 2, 2);
      obstacleCreationSPAN("tentOrc", 2, 6, 2, 2);
      obstacleCreationSPAN("tentOrc2", 5, 2, 2, 2);
      obstacleCreationSPAN("tentOrc", 5, 4, 2, 2);
      obstacleCreationSPAN("tentOrc2", 5, 6, 2, 2);

      obstacleCreation1("fog", 4, 7);
      obstacleCreation1("fireCamp", 2, 10);
      obstacleCreation1("fog", 2, 9);
      obstacleCreation1("wood", 2, 8);
      break;
    case "The orc vanguard":
      container.classList.replace(containerBGI, "bigSnow");
      directionDisappear();
      obstacleCreationSPAN("tentOrc2", 5, 6, 2, 2);
      obstacleCreation1("fog", 2, 7);
      obstacleCreation1("fireCamp", 2, 8);
      obstacleCreation1("wood", 2, 3);
      obstacleCreation1("wood", 2, 2);
      obstacleCreation1("wood", 6, 3);

      //orcs
      obstacleCreation1("orc-Soldier-Dark", 2, 5);
      bubble("orc-Soldier-Dark", "human?", 0, -1);
      obstacleCreation1("orc-Soldier-Armor", 3, 6);
      bubble("orc-Soldier-Armor", "woat?", 0, -1);
      obstacleCreation1("orc-Soldier-Light", 4, 7);
      bubble("orc-Soldier-Light", "??", 0, 1);
      obstacleCreation1("orc-Mass", 4, 3);
      bubble("orc-Mass", "??", -1, -1);
      obstacleCreation1("orc-Soldier-Armor-2", 5, 2);
      bubble("orc-Soldier-Armor-2", "human?", 1, 0);
      obstacleCreation1("orc-Leather", 6, 8);
      bubble("orc-Leather", "??", 0, 1);
      obstacleCreation1("orc-Mass-Dark", 5, 4);
      bubble("orc-Mass-Dark", "??", 1, 0);
      obstacleCreation1("orc-Strong", 4, 6);
      bubble("orc-Strong", "Wtf", 0, -1);
      setTimeout(() => {
        vanguardScenario();
      }, 1700);
      break;
    case "The orc leader":
      container.classList.replace(containerBGI, "bigSnow");
      localStorage.removeItem("whosTurn");
      directionDisappear();
      if (enemyArray[12].done === false) {
        obstacleCreationSPAN("orc-Leader", 4, 1, 4, 4);
        setTimeout(() => {
          leaderOrcScenario();
        }, 700);
      }
      if (enemyArray[12].done === true) {
        obstacleCreationSPAN("blood", 4, 1, 4, 4);
        leaderOrcDead();
      }

      obstacleCreationSPAN("yourte", 2, 2, 3, 3);

      obstacleCreation1("torch", 2, 6);
      obstacleCreation1("torch", 2, 8);
      obstacleCreation1("torch", 2, 10);
      obstacleCreation1("torch", 6, 6);
      obstacleCreation1("torch", 6, 8);
      obstacleCreation1("torch", 6, 10);

      break;
    case "The fight arena":
      container.classList.replace(containerBGI, "fightArena");
      obstacleCreation1("orc-Soldier-Dark", 5, 9);
      bubble("orc-Soldier-Dark", "YEAH", 1, 0);
      obstacleCreation1("orc-Soldier-Armor", 3, 9);

      obstacleCreation1("orc-Soldier-Light", 2, 9);
      obstacleCreation1("orc-Mass", 2, 8);
      bubble("orc-Mass", "DIE DIE", 0, -1);
      obstacleCreation1("orc-Soldier-Armor-2", 3, 8);
      bubble("orc-Soldier-Armor-2", "weaK HUMAN", 0, -1);
      obstacleCreation1("orc-Leather", 6, 8);
      bubble("orc-Leather", "GOGO", 0, -1);
      obstacleCreation1("orc-Mass-Dark", 5, 8);
      bubble("orc-Mass-Dark", "GRRRRR", 0, -1);
      obstacleCreation1("orc-Strong", 4, 8);
      bubble("orc-Strong", "kill IT", 0, -1);
      break;
    // HUMANS !!!!!!!
    case "After the river":
      container.classList.replace(containerBGI, "dryGround");
      directionArrowsOnAndOff(notThisArrow, east, notThisArrow, notThisArrow);

      obstacleCreationSPAN("blueWater", 2, 2, 2, 9);
      obstacleCreation1("dryGround", 4, 6);
      obstacleCreation1("dryGround", 5, 6);
      obstacleCreation1("dryGround", 6, 6);
      break;
    case "The lost land":
      container.classList.replace(containerBGI, "dryGround");
      directionArrowsOnAndOff(notThisArrow, east, notThisArrow, west);
      obstacleCreationSPAN("blueWater", 2, 2, 5, 1);
      obstacleCreation1("dryGround", 2, 6);
      obstacleCreation1("dryGround", 3, 6);
      obstacleCreation1("dryGround", 5, 6);
      obstacleCreation1("dryGround", 6, 6);
      obstacleCreation1("dryGround", 4, 6);
      if (enemyArray[13].done === false) {
        obstacleCreation1("guard-enemy", 5, 5);
      }
      if (enemyArray[13].done === true) {
        obstacleCreation1("blood", 5, 5);
      }

      break;
    case "The first ruins":
      container.classList.replace(containerBGI, "dryGround");
      directionArrowsOnAndOff(notThisArrow, east, notThisArrow, west);
      obstacleCreationSPAN("blueWater", 2, 2, 5, 1);
      obstacleCreation1("dryGround", 2, 6);
      obstacleCreation1("dryGround", 3, 6);
      obstacleCreation1("dryGround", 4, 6);
      obstacleCreation1("dryGround", 5, 6);
      obstacleCreation1("cityRoad", 6, 6);

      obstacleCreation1("stones", 6, 2);
      obstacleCreation1("stones", 3, 10);
      if (enemyArray[14].done === false) {
        obstacleCreation1("first-soldier", 4, 5);
      }
      if (enemyArray[14].done === true) {
        obstacleCreation1("blood", 4, 5);
      }
      if (enemyArray[15].done === false) {
        obstacleCreation1("second-soldier", 6, 5);
      }
      if (enemyArray[15].done === true) {
        obstacleCreation1("blood", 6, 5);
      }
      break;
    case "The second ruins":
      container.classList.replace(containerBGI, "dryGround");
      directionArrowsOnAndOff(notThisArrow, east, notThisArrow, west);
      obstacleCreationSPAN("blueWater", 2, 2, 5, 1);
      obstacleCreation1("cityRoad", 2, 6);
      obstacleCreation1("cityRoad", 3, 6);
      obstacleCreation1("pierre", 4, 5);
      obstacleCreation1("cityRoad", 5, 6);
      obstacleCreation1("cityRoad", 6, 6);
      obstacleCreation1("pierre", 4, 7);
      obstacleCreation1("pierre", 3, 4);
      obstacleCreation1("pierre", 5, 9);
      obstacleCreation1("stones", 5, 10);
      obstacleCreation1("stones", 6, 8);
      if (enemyArray[16].done === false) {
        obstacleCreation1("third-soldier", 3, 3);
      }
      if (enemyArray[16].done === true) {
        obstacleCreation1("blood", 3, 3);
      }
      if (enemyArray[17].done === false) {
        obstacleCreation1("Rider", 6, 8);
      }
      if (enemyArray[17].done === true) {
        obstacleCreation1("blood", 6, 8);
      }
      break;
    case "The old castle":
      container.classList.replace(containerBGI, "cityFloor2");
      directionArrowsOnAndOff(notThisArrow, east, notThisArrow, west);
      obstacleCreation1("cityRoad", 2, 6);
      obstacleCreation1("cityRoad", 3, 6);
      obstacleCreation1("cityRoad", 4, 6);
      obstacleCreation1("cityRoad", 5, 6);
      obstacleCreation1("cityRoad", 6, 6);
      obstacleCreation1("chaudron", 5, 2);
      obstacleCreation1("chaudron", 6, 4);
      obstacleCreation1("greenChimical", 6, 3);

      obstacleCreation4("stones", 3, 2);
      obstacleCreation4("stones", 4, 9);
      break;
    case "The old castle second":
      container.classList.replace(containerBGI, "cityFloor2");
      directionDisappear();
      obstacleCreationSPAN("blackGate", 5, 3, 2, 3);
      obstacleCreation1("metalPieces", 1, 2);
      obstacleCreation1("metalPieces", 1, 4);
      obstacleCreation1("metalPieces", 1, 7);
      obstacleCreation1("metalPieces", 2, 1);
      obstacleCreation1("metalPieces", 4, 1);
      obstacleCreation1("metalPieces", 7, 1);
      obstacleCreation4("stones", 3, 1);
      obstacleCreation4("stones", 5, 1);
      obstacleCreation1("pierre", 2, 2);
      obstacleCreation1("pierre", 1, 3);
      obstacleCreation1("pierre", 1, 5);
      obstacleCreation1("pierre", 1, 6);
      obstacleCreation1("pierre", 2, 7);
      obstacleCreation1("cityRoad", 2, 6);
      obstacleCreation1("cityRoad", 3, 6);
      obstacleCreation1("cityRoad", 4, 6);
      obstacleCreation1("cityRoad", 5, 6);
      obstacleCreation1("cityRoad", 6, 6);
      obstacleCreation1("chaudron", 5, 2);
      obstacleCreation1("simpleTable", 4, 10);
      obstacleCreation1("greenChimical", 7, 11);
      obstacleCreation1("greenChimical", 6, 11);
      obstacleCreation1("greenChimical", 5, 11);
      obstacleCreation1("greenChimical", 4, 11);
      obstacleCreation1("greenChimical", 7, 10);
      obstacleCreation4("stones", 3, 2);
      obstacleCreation4("stones", 4, 7);
      //
      if (enemyArray[19].done === true) {
        obstacleCreation1("blood", 5, 10);
        setTimeout(() => {
          adventureIsOver();
        }, 2500);
        break;
      }
      obstacleCreationSPAN("Edmund", 6, 10, 4, 4);
      obstacleCreationSPAN("gorilla", 3, 10, 4, 4);
      // scenario
      if (enemyArray[18].done === false) {
        bubble("Edmund", "??", -1, -1);
        setTimeout(() => {
          edmundScenario();
        }, 2000);
      }
      if (enemyArray[18].done === true) {
        obstacleCreation1("blood", 3, 10);
        // scenario
        fightEdmund2();
      }

      break;
    default:
      break;
  }
}
