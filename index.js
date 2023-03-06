const pictures = [
    //MONA LISA
    {
        "img-org": "./img_orginal/Mona_Lisa.webp", //url to org-img
        "img-remix": "./img_remix/Mona_Lisa_v2.jpeg",
        "img-dissolve": "", //url to diss img
        "sound": "" //url to sound
    },
    //BIRTH OF VENUS
    {
        "img-org": "./img_orginal/The_Birth_of_Venus_Botticelli.jpeg", //url to org-img
        "img-remix": "./img_remix/birth-of-venus_v2.jpeg",
        "img-dissolve": "", //url to diss img
        "sound": "" //url to sound
    },
    //GIRL WITH PEARL EARRING
    {
        "img-org": "./img_orginal/Girl_with_a_Pearl_Earring.jpeg", //url to org-img
        "img-remix": "./img_remix/girl-with-pearl-earring_v2.jpg",
        "img-dissolve": "", //url to diss img
        "sound": "" //url to sound
    },
    //NEFERTITI
    {
        "img-org": "./img_orginal/Nefertiti_bust.jpeg", //url to org-img
        "img-remix": "./img_remix/nefertiti_v2.png",
        "img-dissolve": "", //url to diss img
        "sound": "" //url to sound
    },
    //SON OF MAN
    {
        "img-org": "./img_orginal/TheSonOfMan.jpeg", //url to org-img
        "img-remix": "./img_remix/son-of-man_v2.jpeg",
        "img-dissolve": "", //url to diss img
        "sound": "" //url to sound
    },
    //THE ARNOFINI PORTRAIT
    {
        "img-org": "./img_orginal/The_Arnolfini_portrait.jpeg", //url to org-img
        "img-remix": "./img_remix/the-Arnolfini-Portrait_v2.png",
        "img-dissolve": "", //url to diss img
        "sound": "" //url to sound
    },

    //THE DESPERATE MAN
    {
        "img-org": "./img_orginal/The_desperate_man.webp", //url to org-img
        "img-remix": "./img_remix/the-desperate-man_v2.png",
        "img-dissolve": "", //url to diss img
        "sound": "" //url to sound
    },
    //THE KISS
    {
        "img-org": "./img_orginal/The_Kiss.jpeg", //url to org-img
        "img-remix": "./img_remix/the-kiss_v2.png",
        "img-dissolve": "", //url to diss img
        "sound": "" //url to sound
    },
    //THE SCREAM
    {
        "img-org": "./img_orginal/The_scream.jpeg", //url to org-img
        "img-remix": "./img_remix/the-scream_v2.png",
        "img-dissolve": "", //url to diss img
        "sound": "" //url to sound
    },
    //WHISTLER'S MOTHER
    {
        "img-org": "./img_orginal/Arragement_in_grey_and_black.jpeg", //url to org-img
        "img-remix": "./img_remix/whistlers-mother_v2.jpeg",
        "img-dissolve": "", //url to diss img
        "sound": "" //url to sound
    }
];

//TEST

for (let i = 0; i < pictures.length; i++) {
    document.querySelector('#wrapper').innerHTML += `
    <img src='${pictures[i]["img-org"]}'></img>`;
}