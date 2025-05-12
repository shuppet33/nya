let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
const win = document.body

$(document).ready(function ($) {
	$body = $('body');

});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	// allDefautAnim();
	// burgerMobile();
	scrollNav();
	if (windowWidth > mediaPoint1) {
		popup('14px', '.send_form', '.popup_send');
		popup('14px', '.call_form', '.popup_call');
	} else {
		popup('0', '.send_form', '.popup_send');
		popup('0', '.call_form', '.popup_call');
		burgerMobile();
	}
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle ?
						image.currentStyle['object-fit'] :
						image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function succes(success) {
	$(success).toggleClass('active');
	setTimeout(function () {
		$(success).removeClass('active')
	}, 3000)
}

function close(closes) {
	$(closes).toggleClass('active');
	setTimeout(function () {
		$(closes).removeClass('active')
	}, 3000)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: transparent'].join(';');
var message = 'Developed by KotoFeelGood https://api.whatsapp.com/send?phone=79615311386&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0';
console.info('%c%s', styles, message);

// const reviewsSlider = new Swiper('.carousel__slider ', {
// 	slidesPerView: 5,
// 	spaceBetween: 20,
// 	centeredSlides: true,
// 	centeredSlidesBounds: true,
// 	loop: true,
// 	a11y: true,
//
// 	navigation: {
// 		nextEl: '.custom-button-next',
// 		prevEl: '.custom-button-prev',
// 	},
//
// 	breakpoints: {
// 		320: { slidesPerView: 2 },
// 		768: { slidesPerView: 3 },
// 		1024: { slidesPerView: 5 }
// 	}
// });


const cardItemListSlider = new Swiper('.card__item-block__mob', {
	slidesPerView: 2,
	spaceBetween: 15,
	loop: true,
	navigation: {
		nextEl: '.card__slider-button-next__mob',
		prevEl: '.card__slider-button-prev__mob',
	},
	pagination: {
		el: '.card__slider-pagination__mob',
		bulletClass: 'card__slider-pagination__mob__bullet',
		bulletActiveClass: 'card__slider-pagination__mob__bullet-active',
		renderBullet: (index, className) => {
			return `<div class="${className}"></div>`;
		},
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		680: {
			slidesPerView: 2,
		}
	}
});

new Swiper('.card__slider', {
	slidesPerView: 3,
	spaceBetween: 15,
	loop: true,
})

new Swiper('.cards__slider', {
	slidesPerView: 1,
	spaceBetween: 37,
})

new Swiper('.carousel__slider', {
	slidesPerView: 6,
	loop: true,
	autoplay: {
		delay: 3000,
		pauseOnMouseEnter: true,
		disableOnInteraction: false
	},
	on: {
		touchStart: function () {
			this.autoplay.stop();
		},
		slideChangeTransitionEnd: function () {
			if (!this.autoplay.running) {
				setTimeout(() => {
					this.autoplay.start();
				}, 5000);
			}
		}
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		540: {
			slidesPerView: 3,
		},
		720: {
			slidesPerView: 4,
		},
		1024: {
			slidesPerView: 6,
		},
	}
});


new Swiper('.hero__slider', {
	slidesPerView: 1,
	loop: true,
	navigation: {
		nextEl: '.hero__slider-button-next',
		prevEl: '.hero__slider-button-prev',
	},
	pagination: {
		el: '.hero__slider-pagination',
		bulletClass: 'hero__slider-pagination__bullet',
		bulletActiveClass: 'hero__slider-pagination__bullet-active',
		renderBullet: (index, className) => {
			return `<div class="${className}"></div>`;
		},
	},
});

const productSliderMini = new Swiper('.product__slider__mini', {
	loop: true,
	spaceBetween: 16,
	slidesPerView: 3,
	freeMode: true,
	watchSlidesProgress: true,
});

const productSlider = new Swiper('.product__slider', {
	loop: true,
	spaceBetween: 16,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	thumbs: {
		swiper: productSliderMini,
	},
});


new Swiper(".cards__slider", {
	navigation: {
		nextEl: '.catalog__cards__slider-button-next',
		prevEl: '.catalog__cards__slider-button-prev',
	},
	pagination: {
		el: '.catalog__cards__slider-pagination',
		bulletClass: 'catalog__cards__slider-pagination__bullet',
		bulletActiveClass: 'catalog__cards__slider-pagination__bullet-active',
		renderBullet: (index, className) => {
			return `<div class="${className}"></div>`;
		},
	},
});





// const btnSubmit = document.querySelectorAll('input[type="submit"]')
// Array.from(btnSubmit).map((item) => {
// 	item.addEventListener('click', (e) => {
// 		e.preventDefault();
// 		close('.close')
// 	})
// })



function popup(style, btn, popups) {

	let trigger = document.querySelectorAll(btn);
	let pop = document.querySelector(popups)

	// let remove = pop.querySelectorAll('.remove_popup')



	trigger.forEach(item => {
		item.addEventListener('click', () => {
			pop.classList.add('active')
			win.style.overflow = "hidden";
			win.style.paddingRight = style;
		})
	});

	// remove.forEach(item => {
	// 	item.addEventListener('click', () => {
	// 		pop.classList.remove('active')
	// 		win.style.overflow = "";
	// 		win.style.paddingRight = "";
	// 	})
	// });




}
$(document).ready(function () {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})

// https://twitter.com/uixmat

function scrollNav() {
	$('.smooth_scroll').click(function () {
		$(".active").removeClass("active");
		$(this).addClass("active");

		$('html, body').stop().animate({
			scrollTop: $($(this).attr('href')).offset().top - 160
		}, 600);
		return false;
	});
}

$(window).on("scroll", function () {
	var scrolled = $(this).scrollTop();
	if (scrolled > 50) {
		$('.header').addClass('fixed');
	}
	if (scrolled <= 50) {
		$('.header').removeClass('fixed');
	}
});




function burgerMobile() {
	const burger = document.querySelector('.header_nav')
	const burgerTrigger = document.querySelector('.header_burger')
	const header = document.querySelector('.header')
	const burgerRemove = document.querySelectorAll('header_nav_list li')

	burgerRemove.forEach(item => {
		item.addEventListener('click', function () {
			burgerTrigger.classList.remove('active')
			burger.classList.remove('active')
			header.classList.remove('active')
		})
	});

	burgerTrigger.addEventListener('click', () => {
		burgerTrigger.classList.toggle('active')
		burger.classList.toggle('active')
		header.classList.toggle('active')
	})

}


function formValidate(selector) {
	const form = document.querySelector(selector)

	if (!form) {
		console.error(`Форма с селектором "${selector}" не найдена`);
		return;
	}

	const nameInput = form.querySelector('#name');
	// const inputSurname = form.querySelector('#surname');
	const phoneInput = form.querySelector('#tel');
	const checkbox = document.querySelector('#agreement');
	const button = form.querySelector('.form__button')

	button.addEventListener('click', () => {
		let isValid = true;


		if (!nameInput.value.trim()) {
			showError(nameInput, 'Введите имя');
			isValid = false;
		} else {
			nameInput.classList.remove('invalid')
		}


		if (!phoneInput.value.trim() || !phoneInput.value.match(/(\d+)/g) || phoneInput.value.match(/(\d+)/g).join('').length !== 11) {
			showError(phoneInput, 'Введите корректный телефон');
			isValid = false;
		} else {
			phoneInput.classList.remove('invalid');
		}

		if (!checkbox.checked) {
			showError(checkbox, 'Необходимо ваше согласие');
			isValid = false;
		} else {
			document.querySelector('.form__group__checkbox__icon').style.outline = 'none'
		}

		if (isValid) {
			const obj = {
				name: nameInput.value,
				phone: phoneInput.value,
				checkbox: checkbox.checked,
			}

			alert(`name: ${nameInput.value}, phone: ${phoneInput.value}, checkbox: ${checkbox.value}`)

			nameInput.value = ''
			phoneInput.value = ''
			checkbox.value = ''
			checkbox.checked = false
		}
	})





	function showError(input, message = '') {
		input.classList.add('invalid');

		if (checkbox) {
			document.querySelector('.form__group__checkbox__icon').style.outline = '3px solid #d33c3c'
		}
	}



	document.querySelector('.form__group__checkbox__icon').addEventListener('click', (e) => {
		document.querySelector('.form__group__checkbox__icon').style.outline = 'none'
	});
}

formValidate('.form__group')

function initCatalogAccordion(accordionClass) {
	document.addEventListener('DOMContentLoaded', function () {
		const headers = document.querySelectorAll(`.${accordionClass} .catalog-header`);

		headers.forEach(header => {
			header.addEventListener('click', function (e) {
				e.stopPropagation();

				const item = this.closest('.catalog__item'); // ближайший родительский элем
				const content = item.querySelector('.catalog-content');
				const arrow = this.querySelector('img');

				if (content) {
					item.classList.toggle('active');
				}

				if (item.classList.contains('active')) {
					if (arrow) arrow.style.transform = 'rotate(180deg)';
					if (content) content.style.height = 'auto';
				} else {
					if (arrow) arrow.style.transform = 'rotate(0deg)';
					if (content) content.style.height = null;
				}

				const nestedItems = item.querySelectorAll('.catalog__item');
				nestedItems.forEach(nestedItem => {
					nestedItem.classList.remove('active');

					const nestedArrow = nestedItem.querySelector('.catalog-header img');
					if (nestedArrow) {
						nestedArrow.style.transform = 'rotate(0deg)';
					}

					const nestedContent = nestedItem.querySelector('.catalog-content');
					if (nestedContent) {
						nestedContent.style.height = null;
					}

				});
			})
		});
	});
}

initCatalogAccordion('catalog');

function openModal(buttonSelector, modalSelector) {
	const button = document.querySelector(buttonSelector);
	const modal = document.querySelector(modalSelector);
	const containerModal = modal.querySelector('.section_in');
	const modalInput =  modal.querySelector('input')

	if (!button || !modal) return;


	const openModalHandler = () => {
		modal.style.display = 'block';
		document.body.style.overflow = 'hidden'
		document.addEventListener('keydown', escapeHandler);
		document.addEventListener('click', outsideClickHandler);
	};


	const closeModalHandler = () => {
		modal.style.display = 'none';
		document.body.style.overflow = 'auto'
		document.removeEventListener('keydown', escapeHandler);
		document.removeEventListener('click', outsideClickHandler);
	};

	const outsideClickHandler = (e) => {
		if (!containerModal.contains(e.target)) {
			modalInput.value = ''
			closeModalHandler();
		}
	};

	const escapeHandler = (e) => {
		if (e.key === 'Escape') {
			modalInput.value = ''
			closeModalHandler();
		} else if (e.key === 'Enter') {
			alert('Получаем результат поиска');
		}
	};


	button.addEventListener('click', (e) => {
		e.stopPropagation();
		openModalHandler();
	});

	// Закрываем модальное окно при клике на кнопку закрытия, если она есть
	const closeButtons = modal.querySelectorAll('[data-close-modal]');
	closeButtons.forEach(btn => {
		btn.addEventListener('click', closeModalHandler);
	});
}



openModal('.main-menu__search', '.main-menu__search__modal');