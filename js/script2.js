let div = document.querySelector("div")
let divs = document.getElementsByClassName("panel")
for (let p = 0; p < divs.length; p++) {
    divs[p].addEventListener("click", change);
}
function change() {
    if (div !== null) {
        if (this.classList.contains("active")) {
            this.classList.remove("active");
            div = null;
        } else {
            div.classList.remove("active");
            this.classList.add("active");
            div = this;
        }
    } else {
        this.classList.add("active");
        div = this; 
    }
}