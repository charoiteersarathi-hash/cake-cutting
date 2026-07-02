const photos = [
    "photos/photo1.jpg",
    "photos/photo2.jpg",
    "photos/photo3.jpg",
    "photos/photo4.jpg",
    "photos/photo5.jpg"
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
