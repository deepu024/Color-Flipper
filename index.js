


const color = ["Red", "Green", "Blue", "Yellow", "Orange", "Black"];
let color_name = document.querySelector('.hex-code');
let bgColor = document.body;
document.querySelector(".btn").addEventListener("click", function(){
    let number = randomNumber()
    let setColor = color[number]
    color_name.innerHTML = setColor;
    let changeColor = setColor.toLowerCase();
    bgColor.style.backgroundColor = `${changeColor}`;

})

function randomNumber(){
    return Math.floor(Math.random()* color.length);
}

