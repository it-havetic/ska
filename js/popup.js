// Function to get the number of days between two dates
function daysBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    return Math.round(Math.abs((date2 - date1) / oneDay));
  }
  
  // Function to manage the popup display based on the last notice date and duration
  function managePopup() {
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
  
    // Get the last notice date and duration from the popup's data attributes
    const lastNoticeDateStr = popup.getAttribute('data-last-notice-date');
    const lastNoticeDate = new Date(lastNoticeDateStr);
    const noticeDuration = parseInt(popup.getAttribute('data-notice-duration'), 10); // in days
  
    // Get the current date
    const today = new Date();
  
    // Calculate how many days have passed since the last notice
    const daysPassed = daysBetween(lastNoticeDate, today);
  
    // Show popup only if the notice duration has not expired
    if (daysPassed <= noticeDuration) {
      showPopup();
    }
  
    function showPopup() {
      popup.classList.add('show');
    }
  
    // Allow user to close the popup manually
    closePopup.onclick = function() {
      popup.classList.remove('show');
    };
  }
  
  // Run the popup manager when the window loads
  window.onload = managePopup;
  