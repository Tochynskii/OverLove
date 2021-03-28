window.addEventListener('scroll', function () {
	let value = window.scrollY;
	let page = document.querySelector(".page")
	let sky = document.getElementById("sky")
	let rock = document.getElementById("rock")
	let hill = document.getElementById("hill")
	page.style.opacity = 1;
	if (value > 0) {
		page.style.opacity = 1 - (value / 670);
	}
	page.style.transform = `translate3d(0px, ${-value / 12}%, 0px)`
	sky.style.transform = `translate3d(0px, ${-value / 12}%, 0px)`
	rock.style.transform = `translate3d(0px, ${-value / 23}%, 0px)`
	hill.style.transform = `translate3d(0px, ${-value / 70}%, 0px)`
})
