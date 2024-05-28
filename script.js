document.addEventListener("DOMContentLoaded", function () {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the modal image and caption elements
  var modalImg = document.getElementById("img01");
  var modalCaption = document.getElementById("modalCaption");

  // Function to open the modal when clicking on an "ENLARGE" arrow
  function openModal(event) {
    // Get the image and caption related to the clicked "ENLARGE" arrow
    var image = event.target.closest('.image-container').querySelector("img");
    var caption = event.target.closest('.image-container').querySelector('.caption');

    // Set the image source and caption text in the modal
    modalImg.src = image.src;
    modalCaption.innerHTML = caption.innerHTML;

    // Show the modal
    modal.style.display = "block";

    // Add modal-open class to body to disable scrolling
    document.body.classList.add("modal-open");
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";

    // Remove modal-open class from body when modal is closed
    document.body.classList.remove("modal-open");
  }

  // Event listener to open modal when clicking on an "ENLARGE" arrow
  var enlargeButtons = document.querySelectorAll(".enlarge");
  enlargeButtons.forEach(function (button) {
    button.addEventListener("click", openModal);
  });

  // Event listener to close modal when clicking on the close button
  var closeButton = document.querySelector(".close");
  closeButton.addEventListener("click", closeModal);

  // Event listener to close modal when clicking outside of it
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Function to handle scrolling
  function handleScroll() {
    var headerHeight = document.getElementById("main-header").offsetHeight;
    var sections = document.querySelector(".sections");
    var buttonContainer = document.querySelector(".button-container");

    if (window.pageYOffset > headerHeight + 50) {
      sections.classList.add("fixed-sections");
      buttonContainer.classList.add("fixed-button-container");
    } else {
      sections.classList.remove("fixed-sections");
      buttonContainer.classList.remove("fixed-button-container");
    }
  }

  // Event listener to handle scrolling
  window.addEventListener("scroll", handleScroll);

  // Call handleScroll function on page load to adjust fixed positioning
  handleScroll();
});

// Function to toggle mobile menu
function toggleMobileMenu(icon) {
  icon.classList.toggle("open");
  var mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("active");
}

// Function to toggle submenu on larger screens
function toggleSubMenu() {
  var subMenu = document.getElementById('subMenu');
  var sectionsButton = document.getElementById('sectionsButton');

  subMenu.classList.toggle("active");
  sectionsButton.classList.toggle("active");
}

// Function to close submenu when a link is clicked
function closeSubMenu() {
  var subMenu = document.getElementById('subMenu');
  var hideArrow = document.getElementById('hideArrow');
  var openArrow = document.getElementById('openArrow');
  var sectionsButton = document.getElementById('sectionsButton');

  if (window.innerWidth <= 600) { // Smaller screens
    subMenu.classList.add("hidden");
    hideArrow.style.display = "inline-block";
    openArrow.style.display = "none";
    sectionsButton.style.display = "inline-block";
    subMenu.classList.remove("active");
  }
}

// Event listeners for submenu links
var submenuLinks = document.querySelectorAll('.sub-menu a');
submenuLinks.forEach(link => {
  link.addEventListener('click', closeSubMenu);
});

// Event listeners for toggle menu buttons
var hideArrow = document.getElementById('hideArrow');
var openArrow = document.getElementById('openArrow');
hideArrow.addEventListener('click', toggleMenu);
openArrow.addEventListener('click', toggleMenu);

// Function to toggle menu visibility
function toggleMenu() {
  var subMenu = document.getElementById('subMenu');
  var sectionsButton = document.getElementById('sectionsButton');

  subMenu.classList.toggle("hidden");
  hideArrow.style.display = hideArrow.style.display === "none" ? "inline-block" : "none";
  openArrow.style.display = openArrow.style.display === "none" ? "inline-block" : "none";

  // Toggle visibility of mobile sections button
  sectionsButton.style.display = sectionsButton.style.display === "none" ? "inline-block" : "none";

  // Remove 'active' class from submenu
  subMenu.classList.remove("active");
}

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
}