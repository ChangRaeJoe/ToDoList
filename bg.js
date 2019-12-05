const body = document.querySelector('body');


const IMG_NUMBER = 8;



function paintImage(imgNum){
    const image = new Image();
    image.src = `img/${imgNum + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
    
}

function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNum = getRandom();    
    paintImage(randomNum);
}

init();