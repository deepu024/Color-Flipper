const hex_color = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F"]
let color = ""
let color_name = document.querySelector('.hex-code');
function randomNumber(){
    return Math.floor(Math.random()*hex_color.length)
}
document.querySelector(".btn").addEventListener("click", function(){
    for(let i = 0; i<6; i++){
        color += hex_color[randomNumber()];
    }
    color_name.innerHTML = "#"+color;
    document.body.style.backgroundColor = "#"+color;
    color = ""
})