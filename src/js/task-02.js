const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const itemRef = document.querySelector("#ingredients");

const listItem = ingredients.map(ingredient => {
	const itemEL = document.createElement("li");
	itemEL.classList.add("item");
	itemEL.append(ingredient);
	return itemEL;
});
itemRef.append(...listItem);
