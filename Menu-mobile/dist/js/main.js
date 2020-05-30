document.querySelector('.header-nav-mobile__icon').addEventListener('click', function() {
    const overlayElement = document.querySelector('.header-nav-mobile__overlay');
    const menuMobileElement = document.querySelector('.header-nav-mobile__list');

    overlayElement.style.display === 'none' ? 
    overlayElement.style.display = 'block' : 
    overlayElement.style.display = 'none'

    menuMobileElement.style.display === 'none' ? 
    menuMobileElement.style.display = 'block' : 
    menuMobileElement.style.display = 'none'

})