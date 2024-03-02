document.addEventListener("DOMContentLoaded", function() {
    const sectionsButton = document.querySelector(".sections-button");
    const subMenu = document.querySelector(".sub-menu");

    sectionsButton.addEventListener("click", function() {
        subMenu.classList.toggle("active");
        sectionsButton.classList.toggle("active");
    });

    // Close the menu when clicking outside of it
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

// Call the function on page load
handleScroll();

// Attach the same function to the scroll event
window.addEventListener('scroll', handleScroll);
// SLIDE
