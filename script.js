"use strict";

const video = document.getElementById("name");
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // This enables the smooth scrolling animation
  });
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
