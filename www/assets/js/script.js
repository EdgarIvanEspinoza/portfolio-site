'use strict';
function goHome() {
	document.getElementById('home-page').style.display = 'flex';
	document.getElementById('about-page').style.display = 'none';
	document.getElementById('contact-page').style.display = 'none';
	document.getElementById('portfolio-page').style.display = 'none';
	document.getElementsByClassName('page-id')[0].textContent = '01';
	document.getElementsByClassName('page-id')[1].textContent = '01';
	document.getElementsByClassName('vl4')[0].style.height = '8vh';
}
function goAbout() {
	document.getElementById('home-page').style.display = 'none';
	document.getElementById('about-page').style.display = 'flex';
	document.getElementById('contact-page').style.display = 'none';
	document.getElementById('portfolio-page').style.display = 'none';
	document.getElementsByClassName('page-id')[0].textContent = '02';
	document.getElementsByClassName('page-id')[1].textContent = '02';
	document.getElementsByClassName('vl4')[0].style.height = '16vh';
}
function goContact() {
	document.getElementById('home-page').style.display = 'none';
	document.getElementById('about-page').style.display = 'none';
	document.getElementById('contact-page').style.display = 'flex';
	document.getElementById('portfolio-page').style.display = 'none';
	document.getElementsByClassName('page-id')[0].textContent = '03';
	document.getElementsByClassName('page-id')[1].textContent = '03';
	document.getElementsByClassName('vl4')[0].style.height = '24vh';
}
function goPortfolio() {
	document.getElementById('home-page').style.display = 'none';
	document.getElementById('about-page').style.display = 'none';
	document.getElementById('contact-page').style.display = 'none';
	document.getElementById('portfolio-page').style.display = 'flex';
	document.getElementsByClassName('page-id')[0].textContent = '04';
	document.getElementsByClassName('page-id')[1].textContent = '04';
	document.getElementsByClassName('vl4')[0].style.height = '32vh';
}

function goContent1() {
	document.getElementById('content-about-1').style.display = 'flex';
	document.getElementById('content-about-2').style.display = 'none';
	document.getElementById('content-about-3').style.display = 'none';
}
function goContent2() {
	document.getElementById('content-about-1').style.display = 'none';
	document.getElementById('content-about-2').style.display = 'flex';
	document.getElementById('content-about-3').style.display = 'none';
}
function goContent3() {
	document.getElementById('content-about-1').style.display = 'none';
	document.getElementById('content-about-2').style.display = 'none';
	document.getElementById('content-about-3').style.display = 'flex';
}
function menu() {
	let menu = document.getElementsByClassName('menu')[0];
	if (menu.style.top < '0') {
		menu.style.top = '10%';
	} else {
		menu.style.top = '-150px';
	}
}
