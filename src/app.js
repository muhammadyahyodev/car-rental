"use strict";

const siteBarMenuIcon = document.querySelector(".bx");
const siteBarExit = document.querySelector(".sitebar_exit");
const siteBarMenu = document.querySelector(".sitebar-menu");
const siteBarMenuItem = document.querySelector(".sitebar-menu-item");
const loginPanel = document.querySelector(".login_panel");
const loginBtn = document.querySelector(".login_btn");
const loginExit = document.querySelector(".registration_exit");
const cards = document.querySelector(".cards");
const darkMood = document.querySelector(".dark-mood");
const body = document.querySelector("body");
const submitForm = document.querySelector("#submitForm");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.value);
});

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

function switchTheme(theme) {
  if (theme != "night") {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    localStorage.setItem("theme", "night");
  } else {
    document.body.classList.remove("night");
    document.body.classList.add("dark");
    localStorage.setItem("theme", "light");
  }
}

// Sahifa yuklanganda localStorage obyektini tekshirish
window.onload = function () {
  let theme = localStorage.getItem("theme");
  // switchTheme(theme); // Kunduzgi rejimiga o'tish
};

let cars = [
  {
    img: "./images/car1",
    title: "Ford Fiesta",
    subTitle: "Economy car",
    seats: 5,
  },
  {
    img: "./images/car2",
    title: "Nissan Versa",
    subTitle: "Compact car",
    seats: 5,
  },
  {
    img: "./images/car3",
    title: "Toyoto Corolla",
    subTitle: "Mid-size car",
    seats: 5,
  },
  {
    img: "./images/car4",
    title: "Nissan Rogue",
    subTitle: "Mid-size SUV",
    seats: 5,
  },
  {
    img: "./images/car5",
    title: "Chevy Traverse",
    subTitle: "Full-size SUV car",
    seats: 5,
  },
  {
    img: "./images/car6",
    title: "Nissan Altima",
    subTitle: "Full-size car",
    seats: 5,
  },
];

function renderCarList(carList) {
  if (carList.length) {
    carList.forEach((car) => {
      const carItem = createElement(
        "div",
        [
          "w-[390px]",
          "h-[435px]",
          "bg-[#F5F5F5]",
          "rounded-3xl",
          "p-5",
          "my-2",
        ],
        ` <div class="">
        <h1 class="font-bold text-[24px]">${car.title}</h1>
        <p class="text-[#555555]">${car.subTitle}</p>
      </div>
      <div class="mt-5">
        <img src="${car.img}" alt="image" />
      </div>
      <div class="grid grid-cols-2 justify-center items-center mt-5">
        <p class="mt-5 flex">
          <img src="./images/icons/person.svg" alt="icon" />
          <span class="ml-4"> ${car.seats} Seats</span>
        </p>

        <p class="mt-5 flex">
          <img src="./images/icons/car_element.svg" alt="icon" />
          <span class="ml-4">Automatic</span>
        </p>

        <p class="mt-5 flex">
          <img src="./images/icons/document.svg" alt="icon" />
          <span class="ml-4"> 21+ Years</span>
        </p>

        <p class="mt-5 flex">
          <img src="./images/icons/drop.svg" alt="icon" />
          <span class="ml-4"> 1-lit / 2.5 km</span>
        </p>
      </div>`
      );
      // cards.append(carItem);
    });
  } else {
    cards.innerHTML = `<h2 class="text-center text-xl text-red-500 font-bold"> Car list empty! </h2>`;
  }
}

renderCarList(cars);

let intro_swiper = new Swiper(".intro_swiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

let swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
