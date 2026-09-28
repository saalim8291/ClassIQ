/** Footer newsletter form. */
(function () {
  var form = document.querySelector("[data-subscribe-form]");
  if (!form) return;

  var input = form.querySelector("input");
  var message = document.getElementById("subscribe-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var error = window.ClassIQ.validate(input.value, "required email");
    message.classList.toggle("is-error", Boolean(error));

    if (error) {
      message.textContent = error;
      input.focus();
      return;
    }

    message.textContent = "Thanks for subscribing!";
    form.reset();
  });
})();
