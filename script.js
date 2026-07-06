const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg"
];
let current = 0;

function openGift(){

    document.querySelector(".gift-box").innerHTML="💖";

    document.getElementById("message").innerHTML =
    "Happy Birthday Tani Shannon ❤️";

    document.getElementById("slideshow").style.display = "block";

    setInterval(() => {

        current++;

        if(current >= photos.length){
            current = 0;
        }

        document.getElementById("slide").src =
        photos[current];

    },3000);

}
