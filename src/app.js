"use strict";

const siteBarMenuIcon = document.querySelector(".bx");
const siteBarExit = document.querySelector(".sitebar_exit");
const siteBarMenu = document.querySelector(".sitebar-menu");
const siteBarMenuItem = document.querySelector(".sitebar-menu-item");
const loginPanel = document.querySelector(".login_panel");
const loginBtn = document.querySelector(".login_btn");
const loginExit = document.querySelector(".registration_exit");

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

loginBtn.addEventListener("click", () => {
  loginPanel.classList.remove("hidden");
});

loginExit.addEventListener("click", () => {
  loginPanel.classList.add("hidden");
});
