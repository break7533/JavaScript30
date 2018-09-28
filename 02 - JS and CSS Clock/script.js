const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {

    const time = new Date();
    const seconds = time.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = time.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + seconds / 60 * 6 + 90;
    minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = time.getHours();
    const hoursDegrees = ((hours / 12) * 360) + mins / 60 * 30 + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    const hands = document.querySelectorAll(".hand");

    if (secondsDegrees === 90) {
        hands.forEach(hand => (hand.style.transition = "none"));
    }
    else {
        hands.forEach(hand => (hand.style.transition = " "));
    }
}

setInterval(setDate, 1000);