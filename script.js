document.addEventListener("DOMContentLoaded", function () {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  
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
    const links = document.querySelectorAll('.dropdown-content a');
  
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
  
        document.getElementById('hamburger-menu').classList.remove('open');
        document.getElementById('dropdown-content').classList.remove('show');
      });
    });
  });
  