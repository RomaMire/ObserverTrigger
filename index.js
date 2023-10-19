const counters = document.querySelectorAll("[data-target]");

const scrollObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.intersectionRatio > 0) {
				const updateCounter = (entry) => {
					const target = +entry.target.getAttribute("data-target");

					let num = +entry.target.innerText;

					const increment = target / 200;

					if (num < target) {
						entry.target.innerText = `${Math.ceil(num + increment)}`; //.ceil() raise the (float) number up to integer

						setTimeout(function () {
							updateCounter(entry);
						}, 10);
					} else {
						entry.target.inneText = target;
					}
				};
				updateCounter(entry);

				scrollObserver.unobserve(entry.target);
			}
		});
	},
	{
		threshold: "1",
		rootMargin: "-100px",
	}
);

counters.forEach((counter) => {
	scrollObserver.observe(counter);
});

window.addEventListener("scroll", handleObserver);
