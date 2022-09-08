const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const headingRef = document.querySelector("#ingredients");

const listItem = ingredients.map(ingredient => {
	const itemEL = document.createElement("li");
	itemEL.classList.add("item");
	itemEL.append(ingredient);
	return itemEL;
});
headingRef.append(...listItem);
