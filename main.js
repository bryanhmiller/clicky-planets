var getPlanets = document.getElementById("showPlanets");
var planetHolderDiv = document.getElementById("planetHolder");

var planets = [
	{
		name:"Mercury",
		url:"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwicidqcz6LSAhXERyYKHW3HBYcQjRwIBw&url=https%3A%2F%2Fwww.pinterest.com%2Fjkovarietyshop%2Fplanet-mercury%2F&bvm=bv.147448319,d.eWE&psig=AFQjCNEXubvKFtxjduVeJ9_ur1ccSorYfg&ust=1487815601850170"
	},
	{
		name:"Venus",
		url:"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjkh_22z6LSAhXISiYKHdcbAa8QjRwIBw&url=http%3A%2F%2Fwww.geotimes.org%2Fmay08%2Farticle.html%3Fid%3Dfeature_venus.html&bvm=bv.147448319,d.eWE&psig=AFQjCNFh1swKAVoJnaJKXRKn0Deubog9aQ&ust=1487815661721755"
	},
	{
		name:"Earth",
		url:"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjmh-zIz6LSAhUE1CYKHW1QDcEQjRwIBw&url=http%3A%2F%2Fhitchhikers.wikia.com%2Fwiki%2FEarth&bvm=bv.147448319,d.eWE&psig=AFQjCNGErJwQ5h6av_NVE3Kl2H2D28Gcmw&ust=1487815708158187"
	},
	{
		name:"Mars",
		url:"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiuv4rlz6LSAhWM4yYKHY8oAUsQjRwIBw&url=http%3A%2F%2Fendlessfacts.com%2Fpost%2F613222831%2F10-Interesting-Facts-About-Mars.html&bvm=bv.147448319,d.eWE&psig=AFQjCNHCr-BjPZTzLPYkrovhmc8W7FUG3A&ust=1487815761523291"
	},
	{
		name:"Jupiter",
		url:"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjUzYOA0KLSAhUF6yYKHTFPAigQjRwIBw&url=http%3A%2F%2Fwww.thesupremeuniverse.com%2Fjupiter&bvm=bv.147448319,d.eWE&psig=AFQjCNFBbk870DZkHbVys1aU2IM_AeZIxA&ust=1487815818450722"
	},
	{
		name:"Saturn",
		url:"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiTurPR0KLSAhXLKCYKHaP1CFAQjRwIBw&url=http%3A%2F%2Fwww.rgj.com%2Fstory%2Flife%2Foutdoors%2F2016%2F06%2F07%2Fstar-guide-saturn-its-brightest-2016%2F85568968%2F&bvm=bv.147448319,d.eWE&psig=AFQjCNF_98h66Ms4YMVuFI9p2tcaQ1Be-A&ust=1487815906166403"
	},
	{
		name:"Uranus",
		url:"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjt1aTs0KLSAhVCQyYKHdgjC58QjRwIBw&url=http%3A%2F%2Fwww.kickassfacts.com%2Faskus-why-does-uranus-look-so-smooth-compared-to-other-gas-giants-in-our-solar-system%2F&bvm=bv.147448319,d.eWE&psig=AFQjCNFsj-oUbexmC2QGMQC1_QzebiRP3g&ust=1487816048947664"
	},
	{
		name:"Neptune",
		url:"https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwihq66B0aLSAhVBRSYKHcfsCD8QjRwIBw&url=http%3A%2F%2Fblogs.egu.eu%2Fdivisions%2Fps%2F2016%2F10%2F10%2Ffrom-neptune-to-planet-nine-finding-planets-with-pen-and-paper%2F&bvm=bv.147448319,d.eWE&psig=AFQjCNHTQxfzSjFINsbvm1pR80ukYFeZYw&ust=1487816085087441"
	}
	];







function populateDiv() {
	planetHolderDiv.innerHTML = "";
	for ( i = 0 ; i < planets.length ; i++ ) {
		var newPlanet = "";
		newPlanet += `<div class="planetBox" id="planetBox-${i}">`
		newPlanet += `<div class="planetName">  ${planets[i].name} </div>`
		newPlanet += `</div>`
		planetHolderDiv.innerHTML += newPlanet;
	}
}

getPlanets.addEventListener("click", populateDiv);
/*console.log("Real Planets");*/