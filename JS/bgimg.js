// make an array of img files

const bgImgs = [
{ 
    img: "01.png",
    alt: "01.png" 
},
{ 
    img: "02.jpg",
    alt: "02.jpg", 
},
{ 
    img: "03.jpg",
    alt: "03.jpg",
},
{ 
    img: "04.jpg",
    alt: "04.jpg",
},
{ 
    img: "05.jpg",
    alt: "05.jpg",
},
{ 
    img: "06.jpg",
    alt: "06.jpg",
},
{ 
    img: "07.jpg",
    alt: "07.jpg",
},
{ 
    img: "08.jpg",
    alt: "08.jpg",
},
{ 
    img: "09.jpg",
    alt: "09.jpg",
},
{ 
    img: "10.jpg",
    alt: "10.jpg",
},
{ 
    img: "11.jpg",
    alt: "11.jpg",
},
{ 
    img: "12.jpg",
    alt: "12.jpg",
},
{ 
    img: "13.jpg",
    alt: "13.jpg",
},
{ 
    img: "14.jpg",
    alt: "14.jpg",
},
];

// randomly select the array index
const chosenImg = bgImgs[Math.floor(Math.random()*bgImgs.length)];

// put this random index in the HTML
//document.querySelector(".bgimg").src = `img/${chosenImg.img}`;
//document.querySelector(".bgimg").alt = chosenImg.alt;
document.body.style.backgroundImage = `url('img/${chosenImg.img}')`;
