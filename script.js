// Select elements
const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const volumeControl = document.querySelector('.volume');
const playbackSpeedControl = document.querySelector('.playbackSpeed');
const rewindButton = document.querySelector('.rewind');
const fastForwardButton = document.querySelector('.fastForward');

// Play/Pause toggle function
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update play/pause button
function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// Update volume
function handleVolumeChange() {
  video.volume = volumeControl.value;
}

// Update playback speed
function handleSpeedChange() {
  video.playbackRate = playbackSpeedControl.value;
}

// Rewind video
function rewind() {
  video.currentTime -= 10;
}

// Fast forward video
function fastForward() {
  video.currentTime += 25;
}

// Update progress bar based on video progress
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progress.value = percent;
}

// Seek video when progress bar is changed
function scrub(event) {
  const scrubTime = (event.target.value / 100) * video.duration;
  video.currentTime = scrubTime;
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
volumeControl.addEventListener('input', handleVolumeChange);
playbackSpeedControl.addEventListener('input', handleSpeedChange);
rewindButton.addEventListener('click', rewind);
fastForwardButton.addEventListener('click', fastForward);
progress.addEventListener('input', scrub);
