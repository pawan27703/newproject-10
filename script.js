// script.js

// Selecting elements for display
const keyDisplay = document.getElementById('key-display');
const codeDisplay = document.getElementById('code-display');
const historyList = document.getElementById('history-list');

// Sound on keypress
const keyPressSound = new Audio('keypress.mp3');

// Key history array to store previous keys
const keyHistory = [];

// Function to update display and history
function updateDisplay(event) {
  // Update key and key code display
  keyDisplay.textContent = `Key: ${event.key}`;
  codeDisplay.textContent = `Key Code: ${event.keyCode}`;
  
  // Play sound
  keyPressSound.play();
  
  // Update history log
  const keyLog = `${event.ctrlKey ? 'Ctrl + ' : ''}${event.altKey ? 'Alt + ' : ''}${event.shiftKey ? 'Shift + ' : ''}${event.key} (Code: ${event.keyCode})`;
  
  keyHistory.unshift(keyLog); // Add new key press to the beginning
  if (keyHistory.length > 5) keyHistory.pop(); // Limit to last 5 key presses
  
  // Render history
  historyList.innerHTML = keyHistory.map(key => `<li>${key}</li>`).join('');
}

// Event listener for keydown
window.addEventListener('keydown', updateDisplay);
