const ulElement = document.querySelector('.headerul');
const linkElement = document.querySelector('a[href="#"]');

ulElement.addEventListener("click", (e) => {
	let imgSrc = ulElement.children[0].src;
	if (imgSrc.includes("icon-hamburger")) {
		ulElement.children[0].src = "/images/icon-close.svg";
		linkElement.classList.add("set__overlay");
	} else if (imgSrc.includes("icon-close")) {
		ulElement.children[0].src = "/images/icon-hamburger.svg";
		linkElement.classList.remove("set__overlay");
	}
});
ulElement.addEventListener("click", () => {
    ulElement.toggle("active");
    linkElement.toggle("active");
})

