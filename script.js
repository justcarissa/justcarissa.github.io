function toggleMobileMenu(icon) {
  icon.classList.toggle("open");
  var mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function() {
    const sectionsButton = document.querySelector(".sections-button");
    const subMenu = document.querySelector(".sub-menu");

    sectionsButton.addEventListener("click", function() {
        subMenu.classList.toggle("active");
        sectionsButton.classList.toggle("active");
    });

    document.addEventListener("click", function(event) {
        if (!subMenu.contains(event.target) && !sectionsButton.contains(event.target)) {
            subMenu.classList.remove("active");
            sectionsButton.classList.remove("active");
        }
    });

    // Close the menu when a sub-menu item is clicked
    const subMenuItems = document.querySelectorAll(".sub-menu li a");
    subMenuItems.forEach(function(item) {
        item.addEventListener("click", function() {
            subMenu.classList.remove("active");
            sectionsButton.classList.remove("active");
        });
    });
});


function handleScroll() {
  var headerHeight = document.getElementById('main-header').offsetHeight;
  var sections = document.querySelector('.sections');

  if (window.pageYOffset > headerHeight) {
    sections.classList.add('fixed-sections');
  } else {
    sections.classList.remove('fixed-sections');
  }
}

handleScroll();

window.addEventListener('scroll', handleScroll);

