document.getElementById("userdetails").onsubmit = function() {
  localStorage["username"] = document.getElementById("username").value;
  window.close();
};
document.getElementById("username").value = localStorage["username"] || "test-user";
