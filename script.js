function toggleMobileMenu(icon) {
  icon.classList.toggle("open");
  var mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
  const hideArrow = document.getElementById('hideArrow');
  const openArrow = document.getElementById('openArrow');
  const subMenu = document.getElementById('subMenu');
  const sectionsButton = document.getElementById('sectionsButton');

  // Function to toggle menu visibility
  function toggleMenu() {
    subMenu.classList.toggle("hidden");
    hideArrow.style.display = hideArrow.style.display === "none" ? "inline-block" : "none";
    openArrow.style.display = openArrow.style.display === "none" ? "inline-block" : "none";
    // Toggle visibility of mobile sections button
    sectionsButton.style.display = sectionsButton.style.display === "none" ? "inline-block" : "none";
    // Remove 'active' class from submenu
    subMenu.classList.remove("active");
  }

  // Function to toggle submenu on larger screens
  function toggleSubMenu() {
    if (window.innerWidth <= 600) {
      subMenu.classList.toggle("active");
      sectionsButton.classList.toggle("active");
    }
  }

  // Add event listeners to hideArrow and openArrow for toggling menu visibility
  hideArrow.addEventListener('click', toggleMenu);
  openArrow.addEventListener('click', toggleMenu);

  // Conditionally add event listener to sectionsButton for smaller screens
  if (window.innerWidth <= 600) {
    sectionsButton.addEventListener("click", toggleSubMenu);
  }
});

// Function to handle scroll
function handleScroll() {
  var headerHeight = document.getElementById('main-header').offsetHeight;
  var sections = document.querySelector('.sections');
  var buttonContainer = document.querySelector('.button-container');

  if (window.pageYOffset > headerHeight + 50) {
    sections.classList.add('fixed-sections');
    buttonContainer.classList.add('fixed-button-container');
  } else {
    sections.classList.remove('fixed-sections');
    buttonContainer.classList.remove('fixed-button-container');
  }
}

window.onload = function() {
  if (window.innerWidth > 1400) {
    var subMenu = document.getElementById('subMenu');
    subMenu.classList.add('active');
    document.getElementById('hideArrow').style.display = 'none';
    document.getElementById('openArrow').style.display = 'inline-block';
  }
};

document.addEventListener("DOMContentLoaded", function() {
  handleScroll();
});

window.addEventListener('scroll', handleScroll);
