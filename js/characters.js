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
