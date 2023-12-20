//
let player = document.createElement("div");
player.setAttribute("id", "player");
//

function venceInFight() {
  let venceContainer = document.getElementById("vence");
  let venceFace = document.createElement("div");
  venceFace.setAttribute("id", "venceFace");
  venceContainer.append(venceFace);
}

let spider = document.createElement("div");
spider.setAttribute("id", "spider");

function creationOfPeople(id, col, row) {
  let thisID = document.createElement("div");
  thisID.setAttribute("id", id);
  thisID.setAttribute("class", "people");
  thisID.style.gridColumnStart = col;
  thisID.style.gridRowStart = row;
  container.append(thisID);
}

function deletAllPeople() {
  let people = document.querySelectorAll(".people");
  Array.from(people);
  people.forEach((person) => {
    person.remove();
  });
}

let enemyArray = [
  {
    name: "spider",
    hp: 3,
    armor: 0,
    force: 0,
    spe: "",
    xp: 3,
    done: false,
  },
  {
    name: "queenSpider",
    hp: 10,
    armor: 0,
    force: 2,
    spe: "poison",
    xp: 9,
    done: false,
  },
  {
    name: "vence",
    hp: "",
    armor: "",
    force: "",
    spe: "",
    xp: "",
    done: false,
  },
  {
    name: "skeleton",
    hp: 10,
    armor: 1,
    force: 4,
    spe: "Fear",
    xp: 10,
    done: false,
  },
  // ORCS
  //sleeping 4
  {
    name: "orc-Leather",
    hp: 5,
    armor: 1,
    force: 1,
    spe: "",
    xp: 7,
    done: false,
  },
  //sleeping 5
  {
    name: "orc-Leather",
    hp: 5,
    armor: 1,
    force: 1,
    spe: "",
    xp: 7,
    done: false,
  },
  {
    name: "orc-Strong",
    hp: 10,
    armor: 2,
    force: 2,
    spe: "",
    xp: 10,
    done: false,
  },
  // ARENA 7
  {
    name: "orc-Soldier-Light",
    hp: 5,
    armor: 0,
    force: 1,
    spe: "",
    xp: 7,
    done: false,
  },
  {
    name: "orc-Soldier-Armor",
    hp: 6,
    armor: 1,
    force: 1,
    spe: "",
    xp: 7,
    done: false,
  },
  {
    name: "orc-Soldier-Armor-2",
    hp: 5,
    armor: 1,
    force: 1,
    spe: "",
    xp: 7,
    done: false,
  },
  // 10
  {
    name: "orc-Mass",
    hp: 5,
    armor: 1,
    force: 1,
    spe: "",
    xp: 7,
    done: false,
  },
  {
    name: "orc-Mass-Dark",
    hp: 5,
    armor: 1,
    force: 1,
    spe: "",
    xp: 7,
    done: false,
  },
  // 12
  {
    name: "orc-Leader",
    hp: 18,
    armor: 4,
    force: 5,
    spe: "",
    xp: 50,
    done: false,
  },
  // humans 13
  {
    name: "guard-enemy",
    hp: 4,
    armor: 2,
    force: 1,
    spe: "",
    xp: 20,
    done: false,
  },
  {
    name: "first-soldier",
    hp: 5,
    armor: 0,
    force: 2,
    spe: "",
    xp: 25,
    done: false,
  },
  // 15
  {
    name: "second-soldier",
    hp: 7,
    armor: 2,
    force: 2,
    spe: "",
    xp: 30,
    done: false,
  },
  {
    name: "third-soldier",
    hp: 10,
    armor: 3,
    force: 3,
    spe: "",
    xp: 40,
    done: false,
  },
  {
    name: "Rider",
    hp: 12,
    armor: 3,
    force: 4,
    spe: "",
    xp: 50,
    done: false,
  },
  // 18
  {
    name: "gorilla",
    hp: 15,
    armor: 0,
    force: 4,
    spe: "",
    xp: 50,
    done: false,
  },
  {
    name: "Edmund",
    hp: 18,
    armor: 4,
    force: 3,
    spe: "",
    xp: 60,
    done: false,
  },
];
