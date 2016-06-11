var KEYS = ["x-dex-name", "x-dex-email", "x-dex-email-verified"];

document.getElementById("header-details").onsubmit = function() {
  KEYS.forEach(function(x) {
    localStorage[x] = document.getElementById(x).value;
  });
  window.close();
};
KEYS.forEach(function(x) {
  document.getElementById(x).value = localStorage[x] || "";
});
