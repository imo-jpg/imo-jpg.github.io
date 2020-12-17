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

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    
    if (n > slides.length) {
        slideIndex = 1;
    };

    if (n < 1) {
        slideIndex = slides.length;
    };

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    
    slides[slideIndex-1].style.display = "block";
}

