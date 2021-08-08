setInterval(setClock, 1000);

const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

console.log(hourHand);

function setClock() {
	const currentDate = new Date();

	const secondsRatio = currentDate.getSeconds() / 60;
	const minuteRatio = (secondsRatio + currentDate.getMinutes()) / 60;
	const hoursRatio = (minuteRatio + currentDate.getHours()) / 12;

	setRotation(hourHand, hoursRatio);
	setRotation(minuteHand, minuteRatio);
	setRotation(secondHand, secondsRatio);
}

function setRotation(element, rotationRatio) {
	element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();
