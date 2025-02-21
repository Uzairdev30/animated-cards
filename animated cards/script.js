// Toggle Dark/Light Mode
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    
    // Change the toggle button icon
    const button = document.querySelector('.mode-toggle button');
    if (document.body.classList.contains('dark-mode')) {
      button.textContent = "🌞"; // Switch to light mode
    } else {
      button.textContent = "🌙"; // Switch to dark mode
    }
  }
  