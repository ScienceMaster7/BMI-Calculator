const formElement = document.querySelector(".content");
const pElement = document.querySelector(".text");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let height = formElement.height.value;
  let weight = formElement.weight.value;
  let bmi = weight / height ** 2;

  pElement.textContent = "Your Body Mass Index is " + bmi;

  if (bmi < 18.5) {
    pElement.style.color = "red";
  } else if (18.5 < bmi < 25) {
    pElement.style.color = "green";
  } else if (25 < bmi < 30) {
    pElement.style.color = "orange";
  } else {
    pElement.style.color = "red";
  }

  formElement.reset();
});
