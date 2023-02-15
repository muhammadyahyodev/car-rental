"use strict";

const siteBarMenuIcon = document.querySelector(".bx");
const siteBarExit = document.querySelector(".sitebar_exit");
const siteBarMenu = document.querySelector(".sitebar-menu");
const siteBarMenuItem = document.querySelector(".sitebar-menu-item");

siteBarMenuIcon.addEventListener("click", () => {
  siteBarMenuItem.classList.remove("right-[-100%]");
  siteBarMenuItem.classList.add("right-0");
  siteBarMenu.classList.toggle("clicked");
});

siteBarExit.addEventListener("click", () => {
  siteBarMenuItem.classList.add("right-[-100%]");
  siteBarMenuItem.classList.remove("right-0");
  siteBarMenu.classList.toggle("clicked");
});
