
let first = document.getElementsByClassName("first");
let second = document.getElementsByClassName("second");
let work = document.getElementById("work");
let about = document.getElementById("about");
let description = document.getElementsByClassName("description");
console.log(description);

let firstTitle = first[0].firstChild.nextSibling;

console.log(work.firstElementChild);

function showSecond() {
    work.classList.add("hide");
    work.firstElementChild.classList.add("remove");
    for (i = 0; i < second.length; i++){
        second[i].classList.add("show");
    }
}

function showAbout() {
    about.firstElementChild.classList.add("remove");
    description[0].classList.add("show");
}


