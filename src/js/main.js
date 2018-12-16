import './vendor';

const $sliderjs = $('.sliderjs');
const levelDuration = 750;
const $levelCounter = $('.sliderjs__counter');
const $skills = $('.skills__item');

$(window).on('load', () => {
	$skills.click(function () {
		$(this).children('.checkbox__fake').toggleClass('.is-checked');
	});
	$sliderjs.each((index, slider) => {
		$(slider).css({
			opacity: 1,
			transitionDuration: `${levelDuration}ms`,
			transitionDelay: `${levelDuration * index}ms`,
		});
	});

	const $levelFlex = $levelCounter.parents('.sliderjs');
	const levelFlexDelay = parseInt($levelFlex.css('transitionDelay'), 10) * 1000 + levelDuration;

	const startMeter = () => {
		const from = parseInt($levelCounter.data('from'), 10);
		const to = parseInt($levelCounter.data('to'), 10);
		const max = parseInt($levelCounter.data('max'), 10);
		let current = from;

		let levelInterval = setInterval(() => {
			if (current === to) {
				clearInterval(levelInterval);
			} else {
				current += 1;
			}

			let numbers = current.toString().split('');
			let numberEl = '';

			for (let i in numbers) {
				if (i) {
					numberEl += `<span>${numbers[i]}</span>`;
				}
			}

			$levelCounter.html(numberEl);
		}, 4);
		const duration = 4 * to;
		const $levelArrow = $('.level__arrow__path');
		const toPercent = 100 * (to / max);
		const toDeg = toPercent * (180 / 100);

		$levelArrow.attr('style', `
			transform: rotate(${toDeg}deg) translate(-190px, -621.969px);
			transition-duration: ${duration}ms;
		`);
	};

	setTimeout(() => startMeter(), levelFlexDelay);
});
