let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

$(document).ready(function () {
    $('.carousel').slick({
        autoplay: true, // Auto-play slides
        autoplaySpeed: 3000, // Auto-play speed in milliseconds
        dots: true, // Display navigation dots
        arrows: true, // Display navigation arrows
        infinite: true, // Loop through slides
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1 // Number of slides to scroll at a time
    });
});

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
    document.body.classList.toggle('active');
};

window.onscroll = () => {
    if (window.innerWidth < 1200) {
        menu.classList.remove('fa-times');
        header.classList.remove('active');
        document.body.classList.remove('active');
    };
};

let productPreviewContainer = document.querySelector('.products-preview-container');
let prodcutPreview = productPreviewContainer.querySelectorAll('.product-preview');

document.querySelectorAll('.products .slide .btn').forEach(detailBtn => {
    detailBtn.onclick = () => {
        productPreviewContainer.style.display = 'block';
        let name = detailBtn.getAttribute('data-product');
        prodcutPreview.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.style.display = 'flex';
            };
        });
    };
});

document.querySelectorAll('.products-preview-container .product-preview .fa-times').forEach(close => {
    close.onclick = () => {
        productPreviewContainer.style.display = 'none';
        prodcutPreview.forEach(closePreview => {
            closePreview.style.display = 'none';
        });
    };
});

var swiper = new Swiper(".products-slider", {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".reviews-slider", {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

document.addEventListener("DOMContentLoaded", function () {
    const colors = ["azul", "blanco", "gris", "marron", "negroblanco", "negronegro", "rojo"];

    colors.forEach(color => {
        const thumbButtons = document.querySelectorAll('.thumb-button[data-color="' + color + '"]');
        const mainImage = document.getElementById('mainImage-' + color);
        thumbButtons.forEach(thumbButton => {
            thumbButton.addEventListener('click', function () {
                const target = thumbButton.getAttribute('data-target');
                mainImage.src = target;
            });
        });

    });
});