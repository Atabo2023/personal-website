console.log("Hello world!");

const myName = "victor de Great";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

///////////////////////////////////////////////////////////
// smooth scrolling animation

const allLi = document.querySelectorAll("a:li");
allLi.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = li.getAttribute("href");
    // const allLinks = document.querySelectorAll("a:link");
    // allLinks.forEach(function (link) {
    //   link.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     const href = link.getAttribute("href");

    // scroll back to the top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile navigation
    if (link.classList.contains("main-nav-open"))
      headerEl.classList.toggle("nav-open");
  });
});
