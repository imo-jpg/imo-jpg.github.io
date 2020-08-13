let links = document.getElementsByClassName("link");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function showPreview(event) {
        let element = event.target;
        let preview = event.target.nextSibling.nextSibling;

        if (element.classList.contains("open") == false) {
            preview.classList.add("show");
            event.target.classList.add("open");

        } else {
            preview.classList.remove("show");
            event.target.classList.remove("open");
        }

    });
}

