let hunger = 100;
let health = 100;
function startBtn() {
	let startBatton = document.getElementById("start");
	startBatton.style.transform = ("translateX(-10000%)");
	setInterval(decrease, 1000);
	let img = document.getElementById("img");
	img.style.display = 'block';
	document.getElementById("hunger").innerHTML = hunger;
	document.getElementById("health").innerHTML = health;
}
function replenishmentHunger() {
	if (hunger <= 100){
		hunger = hunger + 1;
	}
}
function replenishmentHealth() {
	if (health <= 100){
		health = health + 1;
	}
}
function decrease() {
	hunger --;
	health --;
	document.getElementById("hunger").innerHTML = hunger;
	document.getElementById("health").innerHTML = health;
	endGame()
}
function endGame() {
	if(hunger === 0 || health === 0){
		alert("Ваше животное умерло!!!")
		location.reload()
	}

}