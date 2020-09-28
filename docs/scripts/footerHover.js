const container = document.getElementById('footer-logo');
const text = document.getElementById('footer-signature');

container.addEventListener('mouseover', (event) => {
	text.style.color = "#ffbfbf";
});

container.addEventListener('mouseout', (event) => {
	text.style.color = "#eb8f8f";
});