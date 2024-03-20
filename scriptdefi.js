document.addEventListener("DOMContentLoaded", function () {
  var hamburgerMenu = document.getElementById("hamburger-menu");
  var menuList = document.getElementById("menu-list");

  hamburgerMenu.addEventListener("click", function () {
      menuList.classList.toggle("show");
  });

    // Masquer le menu lorsque l'utilisateur clique sur un lien
    menu.addEventListener("click", function () {
      menu.style.display = "none";
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var hamburgerMenu = document.getElementById("hamburger-menu");
    var dropdownContent = document.getElementById("dropdown-content");
  
    // Ajoutez une condition pour les petits écrans
    if (window.innerWidth <= 600) {
      hamburgerMenu.addEventListener("click", function () {
        dropdownContent.classList.toggle("show");
      });
    }
  
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
        updateCheckboxState();
      });
    });
  
    function updateCheckboxState() {
      var checkboxState = [];
  
      checkboxes.forEach(function (checkbox) {
        checkboxState.push({
          id: checkbox.id,
          checked: checkbox.checked,
        });
      });
  
      localStorage.setItem("checkboxState", JSON.stringify(checkboxState));
    }
  
    function loadCheckboxState() {
      var storedCheckboxState = localStorage.getItem("checkboxState");
  
      if (storedCheckboxState) {
        var parsedCheckboxState = JSON.parse(storedCheckboxState);
  
        parsedCheckboxState.forEach(function (item) {
          var checkbox = document.getElementById(item.id);
  
          if (checkbox) {
            checkbox.checked = item.checked;
          }
        });
      }
    }
  
    loadCheckboxState();
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var backToTopButton = document.getElementById("back-to-top");
  
    window.addEventListener("scroll", function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        backToTopButton.style.display = "block";
      } else {
        backToTopButton.style.display = "none";
      }
    });
  
    backToTopButton.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    var hamburgerMenu = document.getElementById("hamburger-menu");
    var menuList = document.getElementById("menu-list");

    hamburgerMenu.addEventListener("click", function () {
        menuList.classList.toggle("show");
    });
});