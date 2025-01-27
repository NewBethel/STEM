let currentIndex = 0;
const slidesContainer = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const slidesPerView = 3;
let autoPlayInterval;
let isPlaying = true; // Track the state of autoplay

// Function to change slides
function changeSlide(direction) {
  const maxIndex = Math.ceil(slideCount / slidesPerView) - 1;

  // Update the index
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = maxIndex; // Loop to the last slide
  if (currentIndex > maxIndex) currentIndex = 0; // Loop to the first slide

  // Move the slides container
  const offset = -currentIndex * 100;
  slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Autoplay functionality
function autoPlay() {
  changeSlide(1); // Move to the next slide
}

// Start autoplay
function startAutoPlay() {
  autoPlayInterval = setInterval(autoPlay, 5000);
}

// Stop autoplay
function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// Toggle autoplay with a single button
function toggleSlideshow() {
  const toggleButton = document.getElementById('toggleButton');
  if (isPlaying) {
    stopAutoPlay();
    toggleButton.textContent = 'Resume';
  } else {
    startAutoPlay();
    toggleButton.textContent = 'Pause';
  }
  isPlaying = !isPlaying; // Flip the state
}

// Start autoplay when the page loads
startAutoPlay();
