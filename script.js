const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg"
];

let currentPhoto = 0;
let slideInterval;

/* Start Website */
function startWebsite(){

    document.getElementById("loading-screen").classList.add("hidden");

    document.getElementById("gift-screen").classList.remove("hidden");

}

/* Open Gift */
function openGift(){

    document.querySelector(".gift-box").innerHTML = "💖";

    setTimeout(() => {

        document.getElementById("gift-screen").classList.add("hidden");

        document.getElementById("slideshow-screen").classList.remove("hidden");

        startSlideshow();

    },1500);

}

/* Slideshow */
function startSlideshow(){

    const slide = document.getElementById("slide");

    slide.src = photos[0];

    slideInterval = setInterval(() => {

        currentPhoto++;

        if(currentPhoto >= photos.length){

            clearInterval(slideInterval);

            document.getElementById("slideshow-screen").classList.add("hidden");

            document.getElementById("letter-screen").classList.remove("hidden");

            return;
        }

        slide.src = photos[currentPhoto];

    },3000);

}

/* Show Cake */
function showCake(){

    document.getElementById("letter-screen").classList.add("hidden");

    document.getElementById("cake-screen").classList.remove("hidden");

}

/* Blow Candle */
function blowCandle(){

    document.getElementById("flame").innerHTML = "💨";

    setTimeout(() => {

        document.getElementById("cake-screen").classList.add("hidden");

        document.getElementById("cut-screen").classList.remove("hidden");

    },1500);

}

/* Cut Cake */
function cutCake(){

    const cake = document.getElementById("big-cake");

    const knife = document.getElementById("knife");

    knife.innerHTML = "🔪✨";

    cake.innerHTML = "🍰 🍰";

    setTimeout(() => {

        document.getElementById("cut-screen").classList.add("hidden");

        document.getElementById("final-screen").classList.remove("hidden");

        createHearts();

    },2000);

}

/* Hearts Animation */
function createHearts(){

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.bottom = "-20px";
        heart.style.fontSize = "30px";
        heart.style.zIndex = "999";

        document.body.appendChild(heart);

        let pos = -20;

        const move = setInterval(() => {

            pos += 5;

            heart.style.bottom = pos + "px";

            if(pos > window.innerHeight){

                clearInterval(move);

                heart.remove();

            }

        },30);

    },500);

}
