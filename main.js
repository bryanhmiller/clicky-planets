var button = document.getElementById("showPlanets");
button.addEventListener("click", populateDiv);

function populateDiv() {
	document.getElementById("planetHolder").innerHTML = "<h1>Button Works!</h1>"
}

console.log("Real Planets");