const cardSlider = document.getElementById("card-slider");

function slideLeft() {
    cardSlider.scrollBy({
        left: -300,  
        behavior: "smooth"
    });
}

function slideRight() {
    cardSlider.scrollBy({
        left: 300,  
        behavior: "smooth"
    });
}
