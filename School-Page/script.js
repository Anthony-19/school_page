const hamburgerMenu = document.querySelector('.hamburger-menu');
const closeIcon = document.querySelector('.close-icon');
const navbarMenu = document.querySelector('.navbar ul');

if (hamburgerMenu && closeIcon && navbarMenu) {
    hamburgerMenu.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
      hamburgerMenu.classList.toggle('active'); 
      closeIcon.classList.toggle('active'); 
    });
  
    closeIcon.addEventListener('click', () => {
      navbarMenu.classList.remove('active');
      hamburgerMenu.classList.remove('active'); 
      closeIcon.classList.remove('active'); 
    });
  } else {
    console.error('One or more elements were not found.');
  }
