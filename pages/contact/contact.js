import countryList from "./countries.json" assert { type: "json" };

let select = document.getElementById("country");

countryList.map((country) => {
	const { name: countryName, code: countryCode } = country;

	let countryOption = document.createElement("option");
	countryOption.value = countryCode;
	countryOption.innerHTML = countryName;

	select.appendChild(countryOption);
});

const contactButton = document.getElementById("send-contact");

contactButton.addEventListener("click", (event) => {
	event.preventDefault();
	window.location.href = "../thanks/thanks.html";
});
