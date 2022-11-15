var arrows = document.querySelectorAll(".arrow");
var p = document.querySelectorAll(".q");
var description = document.querySelectorAll(".description");

i = 0;
while (i <= 4){
    arrows[i].addEventListener("click", function(){
        if (this.classList.length == 1){
            this.classList.add("clicked-arrow")
            p[this.id].classList.add("clicked")
            description[this.id].classList.remove("hidden")
        } else {
            this.classList.remove("clicked-arrow")
            p[this.id].classList.remove("clicked")
            description[this.id].classList.add("hidden")
        }
    })
    i++
}
j = 0
while (j <= 4){
    p[j].addEventListener("click", function(){
        if (this.classList.length == 1){
            arrows[this.id].classList.add("clicked-arrow")
            this.classList.add("clicked")
            description[this.id].classList.remove("hidden")
        } else {
            arrows[this.id].classList.remove("clicked-arrow")
            this.classList.remove("clicked")
            description[this.id].classList.add("hidden")
        }
    })
    j++
}