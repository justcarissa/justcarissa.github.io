
// Function to toggle mobile menu
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
    if (window.innerWidth <= 600) { // Smaller screens
      subMenu.classList.add("hidden");
      hideArrow.style.display = "inline-block";
      openArrow.style.display = "none";
      sectionsButton.style.display = "inline-block";
      subMenu.classList.remove("active");
    }
  }

  hideArrow.addEventListener('click', toggleMenu);
  openArrow.addEventListener('click', toggleMenu);
  sectionsButton.addEventListener("click", toggleSubMenu);

  const submenuLinks = document.querySelectorAll('.sub-menu a');
  submenuLinks.forEach(link => {
    link.addEventListener('click', closeSubMenu);
  });


  var allImages = document.querySelectorAll('.first-section-img, .graphicdesign-img, .scrollable-image img, .vertical-scrollable-image img');

  allImages.forEach(function(image) {
    image.addEventListener('click', function() {
      var imageContainer = event.target.closest('.image-container, .scrollable-image-container .link-wrap');
      var image = imageContainer.querySelector('img');
      var caption = imageContainer.querySelector('.caption');



      modalImg.src = this.src;
      var caption = this.nextElementSibling;
      captionText.innerHTML = caption ? caption.innerHTML : '';
      modal.style.display = "block";
    });
  });

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

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

  handleScroll();
  window.addEventListener('scroll', handleScroll);
});

// Function to toggle modal function
function toggleModal(event) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("modalCaption");

  var imageContainer = event.target.closest('.image-container, .scrollable-image-container, .link-wrap');
  var image = imageContainer.querySelector('img');
  var caption = imageContainer.querySelector('.caption');

  modalImg.src = image.src;
  captionText.innerHTML = caption ? caption.innerHTML : '';
  modal.style.display = "block";
  
  // Add modal-open class to body to disable scrolling and clicking
  document.body.classList.add('modal-open');

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
    // Remove modal-open class from body when modal is closed
    document.body.classList.remove('modal-open');
  };
}