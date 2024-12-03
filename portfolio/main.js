 // Function to toggle bio visibility
 function toggleBio() {
     var bioSections = document.querySelectorAll('.bio');
     var bioButton = document.querySelector('.side-bar'); // Select the biography button
     
     // If any bio is hidden, show it and hide the button
     bioSections.forEach(bioSection => {
         if (bioSection.style.display === "none" || bioSection.style.display === "") {
             bioSection.style.display = "block";  // Ensure the bio is displayed
             setTimeout(() => {
                 bioSection.style.opacity = "1";  // Fade in the bio
             }, 10); // Short delay to trigger the transition
             
             bioButton.style.display = "none";  // Hide the button after the bio is shown
         } else {
             bioSection.style.opacity = "0";  // Fade out the bio
             setTimeout(() => {
                 bioSection.style.display = "none";  // Hide the bio after the animation completes
                 bioButton.style.display = "inline-block"; // Show the button again when the bio is hidden
             }, 500); // Delay to match the animation duration
         }
     });
 }

 // Prevent closing of bio if clicking outside of it
 document.addEventListener('click', function(event) {
     var bioSections = document.querySelectorAll('.bio');
     var bioButton = document.querySelector('.side-bar');
     
     // Check if the clicked target is not the bio section or button
     if (![...bioSections].some(bio => bio.contains(event.target)) && !bioButton.contains(event.target)) {
         bioSections.forEach(bioSection => {
             bioSection.style.opacity = "0";  // Fade out the bio
             setTimeout(() => {
                 bioSection.style.display = "none";  // Hide the bio after the animation completes
                 bioButton.style.display = "inline-block"; // Show the button again when the bio is hidden
             }, 500); // Delay to match the animation duration
         });
     }
 });


 document.addEventListener('DOMContentLoaded', () => {
    const dogCard = document.querySelector('.dog');
    const sodooCard = document.querySelector('.sodoo');

    const handleScroll = () => {
        const dogPosition = dogCard.getBoundingClientRect();
        const sodooPosition = sodooCard.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        // Check if the dog card is in view
        if (dogPosition.top < viewportHeight && dogPosition.bottom > 0) {
            dogCard.classList.add('visible');
        } else {
            dogCard.classList.remove('visible');
        }

        // Check if the sodoo card is in view
        if (sodooPosition.top < viewportHeight && sodooPosition.bottom > 0) {
            sodooCard.classList.add('visible');
        } else {
            sodooCard.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', handleScroll);
});
