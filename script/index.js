const images = [
    './images/image_2.jpg',
    './images/image_7.JPG',
    './images/image_4.JPG',
    './images/image_5.JPG',
  ];
  
  let currentIndex = 0;
  const backgroundContainer = document.querySelector('.background-image');
  
  function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length;
    backgroundContainer.style.backgroundImage = `url(${images[currentIndex]})`;
  }
  
  // Call the function at a specific interval to change the background image
  setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds
  