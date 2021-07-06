const formElement = document.querySelector(".content");
const pElement = document.querySelector(".text");

const mainElement = document.querySelector("main");
const divContainer = document.createElement("div");
divContainer.classList.add("list-container");
mainElement.append(divContainer);

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let height = formElement.height.value;
  let weight = formElement.weight.value;
  let bmi = weight / height ** 2;
  let name = formElement.name.value;

  pElement.textContent = "Your Body Mass Index is " + bmi.toFixed(2);

  if (bmi < 18.5) {
    pElement.style.color = "red";
    console.log(1);
  } else if (18.5 < bmi && bmi < 25) {
    pElement.style.color = "green";
    console.log(2);
  } else if (25 < bmi && bmi < 30) {
    pElement.style.color = "orange";
    console.log(3);
  } else {
    pElement.style.color = "red";
    console.log(4);
  }

  formElement.reset();
});
