const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg"
];

let current = 0;
let started = false;

function openGift(){

    if(started) return;
    started = true;

    document.querySelector(".gift-box").innerHTML = "💖";
    document.getElementById("message").innerHTML =
    "Happy Birthday Tani Shannon ❤️";

    document.getElementById("slideshow").style.display = "block";

    setInterval(() => {

        current = (current + 1) % photos.length;

        document.getElementById("slide").src = photos[current];

    }, 3000);
}
