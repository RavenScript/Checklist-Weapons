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