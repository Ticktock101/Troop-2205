const images = [
    '../images/image_2.jpg',
    '../images/image_4.JPG',
    '../images/image_5.JPG',
    '../images/image_7.JPG'
  ];
  
  let currentIndex = 0;
  const backgroundContainer = document.querySelector('.background-image');
  
  function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length;
  
    // Add the 'slide' class to trigger the transition
    backgroundContainer.classList.add('slide');
  
    // Wait for the transition to complete
    setTimeout(() => {
      // Change the background image after the transition
      backgroundContainer.style.backgroundImage = `url(${images[currentIndex]})`;
      
      // Remove the 'slide' class to reset the transition
      backgroundContainer.classList.remove('slide');
    }, 500);
  }
  
  // Call the function at a specific interval to change the background image
  setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds
  