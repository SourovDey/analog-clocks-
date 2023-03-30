let secondHand = document.querySelector(".second-hand");
let minHand = document.querySelector(".min-hand");
let hourHand = document.querySelector(".hour-hand");

function setDate(){
    let now = new Date();
//  ----second------
    let seconds = now.getSeconds();
    let secondsDegrees = ((seconds / 60)* 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    let mins = now.getMinutes();
    let minsDegrees = ((mins / 60)* 360) +((seconds/60)*6)+ 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;


    let hour = now.getMinutes();
    let hoursDegrees = ((hour / 60)* 360) +((mins/60)*30)+ 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate()

