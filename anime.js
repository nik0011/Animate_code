var page = document.querySelector("#main");
function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#cursor"
    ).style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
  });
}
var rectangle = document.querySelector("#rect");
rectangle.addEventListener("mousemove", function (dets) {
  var rectloc = rectangle.getBoundingClientRect();
  var insideval = dets.clientX - rectloc.left;
  if (insideval < rectloc.width / 2) {
    var redcolor = gsap.utils.mapRange(0, rectloc.width / 2, 255, 0, insideval);
    gsap.to(rectangle, {
      backgroundColor: `rgb(${redcolor},0,0)`,
      ease: Power4,
    });
  } else {
    var bluecolor = gsap.utils.mapRange(
      rectloc.width / 2,
      rectloc.width,
      0,
      255,
      insideval
    );
    gsap.to(rectangle, {
      backgroundColor: `rgb(0,0,${bluecolor})`,
      ease: Power4,
    });
  }
});
rectangle.addEventListener("mouseleave", function () {
  gsap.to(rectangle, {
    backgroundColor: "white",
    ease: Power4,
  });
});


circleMouseFollower();
