// JavaScript
let thumbnails = Array.from(document.querySelectorAll('.thumbnail'));
let lightbox = document.getElementById('lightbox');
let lightboxImg = document.getElementById('lightbox-img');
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let currentIndex;
let thumbnailsContainer = document.getElementById('thumbnails');
thumbnails.forEach((thumbnail, index) => {
  thumbnail.onclick = function(event) {
    event.preventDefault();
    lightbox.style.display = 'block';
    lightboxImg.src = this.href;
    currentIndex = index;
  }

});

prevButton.onclick = function() {
  currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
  lightboxImg.src = thumbnails[currentIndex].href;
}

nextButton.onclick = function() {
  currentIndex = (currentIndex + 1) % thumbnails.length;
  lightboxImg.src = thumbnails[currentIndex].href;
}

lightbox.onclick = function(event) {
  if (event.target === lightbox) {
    lightbox.style.display = 'none';
  }
}

document.addEventListener('keydown', function(event) {
  if (lightbox.style.display === 'block') {
    if (event.key === 'Escape') {
      lightbox.style.display = 'none';
    } else if (event.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
      lightboxImg.src = thumbnails[currentIndex].href;
    } else if (event.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % thumbnails.length;
      lightboxImg.src = thumbnails[currentIndex].href;
    }
  }
});document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && lightbox.style.display === 'block') {
      lightbox.style.display = 'none';
    }
  });