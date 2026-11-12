document.querySelectorAll('.main__banner').forEach((banner) => {
	const slides = banner.querySelectorAll('.banner__slide');
	const prevButton = banner.querySelector('[data-banner-prev]');
	const nextButton = banner.querySelector('[data-banner-next]');

	if (!slides.length || !prevButton || !nextButton) return;

	let currentSlide = 0;

	function showSlide(index) {
		currentSlide = (index + slides.length) % slides.length;
		slides.forEach((slide, slideIndex) => {
			slide.hidden = slideIndex !== currentSlide;
		});
	}

	prevButton.addEventListener('click', () => showSlide(currentSlide - 1));
	nextButton.addEventListener('click', () => showSlide(currentSlide + 1));

	showSlide(0);
});
