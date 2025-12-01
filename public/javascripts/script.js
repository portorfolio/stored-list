//popup window function
document.addEventListener('DOMContentLoaded', function () {
    const popupOverlay = document.getElementById('popup');
    const closePopupButton = document.getElementById('close-popup');

    // Show the popup when the page loads
    popupOverlay.style.display = 'flex'; // Use flex to center content

    // Hide the popup when the close button is clicked
    closePopupButton.addEventListener('click', function () {
        popupOverlay.style.display = 'none';
    });
});

//draggable emoticons
