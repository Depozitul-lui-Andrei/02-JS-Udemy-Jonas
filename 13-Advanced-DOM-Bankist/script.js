'use strict';
//🌟🔴🟢🌟
///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////
// 🔴 Project: "Bankist" Website

/////////////////////////////////////////////////
// 🔴 How the DOM really works

/////////////////////////////////////////////////
// 🔴🔴🔴 Selecting, creating and deleting elements

/*
// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(`.header`);
const allSections = document.querySelectorAll(`.section`);
console.log(allSections);

document.getElementById(`section--1`);
const allButtons = document.getElementsByTagName(`button`);
console.log(allButtons);

console.log(document.getElementsByClassName(`btn`));

// Creating and inserting elements
// .insertAdjacentHTML - in bankist app

const message = document.createElement(`div`);
message.classList.add(`cookie-message`);
// message.textContent = `We use cookies for improved functionality and analytics.`;
message.innerHTML = `We use cookies for improved functionality and analytics.<button class="btn btn--close-cookie">Got it!</button>`;

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector(`.btn--close-cookie`)
  .addEventListener(`click`, function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

/////////////////////////////////////////////////
// 🔴 Styles, attributes and classes

// Styles
message.style.backgroundColor = `#37383d`;
message.style.width = `120%`;

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + `px`;

document.documentElement.style.setProperty(`--color-primary`, `orange`);

// Attributes
const logo = document.querySelector(`.nav__logo`);
console.log(logo.alt);

console.log(logo.className);

logo.alt = `Beautiful minimalist logo`;

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute(`designer`));
logo.setAttribute(`company`, `Bankist`);

console.log(logo.src);
console.log(logo.getAttribute(`src`));

const link = document.querySelector(`.nav__link--btn`);
console.log(link.href);
console.log(link.getAttribute(`href`));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add(`c`, `j`);
logo.classList.remove(`c`, `k`);
logo.classList.toggle(`c`);
logo.classList.contains(`c`);

// Don't use className (overrides all existing classes and only allow to put 1 class)
// logo.className = `jonas`;
*/

/////////////////////////////////////////////////
// 🔴 Implementing smooth scrolling
// 🟢.getBoundingClientRect() - is relative to the viewport
const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

btnScrollTo.addEventListener(`click`, function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log(`Current scroll (X/Y)`, window.pageXOffset, window.pageYOffset);

  // console.log(
  //   `height/width viewport`,
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling (added smooth)
  // 🟢old way
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: `smooth`,
  // });

  // 🟢 NEW way
  section1.scrollIntoView({
    behavior: `smooth`,
  });
});

/////////////////////////////////////////////////
// 🔴 Types of events and event handlers
const h1 = document.querySelector(`h1`);

const alertH1 = function (e) {
  alert(`addEventListener: Great! You are reading the heading :D`);
  // console.log(`addEventListener: Great! You are reading the heading :D`);
};

h1.addEventListener(`mouseenter`, alertH1);

// 🟢removing event listner after 3 sec .removeEventListener
setTimeout(() => h1.removeEventListener(`mouseenter`, alertH1), 1000);

// old way
// h1.onmouseenter = function (e) {
//   // alert(`addEventListener: Great! You are reading the heading :D`);
//   console.log(`addEventListener: Great! You are reading the heading :D`);
// };

/////////////////////////////////////////////////
// 🔴 Events propagation bubbling and capturing

/////////////////////////////////////////////////
// 🔴 Event propagation practice

// rbg(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));

document.querySelector(`.nav__link`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`LINK`, e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`CONTAINER`, e.target, e.currentTarget);
});

document.querySelector(`.nav`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`NAV`, e.target, e.currentTarget);
});
