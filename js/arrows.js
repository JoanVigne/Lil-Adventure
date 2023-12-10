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


function moveNorth(){
    console.log("north");
}
function moveEst(){
    console.log("moveEst");
}
function moveSouth(){
    console.log("moveSouth");
}
function moveWest(){
    console.log("moveWest");
}

function arrowAppear(){
    container.append(northArrow);
    container.append(estArrow);
    container.append(southArrow);
    container.append(westArrow);
    northArrow.addEventListener("click", moveNorth);
    estArrow.addEventListener("click", moveEst);
    southArrow.addEventListener("click", moveSouth);
    westArrow.addEventListener("click", moveWest);
}

function arrowDisapear(){
    northArrow.remove();
    estArrow.remove();
    southArrow.remove();
    westArrow.remove();
}