document.onkeydown = function() {
  count += 1;
  y -= 25;
}
document.ontouchstart = function() {
  count += 1;
  y -= 25;
} 
 
if(y <= 350) {
  speed += 50 * timePassed;
  y += speed*timePassed;
}
