const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

var images = ['images/slideshow/Slide1.PNG','images/slideshow/Slide2.PNG','images/slideshow/Slide3.PNG','images/slideshow/Slide4.PNG','images/slideshow/Slide5.PNG','images/slideshow/Slide6.PNG','images/slideshow/Slide7.PNG','images/slideshow/Slide8.PNG','images/slideshow/Slide9.PNG','images/slideshow/Slide10.PNG','images/slideshow/Slide11.PNG','images/slideshow/Slide12.PNG','images/slideshow/Slide13.PNG','images/slideshow/Slide14.PNG','images/slideshow/Slide15.PNG','images/slideshow/Slide16.PNG',];

var i =0;
  function slideshow() {
    document.getElementById("image").src=images[i];

    if(i<images.length-1){
      i++;
    }
    else{
      i=0;
    }
    setTimeout("slideshow()" , 4000);
  }
window.onload = slideshow;