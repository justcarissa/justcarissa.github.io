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
    subMenu.classList.toggle("active");
    sectionsButton.classList.toggle("active");
  }

  // Function to close submenu when a link is clicked
  function closeSubMenu() {
    // Check if screen width is less than or equal to 600px (smaller screens)
    if (window.innerWidth <= 600) {
      subMenu.classList.add("hidden");
      hideArrow.style.display = "inline-block";
      openArrow.style.display = "none";
      sectionsButton.style.display = "inline-block";
      subMenu.classList.remove("active");
    }
  }

  // Add event listeners to hideArrow and openArrow for toggling menu visibility
  hideArrow.addEventListener('click', toggleMenu);
  openArrow.addEventListener('click', toggleMenu);

  // Add event listener to sectionsButton for larger screens
  sectionsButton.addEventListener("click", toggleSubMenu);

  // Add event listener to submenu links to close the menu on smaller screens
  const submenuLinks = document.querySelectorAll('.sub-menu a');
  submenuLinks.forEach(link => {
    link.addEventListener('click', closeSubMenu);
  });
});

// Function to handle scroll
function handleScroll() {
  var headerHeight = document.getElementById('main-header').offsetHeight;
  var sections = document.querySelector('.sections');
  var buttonContainer = document.querySelector('.button-container');

  // Check if scrolled beyond the header height + 50px
  if (window.pageYOffset > headerHeight + 50) {
    sections.classList.add('fixed-sections');
    buttonContainer.classList.add('fixed-button-container');
  } else {
    sections.classList.remove('fixed-sections');
    buttonContainer.classList.remove('fixed-button-container');
  }
}

// Call handleScroll function when scrolling
window.addEventListener('scroll', handleScroll);

