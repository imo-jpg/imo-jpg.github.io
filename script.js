if (window.innerWidth < 800) {
    let readmores = document.getElementsByClassName("readmore");

    for (let i = 0; i < readmores.length; i++) {
        readmores[i].addEventListener("click", showPreview);
        readmores[i].classList.remove("less");
        readmores[i].nextSibling.nextSibling.classList.add("less");
    }

    console.log("small");
    function showPreview(event) {
        let element = event.target;
        let preview = event.target.nextSibling.nextSibling;

        preview.classList.add("less");

        if (element.classList.contains("show") == false) {
            preview.classList.remove("less");
            preview.classList.add("more");
            element.classList.add("show");
            element.textContent = "Hide Description";

        } else {
            preview.classList.remove("more");
            preview.classList.add("less");
            element.classList.remove("show");
            element.textContent = "See Description";

        }
    }
};
