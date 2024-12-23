document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu');
    const menuMobile = document.getElementById('menu-mobile');
    const overlayMenu = document.getElementById('overlay-menu');
    const btnFechar = document.querySelector('.menu-mobile .btn-fechar i');

    btnMenu.addEventListener('click', () => {
        menuMobile.classList.toggle('abrir-menu');
        overlayMenu.style.display = 'block';
    });

    btnFechar.addEventListener('click', () => {
        menuMobile.classList.remove('abrir-menu');
        overlayMenu.style.display = 'none';
    });

    overlayMenu.addEventListener('click', () => {
        menuMobile.classList.remove('abrir-menu');
        overlayMenu.style.display = 'none';
    });
});