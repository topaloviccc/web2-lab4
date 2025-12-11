document.addEventListener("DOMContentLoaded", () => {
	const catImages = document.querySelectorAll(".clickable");

	catImages.forEach((catImg) => {
		catImg.addEventListener("click", () => {
			alert(catImg.dataset.info);
		});
	});
});
