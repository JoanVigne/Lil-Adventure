// 1 grid case
function obstacleCreation1(item, col, row) {
    let thisItem = document.createElement("div");
    thisItem.setAttribute("id", item)
    thisItem.classList.add("obstacle");
    thisItem.style.gridColumnStart = col;
    thisItem.style.gridRowStart = row;
    container.append(thisItem);
}
// 4 grid cases
function obstacleCreation4(item, col, row) {
    let thisItem = document.createElement("div");
    thisItem.setAttribute("id", item)
    thisItem.classList.add("obstacle");
    thisItem.style.gridColumn = col + "/span 2";
    thisItem.style.gridRow = row + "/ span 2";
    container.append(thisItem);
}
// for all the rest :
function obstacleCreationSPAN(item, col, row, spanCol, spanRow) {
    let thisItem = document.createElement("div");
    thisItem.setAttribute("id", item)
    thisItem.classList.add("obstacle");
    thisItem.style.gridColumn = col + `/span ${spanCol}`;
    thisItem.style.gridRow = row + `/span ${spanRow}`;;
    container.append(thisItem);
}

function deletAllObstacle() {
    let obstacles = document.querySelectorAll(".obstacle");
    Array.from(obstacles);
    obstacles.forEach(obstacle => {
        obstacle.remove();
    });
}
