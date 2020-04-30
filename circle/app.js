const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  gsap.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
  gsap.to($smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  })
}

// Hover an element
function onMouseHover() {
  gsap.to($bigBall, .5, {
    scale: 3,
    ease: "elastic",
  })
}
function onMouseHoverOut() {
  gsap.to($bigBall, .3, {
    scale: 1,
    ease: "strong.inOut",
  })
}