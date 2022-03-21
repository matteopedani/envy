;(function() {

function isInstagramApp() {
  var ua = navigator.userAgent || navigator.vendor || window.opera;

  return (ua.indexOf('Instagram') > -1) ? true : false;
}

function isSafari() {
  var ua = navigator.userAgent || navigator.vendor || window.opera;

  return (ua.match(/iPad/i) || ua.match(/iPhone/i));
}

function onload() {
  if (isInstagramApp() && isSafari()) {
    var configurator = document.querySelector(".configurator");
    var header = document.querySelector("header");

    if (configurator)
      configurator.classList.add("insta");

    if (header)
      header.classList.add("insta");
  }

  var banner = document.querySelector(".banner");
  var main_menu = document.querySelector(".main_menu");

  main_menu.addEventListener("click", toggle_menu);

  if (!banner)
    return;

  banner.style.backgroundImage = 'url(' + banner.getAttribute("data-src") + ')';
  banner.style.opacity = "1";
}

function toggle_menu() {
  var nav = document.querySelector("nav ul");

  this.classList.toggle("active");

  if (this.classList.contains("active"))
    nav.classList.add("active");
  else
    nav.classList.remove("active");
}

window.addEventListener("load", onload);

})();