const $bigBall = document.querySelector('.cursor-ball--big');
const $smallBall = document.querySelector('.cursor-ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

document.body.addEventListener("mousemove", evt => {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;
    
    gsap.set($smallBall, {
      x: mouseX,
      y: mouseY
    })
    
    gsap.to($bigBall, {
      x: mouseX - 10,
      y: mouseY - 10,
      stagger: -0.5
    })
})

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}
