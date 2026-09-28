// validation helper shared by every form.
(function (global) {
  var ns = (global.ClassIQ = global.ClassIQ || {});

  var EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  var rules = {
    required: function (value) {
      return value.trim() ? "" : "This field is required.";
    },
    email: function (value) {
      return EMAIL_PATTERN.test(value.trim()) ? "" : "Enter a valid email address.";
    },
    min: function (value, length) {
      return value.length >= length ? "" : "Must be at least " + length + " characters.";
    },
  };

  ns.validate = function (value, ruleList) {
    var tokens = ruleList.split(/\s+/).filter(Boolean);

    for (var i = 0; i < tokens.length; i++) {
      var parts = tokens[i].split(":");
      var message = rules[parts[0]](value, Number(parts[1]));
      if (message) return message;
    }
    return "";
  };
})(window);
