var page = document.querySelector("#main");
function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#cursor"
    ).style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
  });
}
circleMouseFollower();