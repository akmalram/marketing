const load = (callback) => {
    window.addEventListener('load', (e) => {
        callback(e);
    })
}

load(() => {
    const MenuClassToggler = () => {
        const btn = document.querySelector('.navbar-toggler .btn');
        const menu = document.querySelector('.navbar-menu');

        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            menu.classList.toggle('active');
        });
    }

    MenuClassToggler();
});

load(() => {
    let mySwiper = new Swiper('.swiper-container.aboutus-slider', {
        speed: 400,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 3000,
        },
        loop: true
    });
    let clientsSlider = new Swiper('.swiper-container.clients-slider', {
        speed: 400,
        slidesPerView: 4,
        spaceBetween: 30,
        cssMode: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2e3,
            disableOnInteraction: false,
        },
        breakpoints: {
            1020: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            520: {
                slidesPerView: 1,
            },
        }
    });
    let sertificatesSlider = new Swiper('.swiper-container.sertificate-slider', {
        speed: 400,
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2e3,
            disableOnInteraction: false,
        },
        breakpoints: {
            520: {
                slidesPerView: 2,
            },
        }
    });

    let fullslider = new Swiper('.swiper-container.full-slider', {
        speed: 400,
        loop: true,
        spaceBetween: 50,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
});

load(() => {
    const element = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {


        if(window.pageYOffset > 0) {
            element.classList.add('scrolled');
        }else if (window.pageYOffset < 200) {
            element.classList.remove('scrolled');
        }
    });

    if(window.pageYOffset > 0) {
        element.classList.add('scrolled');
    }else if (window.pageYOffset < 200) {
        element.classList.remove('scrolled');
    }
});

load(() => {
    const ShowMoreClassToggler = () => {
        const btn = document.querySelector('.whatis .showmorebtn');
        const menu = document.querySelector('.whatis');

        if(btn && menu) {
            btn.addEventListener('click', () => {
                btn.classList.toggle('hidden');
                menu.classList.toggle('hide');
            });
        }
    }

    ShowMoreClassToggler();
})


// Font Observing

const fontAwesomeFreeObserver = new FontFaceObserver('Font Awesome 5 Free');
const fontAwesomeBrandsObserver = new FontFaceObserver('Font Awesome 5 Brands');
const gilroyObserver = new FontFaceObserver('Gilroy');

Promise.all([
    fontAwesomeFreeObserver.load(),
    fontAwesomeBrandsObserver.load(),
    gilroyObserver.load()
]).then(() => {
    document.querySelector('html').classList.add('fonts-loaded');
});
