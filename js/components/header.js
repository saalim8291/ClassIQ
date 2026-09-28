// Site header component (Injected synchronously)
(function () {
  var script = document.currentScript;
  var label = script.dataset.navLabel || "Courses";
  var href = script.dataset.navHref || "index.html#courses";

  var html =
    '<header class="site-header">' +
    '<div class="container site-header__inner">' +
    '<a class="brand" href="index.html" aria-label="ClassIQ home">' +
    '<img class="brand__logo" src="assets/images/logo.png" width="49" height="49" alt="">' +
    "ClassIQ</a>" +
    '<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Toggle navigation">' +
    '<span class="nav-toggle__bars"></span></button>' +
    '<nav class="nav" id="primary-nav" aria-label="Primary">' +
    '<a class="nav__link" href="' + href + '">' + label + "</a>" +
    '<div class="nav__actions">' +
    '<a class="btn btn--dark btn--nav" href="login.html">Login</a>' +
    '<a class="btn btn--dark btn--nav" href="signup.html">SignUp</a>' +
    "</div></nav></div></header>";

  script.insertAdjacentHTML("beforebegin", html);
})();
