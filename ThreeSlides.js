document.addEventListener('DOMContentLoaded', () => {
  const slideshows = document.querySelectorAll('.slideshow-container');

  slideshows.forEach((container) => {
    const slidesWrapper = container.querySelector('.slides');
    const slides = container.querySelectorAll('.slide');
    const prevButton = container.querySelector('.prev');
    const nextButton = container.querySelector('.next');
    const toggleButton = container.parentElement.querySelector('.controls button');

    const slidesPerView = 3;
    const totalPages = Math.ceil(slides.length / slidesPerView);
    let currentIndex = 0;
    let autoPlayInterval = null;
    let isPlaying = true;

    function updateSlidePosition() {
      const offset = -currentIndex * 100;
      slidesWrapper.style.transform = `translateX(${offset}%)`;
    }

    function changeSlide(direction) {
      currentIndex += direction;

      if (currentIndex < 0) {
        currentIndex = totalPages - 1;
      }

      if (currentIndex >= totalPages) {
        currentIndex = 0;
      }

      updateSlidePosition();
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayInterval = setInterval(() => {
        changeSlide(1);
      }, 5000);
    }

    function stopAutoPlay() {
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
      }
    }

    if (prevButton) {
      prevButton.addEventListener('click', () => changeSlide(-1));
    }

    if (nextButton) {
      nextButton.addEventListener('click', () => changeSlide(1));
    }

    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        if (isPlaying) {
          stopAutoPlay();
          toggleButton.textContent = 'Resume';
        } else {
          startAutoPlay();
          toggleButton.textContent = 'Pause';
        }

        isPlaying = !isPlaying;
      });
    }

    updateSlidePosition();
    startAutoPlay();
  });
});