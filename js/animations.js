/* 
function blackFade(){
    
} */

function whiteFade() {
  container.style.opacity = 0;

  /*   container.classList.add('has-opacity'); */
  setTimeout(function () {
    container.style.opacity = 1;
  }, 700);
}

/* function lowHP() {
  player.style.transition = "none"; // Retire la transition
  player.style.opacity = 0;

  setTimeout(function () {
    player.style.transition = "opacity 100ms";
    player.style.opacity = 1;
  }, 300);
}
 */
