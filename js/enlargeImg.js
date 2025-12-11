document.addEventListener("DOMContentLoaded", () => {
	const catImages = document.querySelectorAll("img");
	catImages.forEach((img) => {
		img.addEventListener("mouseenter", () => {
			img.style.transform = "scale(1.1)";
		});
		img.addEventListener("mouseleave", () => {
			img.style.transform = "scale(1)";
		});
	});
});
