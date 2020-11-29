/* CONSTANTES Y VARIABLES */

// Elementos
// const menuButton = document.querySelector('#menu-button');
// const menuIcon = document.querySelector('.menu-icon');
// const mainNavigationNav = document.querySelector('.main-navigation__nav');
// const menuIconBarras = document.querySelectorAll('.menu-icon__barra');

// // Clases
// const navMenuVisibleClase = 'main-navigation__nav--visible';
// const menuIconCerrarClase = 'menu-icon--cerrar';

// /* EVENTOS */

// menuButton.addEventListener('click', function() {
//     // classList.toggle agrega una clase a un elemento si no la tiene,
//     // y se la quita si la tiene.
//     mainNavigationMenu.classList.toggle(menuVisibleClase);
//     menuIcon.classList.toggle(menuIconCerrarClase);
// });

/* CONSTANTES Y VARIABLES */

// Elementos
const menuButton = document.querySelector('#menu-button');
const menuIcon = document.querySelector('.menu-icon');
const mainNavigationNav = document.querySelector('.main-navigation__nav');

// Clases
const bodyNoScrollClase = 'no-scroll';
const navVisibleClase = 'main-navigation__nav--visible';
const menuIconCerrarClase = 'menu-icon--cerrar';

/* EVENTOS */

menuButton.addEventListener('click', function() {
    // Muchísimas gracias a https://mxb.dev/ 🙏
    document.body.classList.toggle(bodyNoScrollClase);
    mainNavigationNav.classList.toggle(navVisibleClase);
    menuIcon.classList.toggle(menuIconCerrarClase);
});