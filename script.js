document.addEventListener("DOMContentLoaded", function() {
    var hamburgerMenu = document.getElementById("hamburger-menu");
    var dropdownContent = document.getElementById("dropdown-content");

    hamburgerMenu.addEventListener("click", function() {
        dropdownContent.classList.toggle("show");
    });

    // Fermer le menu déroulant si l'utilisateur clique en dehors du menu
    document.addEventListener("mouseup", function(event) {
        if (!dropdownContent.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            dropdownContent.classList.remove("show");
        }
    });
});

// Code JavaScript pour gérer l'affichage du bouton de retour vers le haut
document.addEventListener("DOMContentLoaded", function() {
    var backToTopButton = document.getElementById("back-to-top");
  
    window.addEventListener("scroll", function() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    });
  
    backToTopButton.addEventListener("click", function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });