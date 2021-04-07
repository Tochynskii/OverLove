// VALIDATION MOBILE //
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
	},
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};
if (isMobile.any()) {
	document.body.classList.add('_mobile');

	let footerNav = document.querySelectorAll('.footer__list > li');
	footerNav.forEach(item => {
		item.addEventListener("click", () => {
			if (item.classList.contains('_active')) {
				item.classList.remove('_active');
			} else {
				footerNav.forEach(item => {
					item.classList.remove('_active');
				});
				item.classList.add('_active');
			}
		})
	});
} else {
	document.body.classList.add('_PC');
}
// VALIDATION MOBILE //

// MENU BURGER //
document.querySelector(".menu-icon").addEventListener("click", function () {
	document.querySelector(".menu-icon").classList.toggle("active");
	document.querySelector(".header").classList.toggle("header__bg");
	document.querySelector(".menu__body").classList.toggle("active");
	document.getElementById('overflow').classList.toggle("overflow");
});
// MENU BURGER //

// SWIPER SLIDER //
new Swiper('.slider', {
	autoplay: {
		delay: 3000,
		stopOnLastSlide: false,
		disableOnInteraction: false
	},
	speed: 800,
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true
	},

	keyboard: {
		enabled: true,
		onlyInViewPort: true,
		pageUpDown: true
	},
	slidesPerView: 'auto',
	spaceBetween: 40,


	breakpoints: {
		767: {
			freeMode: true,
			spaceBetween: 40,
		},
		500: {
			spaceBetween: 20,
		},
		320: {
			freeMode: false,
			slidesPerView: 1,
			spaceBetween: 15,
		}
	}
});

new Swiper('.carusel-slider', {
	speed: 500,
	keyboard: {
		enabled: true,
		onlyInViewPort: true,
		pageUpDown: true
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});
// SWIPER SLIDER //

// Блимання кнопок // 
