let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // Select all menu items
  var menuItems = document.querySelectorAll('.navbar a');

  // Loop through each menu item
  menuItems.forEach(function (menuItem) {
      // Add a mouseover event listener
      menuItem.addEventListener("mouseover", function () {
          // Change the background color when the menu item is hovered over
          this.style.backgroundColor= "rgb(255, 166, 0)"; // Change this to the desired background color
          this.style.transition = "background-color 0.3s ease"; // Optional: Add a smooth transition effect
      });

      // Add a mouseout event listener
      menuItem.addEventListener("mouseout", function () {
          // Reset the background color when the mouse is not over the menu item
          this.style.backgroundColor = "transparent"; // Change this to the default background color
      });
  });
});
