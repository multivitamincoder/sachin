 let image = document.getElementById('image');
   let imageText = document.getElementById('imageText');
   let images = ['image1.jpg', 'image2.jpg', 'image3.jpg', '1.jpg', '12.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];
   
   setInterval(function() {
     let random = Math.floor(Math.random() * 13);
     image.src = images[random];
     // Toggle dimmed class when displaying text
     imageText.textContent = 'WE ARE ONE';
     image.classList.add('dimmed');
     setTimeout(function() {
       imageText.textContent = '';
       image.classList.remove('dimmed');
     }, 2000);
   }, 3000);
   
   image.addEventListener('mouseover', function() {
      image.classList.add('dimmed');
      imageText.style.opacity = 1;
   });
   
   image.addEventListener('mouseout', function() {
      image.classList.remove('dimmed');
      imageText.style.opacity = 0;
   });

