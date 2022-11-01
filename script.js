const block3Container = document.querySelector(".holiday22-block3-container");
const block3 = document.querySelector(".holiday22-block3");
const block4Container = document.querySelector(".holiday22-block4-container");
const block4 = document.querySelector(".holiday22-block4");
const block5Container = document.querySelector(".holiday22-block5-container");
const block5 = document.querySelector(".holiday22-block5");

// block3
if (block3Container.offsetWidth < 1440 & block3Container.offsetWidth > 768) {
    let transform = block3Container.offsetWidth / block3.offsetWidth;
    let height = transform * 767

    block3Container.style.cssText = `
        transform:scale(${transform});
        transform-origin: top left;
        height: ${height}px; 
    `
} else {
    block3Container.style.cssText = ` 
    `
}

// block4
if (block4Container.offsetWidth < 1440 & block4Container.offsetWidth > 768) {
    let transform = block4Container.offsetWidth / block4.offsetWidth;
    let height = transform * 1238

    block4Container.style.cssText = `
        transform:scale(${transform});
        transform-origin: top left;
        height: ${height}px; 
    `
} else {
    block4Container.style.cssText = ` 
    `
}

// block5
if (block5Container.offsetWidth < 1440 & block5Container.offsetWidth > 768) {
    let transform = block5Container.offsetWidth / block5.offsetWidth;
    let height = transform * 733
    let margin = 733 - height

    block5Container.style.cssText = `
    transform:scale(${transform});
    transform-origin: top left;
    margin-bottom: -${margin}px;
`
} else {
    block5Container.style.cssText = ` 
`
}


window.addEventListener('resize', () => {
    // block3
    if (block3Container.offsetWidth < 1440 & block3Container.offsetWidth > 768) {
        let transform = block3Container.offsetWidth / block3.offsetWidth;
        let height = transform * 767

        block3Container.style.cssText = `
        transform:scale(${transform});
        transform-origin: top left;
        height: ${height}px; 
    `
    } else {
        block3Container.style.cssText = ` 
    `
    }

    // block4
    if (block4Container.offsetWidth < 1440 & block4Container.offsetWidth > 768) {
        let transform = block4Container.offsetWidth / block4.offsetWidth;
        let height = transform * 1238

        block4Container.style.cssText = `
        transform:scale(${transform});
        transform-origin: top left;
        height: ${height}px; 
    `
    } else {
        block4Container.style.cssText = ` 
    `
    }

    // block5
    if (block5Container.offsetWidth < 1440 & block5Container.offsetWidth > 768) {
        let transform = block5Container.offsetWidth / block5.offsetWidth;
        let height = transform * 733
        let margin = 733 - height

        block5Container.style.cssText = `
        transform:scale(${transform});
        transform-origin: top left;
        margin-bottom: -${margin}px;
    `
    } else {
        block5Container.style.cssText = ` 
    `
    }


})


// require(['jquery', 'jquery/ui'], function ($) {

// });


$.getScript("https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js", function (data, textStatus, jqxhr) {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1,
                center: true,
            },
            650: {
                items: 2,
                center: true,
            },
            769: {
                items: 4
            }
        }
    })

    const prevArrow = document.querySelectorAll(".owl-prev");
    const nextArrow = document.querySelectorAll(".owl-next");

    for (let x = 0; x < 3; x++) {
        prevArrow[x].innerHTML = `
            <svg width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.1896 17.9735L35.1896 14.5335L7.42963 14.5335L20.2296 3.01348L18.0696 0.213475L0.629628 16.2135L0.629628 16.2935L18.0696 32.2935L20.2296 29.4935L7.42963 17.9735L35.1896 17.9735Z" fill="white"/>
            </svg>
        
        `

        nextArrow[x].innerHTML = `
            <svg width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.81074 14.8402L0.81074 18.2802L28.5707 18.2802L15.7707 29.8002L17.9307 32.6002L35.3707 16.6002V16.5202L17.9307 0.520242L15.7707 3.32024L28.5707 14.8402L0.81074 14.8402Z" fill="white"/>
            </svg>
        
        `
    }
});