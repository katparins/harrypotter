function generate() {
	var houses = [
		"Gryffindor",
		"Ravenclaw",
		"Hufflepuff",
		"Slytherin"
	];

	var name = document.getElementById("nameInput").value;
	var randomhouse = houses[Math.floor(Math.random() * houses.length)];
	var outputParagraph = document.getElementById("outputParagraph");
	outputParagraph.innerHTML = name + " belongs in " + randomhouse;
	restyle(outputParagraph);
}

function restyle(element) {
	var randomSize = Math.floor(Math.random() * 3) + 56;	
	var colors = ["indianred", "skyblue", "lightgoldenrodyellow", "lightgreen"];
  	var randomColor = colors[Math.floor(Math.random() * colors.length)];
  	var randomFont = Math.random() < 0.5 ? "'EB Garamond', serif" : "'Cormorant Garamond', serif";
	element.style.fontSize = randomSize + "px";
	element.style.color = randomColor;
	element.style.fontFamily = randomFont;
}

