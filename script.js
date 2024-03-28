"strict mode";

console.log("Hello world!");

// const myName = "victor de Great";
// const h1 = document.querySelector(".heading-primary");
// console.log(myName);
// console.log(h1);

// ///////////////////////////////////////////////////////////
// // smooth scrolling animation

// const allLi = document.querySelector("a:li");
// allLi.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = li.getAttribute("href");
// const allLinks = document.querySelectorAll("a:link");
// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const href = link.getAttribute("href");

// scroll back to the top
// if (href === "#")
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });

// // scroll to other links
// if (href !== "#" && href.startsWith("#")) {
//   const sectionEl = document.querySelector(href);
//   sectionEl.scrollIntoView({ behavior: "smooth" });
// }

// // close mobile navigation
// if (link.classList.contains("main-nav-open"))
//   headerEl.classList.toggle("nav-open");

// LAZY LOADING IMAGE
const mainNav = document.querySelector(".main-nav");
const imgTargets = document.querySelectorAll("img[data-src]");

// callback function
const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // REPLACE SRC WITH DATA-SRC
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};
//
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

// STICKY NAVIGATION

const header = document.querySelector(".header");
// const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const mainNavObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-90px`,
});

// mainNavObserver.observe(main - nav);

// TUTORIAL #198 (REVEALLING ELEMENTS ON SROLL)

const allSection = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});

const nam = "victor";
console.log(nam);
