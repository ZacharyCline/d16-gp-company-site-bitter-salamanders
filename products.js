var products = [
	{
		"type": "Tiger Salamanders",
		"length": "1 ft. or longer",
		"appearance": "a yellow variation of spots and stripes",
		"habitat": "mountaneous and lowland areas, avoid water, prefer rocks and boulders",
		"price": "$40"
	},
	{
		"type": "Flatwoods Salamanders",
		"length": "4 in.",
		"appearance": "varies",
		"habitat": "pine forests",
		"price": "$25"
	},
	{
		"type": "Long-toed Salamanders",
		"length": "10 in.",
		"appearance": "who knows?",
		"habitat": "deciduous, green areas",
		"price": "$40"
	},
	{
		"type": "Cave Salamanders",
		"length": "10-20 cm.",
		"appearance": "a.k.a. the Spotted Tail Salamander",
		"habitat": "anywhere from the mouth of a cave to deep in to the cave, can also be found in various rocky outcrops and in forests",
		"price": "$30"
	},
	{
		"type": "Northern Zigzag Salamanders",
		"length": "about 11 cm.",
		"appearance": "zigzagging stripe down its back which is either red or yellow, orange markings around the base of its legs",
		"habitat": "damp, rocky forests and around cave entrances", 
		"price": "$45"
	},
	{
		"type": "Wandering Salamanders",
		"length": "5 in.",
		"appearance": "has a prehensile tail, varies in color from brown to grey and features bronze markings that can be marbled, mottled or speckled on the salamanders back, has a bronze stripe",
		"habitat": "forested lands or forest edges, also thrives on recently cleared forest areas",
		"price": "$55"
	}
]

for (var i=0; i<products.length; i++){
	var currentProduct = products[i];
	var type = "<h2 class='type'>" + currentProduct.type + "</h2>";
	var appearance = "<h4>" + "Appearance: " + "</h4>" + "<p>" + currentProduct.appearance + "</p>";
	var length = "<p>" + "Length: " + currentProduct.length + "</p>";
	var habitat = "<p>" + "Natural Habitat: " + currentProduct.habitat + "</p>";
	var price = "<h5>" + currentProduct.price + "</h5>";

	var outputDiv = document.getElementById("productsOutput");

	outputDiv.innerHTML += "<div class='all'>" + type + appearance + length + habitat + price + "</div>";
}















