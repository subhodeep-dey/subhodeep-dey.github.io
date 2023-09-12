document.addEventListener("DOMContentLoaded", function () {
	const toggleLink = document.getElementById("toggle-paragraph");
	const hiddenParagraph = document.getElementById("hidden-paragraph");

	toggleLink.addEventListener("click", function (event) {
		event.preventDefault(); // Prevent the link from navigating

		if (hiddenParagraph.style.display === "none" || hiddenParagraph.style.display === "") {
			hiddenParagraph.style.display = "block";
			toggleLink.textContent = "🤣 LOL, you still clicked!";
		} else {
			hiddenParagraph.style.display = "none";
			toggleLink.textContent = "Don't Click";
		}
	});
});
