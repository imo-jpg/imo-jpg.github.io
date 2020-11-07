let links = document.getElementsByClassName("link");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", showPreview);
    // links[i].addEventListener("touchstart", showPreview);
}

function showPreview(event) {
    let element = event.target;
    let preview = event.target.nextSibling.nextSibling;

    if (element.classList.contains("open") == false) {
        preview.classList.add("show");
        event.target.classList.add("open");

    } else {
        preview.classList.remove("show");
        event.target.classList.remove("open");
    }
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides(n) {
//   var i;
    let slides = document.getElementsByClassName("slides");
    // let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    };
    if (n < 1) {
        slideIndex = slides.length;
    };
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        // dots[i].className = dots[i].className.replace(" active", "");
    };
    // for (let i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // };
    slides[slideIndex-1].style.display = "block";
    // dots[slideIndex-1].className += " active";
}

