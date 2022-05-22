let menuOpen = false;
let openMenu = document.querySelector("#open_menu");
let closeMenu = document.querySelector("#close_button");
const menu = document.querySelector(".menu");
const overlay = document.querySelector("#overlay");
let dropdown = document.querySelector(".dropdown");
let dropdown2 = document.querySelector("#dropdown");

dropdown.onclick = function () {
  dropdown.classList.toggle("active");
  if (dropdown2.classList.contains("active")) {
    dropdown2.classList.remove("active");
  }
};

dropdown2.onclick = function () {
  dropdown2.classList.toggle("active");
  if (dropdown.classList.contains("active")) {
    dropdown.classList.remove("active");
  }
};

function openNav() {
  menu.style.display = "block";
  menuOpen = true;
  overlay.style.display = "block";
}

function closeNav() {
  menu.style.display = "none";
  menuOpen = false;
  overlay.style.display = "none";
  dropdown.classList.remove("active");
  dropdown2.classList.remove("active");
}

openMenu.onclick = function () {
  openNav();
};

closeMenu.onclick = function () {
  closeNav();
};

overlay.onclick = function () {
  closeNav();
};
