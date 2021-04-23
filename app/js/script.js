const burgerMenu = document.querySelector("#burgerMenu");
const header = document.querySelector("header.header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

burgerMenu.addEventListener("click", function () {
	console.log("open hamburger");
	if (header.classList.contains("open")) {
		// Close Burger menu
		header.classList.remove("open");
		fadeElems.forEach(function (element) {
			element.classList.remove("fade-in");
			element.classList.add("fade-out");
		});
		overlay.classList.remove("fade-in");
		overlay.classList.add("fade-out");
	} else {
		// Open Hamburger menu
		header.classList.add("open");
		fadeElems.forEach(function (element) {
			element.classList.remove("fade-out");
			element.classList.add("fade-in");
		});
		overlay.classList.remove("fade-out");
		overlay.classList.add("fade-in");
	}
});
