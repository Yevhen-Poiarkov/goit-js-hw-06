const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];
const imgRef = document.querySelector(".gallery");

const imgItem = images.map(({ url, alt }) => {
	const itemEL = document.createElement("li");
	itemEL.classList.add("gallery-item");
	const linkEL = document.createElement("a");
	linkEL.href = "#";
	const imgEL = document.createElement("img");
	imgEL.src = url;
	imgEL.alt = alt;
	imgEL.height = 300;
	imgEL.width = 250;
	itemEL.classList.add("item");
	linkEL.append(imgEL);
	itemEL.append(linkEL);
	return itemEL;
});
imgRef.append(...imgItem);
