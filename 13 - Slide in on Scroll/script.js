//Get elements
const images = document.querySelectorAll('.slide-in');

//declare functions
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function checkSlide(e) {

    images.forEach(sliderImage => {
        const slideAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;

        const isHalfShow = slideAt > sliderImage.offsetTop;
        const isNotScrolled = window.scrollY < imageBottom;

        if (isHalfShow && isNotScrolled) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}

//Add ListenerEvents
window.addEventListener('scroll', debounce(checkSlide));