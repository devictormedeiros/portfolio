const $arrow = document.querySelector('.arrow i');
$arrow.animate([
    { top: '0' },
    { top: '4px' },
    { top: '0' }
], {
    duration: 1200,
    iterations: Infinity
});

// FUNÇÃO MAQUINA DE ESCREVER
function maquinaEscrever(texto) {
    let textoArr = texto.innerHTML.split('');
    texto.innerHTML = '';
    textoArr.forEach((letra, i) => {
        setTimeout(function () {
            texto.innerHTML += letra
        }, 100 * i);

    });
}
const textoAnimado = document.querySelector('.textoAnimado');
const btnConheca = document.querySelector('.btnConheca');
maquinaEscrever(textoAnimado);


// SLIDER 
$('.slider-projetos').slick({
    slidesToShow: 3,
    prevArrow: $('.slick-arrow.slick-prev'),
    nextArrow: $('.slick-arrow.slick-next'),
    autoplay: false,
    slidesToScroll: 1,

    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3,

            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});

// SLIDER QUANDO FOR NO MOBILE
if (window.matchMedia("(max-width: 768px)").matches) {
    $('.slider-diferenciais').slick({
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1,
        centerMode: false,
        arrows: false
    });
}

// FUNÇÃO PARA FAZER ANCORAGEM COM EFEITO E DESCONTAR A ALTURA DO MENU FIXO 
jQuery('a[href^="#"]').click(function (e) {
    e.preventDefault();
    let id = jQuery(this).attr('href');
    let targetOffset = jQuery(id).offset().top;
    jQuery('html, body').animate({
        scrollTop: targetOffset - 90
    }, 1000);
});

$('.contato-fixed button, .contactFloat__btn').on("click", function (e) {
    e.preventDefault();
    // $(this).find('span').toggle();
    $(this).toggleClass('active');

    $('.contato-fixed .content, .contactFloat__menu, .contactFloat').toggleClass('is-open');
});

// ACESSIBILIDADE
function accessApplyFont(size) {
    localStorage.setItem('access_font_size', size)
    var size_px = 100 + Number(size) + '% !important';
    $('html,body').attr('style', 'font-size:' + size_px);
}

var access_font_size = 0;

if (localStorage.getItem('access_font_size')) {
    access_font_size = Number(localStorage.getItem('access_font_size'));
    accessApplyFont(access_font_size);
}

$('.large-font').on('click', function (e) {
    e.preventDefault();
    if (access_font_size < 10) {
        access_font_size += 1;
        accessApplyFont(access_font_size);
    }
});

$('.small-font').on('click', function (e) {
    e.preventDefault();
    if (access_font_size > 0) {
        access_font_size -= 1;
        accessApplyFont(access_font_size);
    }
});

// CONTRASTE 
$('.contraste a').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('theme-ligth');
})

// MENU MOBILE 
$('.navbar-toggler').on('click', function (e) {
    e.preventDefault();
    this.classList.toggle('opened');
    this.setAttribute('aria-expanded', this.classList.contains('opened'));
    $('#navbar_content').toggle();
});

// FUNCÃO PARA O MENU ADD A CLASSE QUANDO O SCROLL FOR MAIOR QUE UM VALOR
$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop()) {
            $("header").addClass("fixed-top");
        } else {
            $("header").removeClass("fixed-top");
        }
    });
});