const burgerMenu = document.querySelector('#burgerMenu');
const header = document.querySelector('header.header')
const overlay = document.querySelector('.overlay');
burgerMenu.addEventListener('click', function (){
   console.log('open hamburger');
   if (header.classList.contains('open')) { // Close Burger menu
       header.classList.remove('open');
       overlay.classList.remove('fade-in');
       overlay.classList.add('fade-out');
   }
   else { // Open Hamburger menu
       header.classList.add('open');
       overlay.classList.remove('fade-out');
       overlay.classList.add('fade-in');
   }
});