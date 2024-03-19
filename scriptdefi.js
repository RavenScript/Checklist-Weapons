document.addEventListener("DOMContentLoaded", function () {
    var hamburgerMenu = document.getElementById("hamburger-menu");
    var menu = document.getElementById("menu");
  
    hamburgerMenu.addEventListener("click", function () {
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
  
    // Masquer le menu lorsque l'utilisateur clique sur un lien
    menu.addEventListener("click", function () {
      menu.style.display = "none";
    });
  });