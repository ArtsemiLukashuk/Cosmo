// wow start
new WOW().init();
// wow end

// hamburger-nav start
$(document).ready(function () {
	$('.header__burger').click(function () {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.header__menu').click(function () {
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock');
	});
});
// hamburger-end start

// smooth scrolling start
$(window).on("load", function () {
	$(".header__item a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
		highlightSelector: ".header__item a"
	});
});
// smooth scrolling end

// upbtn start
$('body');
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$('.up-button').css({
			transform: 'scale(1)'
		});
	} else {
		$('.up-button').css({
			transform: 'scale(0)'
		});
	}
});
$('.up-button').on('click', function () {
	$('html, body').animate({
		scrollTop: 0
	}, 600);
	return false;
});

var upButtonSize = document.querySelector(".up-button__size");

window.addEventListener("scroll", function () {
	var documentHeight = document.body.clientHeight;
	var scrollHeight = window.scrollY;
	var windowHeight = window.innerHeight;

	var scrollPercent = (scrollHeight / (documentHeight - windowHeight)) * 100

	upButtonSize.style.height = scrollPercent + "%";
});
// upbtn end



var readMore = document.getElementsByClassName("read-first-left")[0];
readMore.addEventListener('click', function (event) {
	var paragraph = document.querySelector('.read-first-left p');
	console.log(paragraph.style.display)
	if (paragraph.style.display === "") {
		paragraph.style.display = "block";
	} else {
		paragraph.style.display = "";
	}
})
var readMore = document.getElementsByClassName("read-midl-left")[0];
readMore.addEventListener('click', function (event) {
	var paragraph = document.querySelector(' .read-midl-left p');
	console.log(paragraph.style.display)
	if (paragraph.style.display === "") {
		paragraph.style.display = "block";
	} else {
		paragraph.style.display = "";
	}
})
var readMore = document.getElementsByClassName("read-last-left")[0];
readMore.addEventListener('click', function (event) {
	var paragraph = document.querySelector(' .read-last-left p');
	console.log(paragraph.style.display)
	if (paragraph.style.display === "") {
		paragraph.style.display = "block";
	} else {
		paragraph.style.display = "";
	}
})


var readMore = document.getElementsByClassName("read-first-right")[0];
readMore.addEventListener('click', function (event) {
	var paragraph = document.querySelector('.read-first-right p');
	console.log(paragraph.style.display)
	if (paragraph.style.display === "") {
		paragraph.style.display = "block";
	} else {
		paragraph.style.display = "";
	}
})
var readMore = document.getElementsByClassName("read-midl-right")[0];
readMore.addEventListener('click', function (event) {
	var paragraph = document.querySelector(' .read-midl-right p');
	console.log(paragraph.style.display)
	if (paragraph.style.display === "") {
		paragraph.style.display = "block";
	} else {
		paragraph.style.display = "";
	}
})
var readMore = document.getElementsByClassName("read-last-right")[0];
readMore.addEventListener('click', function (event) {
	var paragraph = document.querySelector(' .read-last-right p');
	console.log(paragraph.style.display)
	if (paragraph.style.display === "") {
		paragraph.style.display = "block";
	} else {
		paragraph.style.display = "";
	}
})