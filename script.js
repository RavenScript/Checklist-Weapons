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

  document.addEventListener("DOMContentLoaded", function() {
    // Identifier les cases à cocher
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Charger l'état depuis le stockage local
    loadCheckboxState();

    // Ajouter un écouteur d'événements pour les cases à cocher
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            // Mettre à jour le stockage local lorsqu'une case à cocher est cochée/décochée
            updateCheckboxState();
        });
    });

    function updateCheckboxState() {
        // Créer un tableau pour stocker l'état des cases à cocher
        var checkboxState = [];

        // Parcourir toutes les cases à cocher et enregistrer leur état
        checkboxes.forEach(function(checkbox) {
            checkboxState.push({
                id: checkbox.id,
                checked: checkbox.checked
            });
        });

        // Stocker l'état dans le stockage local
        localStorage.setItem('checkboxState', JSON.stringify(checkboxState));
    }

    function loadCheckboxState() {
        // Récupérer l'état depuis le stockage local
        var storedCheckboxState = localStorage.getItem('checkboxState');

        // Si des données sont présentes, mettre à jour l'état des cases à cocher
        if (storedCheckboxState) {
            var parsedCheckboxState = JSON.parse(storedCheckboxState);

            parsedCheckboxState.forEach(function(item) {
                var checkbox = document.getElementById(item.id);

                if (checkbox) {
                    checkbox.checked = item.checked;
                }
            });
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne toutes les checkboxes avec l'attribut data-check-all
    var checkAllCheckboxes = document.querySelectorAll('[data-check-all]');

    // Ajoute un écouteur d'événement pour chaque checkbox "coche-all"
    checkAllCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            // Sélectionne toutes les checkboxes du tableau correspondant à cette checkbox "coche-all"
            var checkboxes = document.querySelectorAll('#' + this.dataset.checkAll + ' input[type="checkbox"]');
            
            // Coche ou décoche chaque checkbox en fonction de l'état de la checkbox "coche-all"
            checkboxes.forEach(function(individualCheckbox) {
                individualCheckbox.checked = checkbox.checked;
            });
        });
    });
});
