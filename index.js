const pictures = [
    //MONA LISA
    {
        "img-org": "./img_orginal/Mona_Lisa.webp", //url to org-img
        "img-remix": "./img_remix/Mona_Lisa_v2.jpeg",
    },
    //BIRTH OF VENUS
    {
        "img-org": "./img_orginal/The_Birth_of_Venus_Botticelli.jpeg", //url to org-img
        "img-remix": "./img_remix/birth-of-venus_v2.jpeg",
    },
    //GIRL WITH PEARL EARRING
    {
        "img-org": "./img_orginal/Girl_with_a_Pearl_Earring.jpeg", //url to org-img
        "img-remix": "./img_remix/girl-with-pearl-earring_v2.jpg",
    },
    //NEFERTITI
    {
        "img-org": "./img_orginal/Nefertiti_bust.jpeg", //url to org-img
        "img-remix": "./img_remix/nefertiti_v2.png",
    },
    //SON OF MAN
    {
        "img-org": "./img_orginal/TheSonOfMan.jpeg", //url to org-img
        "img-remix": "./img_remix/son-of-man_v2.jpeg",
    },
    //THE ARNOFINI PORTRAIT
    {
        "img-org": "./img_orginal/The_Arnolfini_portrait.jpeg", //url to org-img
        "img-remix": "./img_remix/the-Arnolfini-Portrait_v2.png",
    },

    //THE DESPERATE MAN
    {
        "img-org": "./img_orginal/The_desperate_man.webp", //url to org-img
        "img-remix": "./img_remix/the-desperate-man_v2.png",
    },
    //THE KISS
    {
        "img-org": "./img_orginal/The_Kiss.jpeg", //url to org-img
        "img-remix": "./img_remix/the-kiss_v2.png",
    },
    //THE SCREAM
    {
        "img-org": "./img_orginal/The_scream.jpeg", //url to org-img
        "img-remix": "./img_remix/the-scream_v2.png",
    },
    //WHISTLER'S MOTHER
    {
        "img-org": "./img_orginal/Arragement_in_grey_and_black.jpg", //url to org-img
        "img-remix": "./img_remix/whistlers-mother_v2.jpeg",
    },
];

const diss = [
    {
        "img-diss": "./img_displace/heightMap.png",
    },
    {
        "img-diss": "./img_displace/strip.png",
    },
    {
        "img-diss": "./img_displace/stripe1.png",
    },
];

btn = document.querySelector("button");
btn.addEventListener("click", function () {
    document.querySelector("#hidden").id = "";
    btn.style.display = "none";
    document.querySelector("#interaction").id = "hidden";
    showAll();
});

btn.addEventListener("mouseover", () => {
    cursor.classList.add("focus");
});

btn.addEventListener("mouseleave", () => {
    cursor.classList.remove("focus");
});

function showAll() {
    for (let i = 0; i < pictures.length; i++) {
        new hoverEffect({
            parent: document.querySelector(`#hover${i}`), //parent element for distortion pic
            intensity: 0.2, //intensity of picture/distortion animation
            image1: pictures[i]["img-org"],
            image2: pictures[i]["img-remix"],
            displacementImage: getRandomItem(diss),
        });
    }

    function getRandomItem(diss) {
        // get random index value
        const randomIndex = Math.floor(Math.random() * diss.length);

        // get random item
        const item = diss[randomIndex]["img-diss"];

        return item;
    }

    let parent = document.querySelectorAll(".wrapper canvas");
    parent.forEach((child) => {
        let sound = child.previousElementSibling;
        child.addEventListener("mouseenter", function (event) {
            event.preventDefault();
            sound.currentTime = 0;
            sound.play();
        });
        child.addEventListener("mouseleave", function (event) {
            event.preventDefault();
            sound.pause();
        });
    });
}

// Mingalarpar (:
const cursor = document.querySelector('.cursor');
// const blue = document.querySelector('.blue');
// const yellow = document.querySelector('.yellow');
// const links = Array.from(document.querySelectorAll("a"));

const setCursorLocation = e => {
    let cursorLocation = `top: ${e.pageY - 20}px; left: ${e.pageX - 20}px;`;
    cursor.setAttribute("style", cursorLocation);
};

document.addEventListener("mousemove", setCursorLocation);

// blue.addEventListener("mouseenter", () => cursor.classList.add("cursor-blue") );
// yellow.addEventListener("mouseenter", () => cursor.classList.add("cursor-yellow") );

let all = document.querySelectorAll('.wrapper div');

all.forEach(item => {

    item.addEventListener("mouseover", () => {
        cursor.classList.add("focus");
    });

    item.addEventListener("mouseleave", () => {
        cursor.classList.remove("focus");
    });

});


