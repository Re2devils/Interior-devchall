// open menu on moblie-----------------------------------
// get elements bars to open nav,  close-nav
let nav = document.getElementById("nav");
const openNav = document.getElementById("bars");
let closeNav = document.getElementById("close-nav");
// console.log(nav, openNav, closeNav);
openNav.addEventListener('click', () => {
    nav.style.left = "0";
    nav.style.right = "0";

});
closeNav.addEventListener('click', () => {
    nav.style.left = "-110%";
    nav.style.right = "110%";
});
console.log(window.innerWidth);
if(window.innerWidth >= 768)
{
    nav.style.left = "0";
    nav.style.right = "0";
}