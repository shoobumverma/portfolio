window.onscroll = function () {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop,
    topBtn = document.getElementById("topBtn");
  if (scrolled > 300) {
    topBtn.classList.add("visible");
  } else {
    topBtn.classList.remove("visible");
  }
};
