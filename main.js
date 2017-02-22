var getPlanets = document.getElementById("showPlanets");
var planetHolderDiv = document.getElementById("planetHolder");


var planets = [
	{
		name:"Mercury",
		url:"http://sci.esa.int/science-e-media/img/content/images/Mercury_globe_300.jpg"
	},
	{
		name:"Venus",
		url:"http://blogs.agu.org/geospace/files/2016/11/venus-1-300x300.jpg"
	},
	{
		name:"Earth",
		url:"http://vignette2.wikia.nocookie.net/hitchhikers/images/3/36/Earth.jpg/revision/latest?cb=20080521012955"
	},
	{
		name:"Mars",
		url:"http://space-facts.com/wp-content/uploads/mars-space-2.jpg"
	},
	{
		name:"Jupiter",
		url:"https://studyingthezodiacastrology.files.wordpress.com/2016/09/tumblr_mtaew48rbx1r7hdzwo1_1379450782_cover.jpg?w=300&h=300"
	},
	{
		name:"Saturn",
		url:"http://www.breezall.com/facts/space%20facts/i/Uranus%20Facts.jpg"
	},
	{
		name:"Uranus",
		url:"http://i1.wp.com/www.kickassfacts.com/wp-content/uploads/2015/10/UranusClouds.jpg"
	},
	{
		name:"Neptune",
		url:"http://blogs.egu.eu/divisions/ps/files/2016/09/Neptune_Full-300x300.jpg"
	}
	];







function populateDiv() {
	planetHolderDiv.innerHTML = "";
	for ( i = 0 ; i < planets.length ; i++ ) {
		var newPlanet = "";
		newPlanet += `<div class="planetBox" id="planetBox-${i}">`;
		newPlanet += `<div class="planetName hidden">  ${planets[i].name} </div>`;
		newPlanet += `<img class="planetImage" src="${planets[i].url}">`;
		newPlanet += `</div>`
		planetHolderDiv.innerHTML += newPlanet;
	}
}

function showMeTheMoney(event){
	if(event.target.className === "planetImage") {
		console.log("event worked", event);
		console.log("unique ID", event.target.parentNode.id);
		console.log("Text?", event.target.previousSibling);
		event.target.previousSibling.classList.remove('hidden');
	}
}

// getPlanets.addEventListener("click", populateDiv);
getPlanets.addEventListener("mouseenter", populateDiv);

// console.log("planetBoxes", planetBoxes);
document.body.addEventListener("click", showMeTheMoney);

/*console.log("Real Planets");*/