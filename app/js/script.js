const burgerMenu = document.querySelector("#burgerMenu");
const header = document.querySelector("header.header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");

burgerMenu.addEventListener("click", function () {
	console.log("open hamburger");
	if (header.classList.contains("open")) {
		// Close Burger menu
		body.classList.remove("noscroll");
		header.classList.remove("open");
		fadeElems.forEach(function (element) {
			element.classList.remove("fade-in");
			element.classList.add("fade-out");
		});
		overlay.classList.remove("fade-in");
		overlay.classList.add("fade-out");
	} else {
		// Open Hamburger menu
		body.classList.add("noscroll");
		header.classList.add("open");
		fadeElems.forEach(function (element) {
			element.classList.remove("fade-out");
			element.classList.add("fade-in");
		});
		overlay.classList.remove("fade-out");
		overlay.classList.add("fade-in");
	}
});
