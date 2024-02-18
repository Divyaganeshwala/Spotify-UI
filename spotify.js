const heart = document.querySelector('.album i');
let isClicked = false; // Flag to track heart icon state

heart.addEventListener('click', () => {
  if (isClicked) {
    // If already clicked, revert to original color
    
    heart.style.color = '#ffffff'
    isClicked = false;

  } else {

    // If not clicked yet, change to new color
    heart.style.color = '#1bd760';
    heart.style.transition = '.5s ease';
    isClicked = true;
  }
});

const currTimeSpan = document.querySelector('.curr_time');
const progressBar = document.querySelector('.progress_bar');
const totalTime = '3:33'; // Assuming total time is 3 minutes and 33 seconds

progressBar.addEventListener('input', () => {
    const progress = progressBar.value; // Get current progress value (0-100)
    const currentTime = calculateTimeFromProgress(progress, totalTime);
    currTimeSpan.textContent = currentTime; // Update the current time display
  });

function calculateTimeFromProgress(progress, totalTime) {
    const totalSeconds = parseTimeToSeconds(totalTime);
    const currentTimeSeconds = Math.floor(progress / 100 * totalSeconds);
    return formatTime(currentTimeSeconds);
}
  
function parseTimeToSeconds(timeString) {
    const [minutes, seconds] = timeString.split(':');
    return parseInt(minutes) * 60 + parseInt(seconds);
}
  
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

document.addEventListener("DOMContentLoaded", function() {
  // Function to update background image based on time of day
  function updateBackground() {
    const currentTime = new Date().getHours();
    let imageUrl = "";

    if (currentTime >= 6 && currentTime < 12) {
      // Morning background
      imageUrl = "./img/morning.jpg";
    } else if (currentTime >= 12 && currentTime < 18) {
      // Afternoon background
      imageUrl = "./img/afternoon.jpg";
    } else {
      // Evening/Night background
      imageUrl = "./img/night.jpg";
    }

    // Set the background image
    document.querySelector(".main_content").style.backgroundImage = `url(${imageUrl})`;
  }

  // Update background on page load
  updateBackground();

  // Update background every 10 minutes
  setInterval(updateBackground,  1000);
});