//Scroll to top button
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos);
  topBtn = document.getElementById("topBtn");
  if (currentScrollPos < 30) {
    topBtn.classList.remove("visible");
  } else if (prevScrollpos > currentScrollPos) {
    topBtn.classList.add("visible");
  } else {
    topBtn.classList.remove("visible");
  }
  prevScrollpos = currentScrollPos;
};

function scrollToTop() {
  window.scroll({ top: 0, behavior: "smooth" });
}
