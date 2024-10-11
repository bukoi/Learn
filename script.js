"use strict";

const video = document.getElementById("name");
function scrollToTop() {
  if (window.scrollY > 0) {
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  }
}
function goTOweb() {
  window.open("test.html", "_blank"); // Replace with your desired URL
}
// Set the initial playback rate
video.playbackRate = 0.9; // Start at normal speed

video.addEventListener("timeupdate", () => {
  if (video.currentTime < 6) {
    video.playbackRate = 0.9; // Normal speed for the first 6 seconds
  } else {
    video.playbackRate = 1.3; // Speed up after 6 seconds
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const smallText = document.querySelectorAll('.small-text');

  // Intersection Observer to detect when the small-text elements come into view
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Add the 'show' class to trigger the animation
              entry.target.classList.add('show');
              
              // Stop observing this element after the animation has been triggered once
              observer.unobserve(entry.target);
          }
      });
  });

  // Start observing each small-text element
  smallText.forEach(text => {
      observer.observe(text);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scaleText = document.querySelectorAll('.scale-text');

  // Intersection Observer to detect when the scale-text elements come into view
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Add the 'show' class to trigger the scaling animation
              entry.target.classList.add('show');
          }
      });
  });

  // Start observing each scale-text element
  scaleText.forEach(text => {
      observer.observe(text);
  });
});