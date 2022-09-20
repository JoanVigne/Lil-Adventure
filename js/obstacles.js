// 1 grid case
function obstacleCreation1(item, col, row){
    let thisItem = document.createElement("div");
    thisItem.setAttribute("id", item)
    thisItem.classList.add("obstacle");
    thisItem.style.gridColumnStart = col;
    thisItem.style.gridRowStart = row;
    container.append(thisItem);
}


// 4 grid cases
function obstacleCreation4(item, col, row){
    let thisItem = document.createElement("div");
    thisItem.setAttribute("id", item)
    thisItem.classList.add("obstacle");
    thisItem.style.gridColumn = col + "/span 2";
    thisItem.style.gridRow = row + "/ span 2";
    container.append(thisItem);
}

// 6 grid cases, 2 on 3
function obstacleCreation6(item, col, row){
    let thisItem = document.createElement("div");
    thisItem.setAttribute("id", item)
    thisItem.classList.add("obstacle");
    thisItem.style.gridColumn = col + "/span 2";
    thisItem.style.gridRow = row + "/ span 3";
    container.append(thisItem);
}
// 9 grid cases 
function obstacleCreation9(item, col, row){
    let thisItem = document.createElement("div");
    thisItem.setAttribute("id", item)
    thisItem.classList.add("obstacle");
    thisItem.style.gridColumn = col + "/span 3";
    thisItem.style.gridRow = row + "/ span 3";
    container.append(thisItem);
}

function deletAllObstacle(){
    let obstacles = document.querySelectorAll(".obstacle");
    Array.from( obstacles );
    obstacles.forEach(obstacle => {
        obstacle.remove();
    });
}


// function obstacleDelet(item){
//     let thisItem = document.getElementsByClassName(item);
//     thisItem[0].remove();
// }