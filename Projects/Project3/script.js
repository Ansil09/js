let btn = document.querySelector("button");

function randomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}


btn.addEventListener("click", function(){
    let h1 = document.querySelector("h1");
    let randomclr = randomColor(); 
    h1.innerHTML = randomclr;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomclr;

})


