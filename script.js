document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Fonction pour sauvegarder l'état des cases à cocher dans le stockage local
  function saveCheckboxState() {
      checkboxes.forEach(function (checkbox) {
          localStorage.setItem(checkbox.id, checkbox.checked);
      });
  }

  // Fonction pour charger l'état des cases à cocher depuis le stockage local
  function loadCheckboxState() {
      checkboxes.forEach(function (checkbox) {
          const checked = JSON.parse(localStorage.getItem(checkbox.id));
          if (checked !== null) {
              checkbox.checked = checked;
          }
      });
  }

  // Charger l'état des cases à cocher lors du chargement de la page
  loadCheckboxState();

  // Ajouter un écouteur d'événement à chaque case à cocher pour sauvegarder son état lorsqu'il est modifié
  checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', saveCheckboxState);
  });

  // Fonction pour afficher la fenêtre modale de félicitations si tous les défis sont terminés
  function checkCompletion() {
      let allChecked = true;
      checkboxes.forEach(function (checkbox) {
          if (!checkbox.checked) {
              allChecked = false;
          }
      });
      if (allChecked) {
          document.getElementById('congrats-modal').style.display = 'block';
      }
  }

  // Vérifier l'état de complétion lors du chargement de la page
  checkCompletion();

  // Ajouter un écouteur d'événement à chaque case à cocher pour vérifier l'état de complétion lorsqu'il est modifié
  checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', checkCompletion);
  });

  // Fermer la fenêtre modale de félicitations en cliquant sur le bouton de fermeture
  const closeModalButton = document.querySelector('.close');
  closeModalButton.addEventListener('click', function () {
      document.getElementById('congrats-modal').style.display = 'none';
  });

  // Ajouter un événement pour revenir en haut de la page
  const backToTopButton = document.getElementById('back-to-top');
  backToTopButton.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
