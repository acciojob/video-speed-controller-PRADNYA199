// Select elements
const video = document.querySelector('.flex');
const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');

// Function to update the playback speed based on the bar position
function handleSpeedChange(event) {
  // Calculate percentage of height clicked
  const y = event.pageY - speed.offsetTop;
  const percent = y / speed.offsetHeight;
  const min = 0.5;
  const max = 4;
  
  // Calculate playback rate
  const playbackRate = percent * (max - min) + min;
  video.playbackRate = playbackRate;

  // Update speed bar display and height
  speedBar.style.height = `${percent * 100}%`;
  speedBar.textContent = `${playbackRate.toFixed(1)}×`;
}

// Event listener for speed control
speed.addEventListener('mousemove', (e) => {
  if (e.buttons === 1) { // Only update if mouse button is pressed
    handleSpeedChange(e);
  }
});
speed.addEventListener('click', handleSpeedChange);
