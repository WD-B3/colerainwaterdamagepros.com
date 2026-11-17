(function () {
  var btn = document.querySelector(".menu-toggle");
  var nav = document.getElementById("nav-menu");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }
  var fc = document.querySelector(".floatcall");
  var ft = document.querySelector(".sitefoot");
  if (fc && ft && "IntersectionObserver" in window) {
    new IntersectionObserver(function (es) {
      es.forEach(function (e) { fc.classList.toggle("hide", e.isIntersecting); });
    }).observe(ft);
  }
})();
