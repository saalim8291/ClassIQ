(function () {
  var form = document.querySelector("[data-auth-form]");
  if (!form) return;

  var fields = Array.prototype.slice.call(form.querySelectorAll("[data-rules]"));

  function check(input) {
    var message = window.ClassIQ.validate(input.value, input.dataset.rules);
    var error = document.getElementById(input.getAttribute("aria-describedby"));

    input.setAttribute("aria-invalid", message ? "true" : "false");
    error.textContent = message;
    return !message;
  }

  fields.forEach(function (input) {
    // Validate on blur
    input.addEventListener("blur", function () {
      if (input.value) check(input);
    });
    input.addEventListener("input", function () {
      if (input.getAttribute("aria-invalid") === "true") check(input);
    });
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var firstInvalid = null;
    fields.forEach(function (input) {
      if (!check(input) && !firstInvalid) firstInvalid = input;
    });

    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }
    window.location.href = form.dataset.redirect;
  });
})();
