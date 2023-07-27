function submitForm() {
    var password = document.getElementById("password").value;
    if (password === "123") {
      window.location.href = "menu.html";
    } else {
      alert("Contraseña incorrecta");
    }
  }
  