let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

$(document).ready(function () {
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'ease-in-out',
    });
});

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.header .navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    });
});

let productPreviewContainer = document.querySelector('.products-preview-container');
let prodcutPreview = productPreviewContainer.querySelectorAll('.product-preview');

document.querySelectorAll('.products .slide img').forEach(img => {
    img.onclick = () => {
        const name = img.getAttribute('data-product');
        if (!name) return;
        productPreviewContainer.classList.add('active');
        prodcutPreview.forEach(preview => {
            if (preview.getAttribute('data-target') === name) {
                preview.classList.add('active');
            }
        });
    };
});

document.querySelectorAll('.products-preview-container .product-preview .fa-times').forEach(close => {
    close.onclick = () => {
        productPreviewContainer.classList.remove('active');
        prodcutPreview.forEach(p => p.classList.remove('active'));
    };
});

productPreviewContainer.addEventListener('click', e => {
    if (e.target === productPreviewContainer) {
        productPreviewContainer.classList.remove('active');
        prodcutPreview.forEach(p => p.classList.remove('active'));
    }
});

var swiper = new Swiper(".products-slider", {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides: true,
    speed: 500,
    breakpoints: {
        0:   { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
    },
});

var swiperReviews = new Swiper(".reviews-slider", {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides: true,
    speed: 500,
    breakpoints: {
        0:   { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        991: { slidesPerView: 3 },
    },
});

document.addEventListener("DOMContentLoaded", function () {
    const colors = ["azul", "blanco", "gris", "marron", "negroblanco", "negronegro", "rojo"];
    colors.forEach(color => {
        const thumbButtons = document.querySelectorAll(`.thumb-button[data-color="${color}"]`);
        const mainImage = document.getElementById(`mainImage-${color}`);
        thumbButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                mainImage.src = btn.getAttribute('data-target');
            });
        });
    });
});
