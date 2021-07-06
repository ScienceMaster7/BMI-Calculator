const formElement = document.querySelector(".content");
const pElement = document.querySelector(".text");

const mainElement = document.querySelector("main");
const divContainer = document.createElement("div");
divContainer.classList.add("list-container");
mainElement.append(divContainer);

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const height = formElement.height.value;
  const weight = formElement.weight.value;
  const bmi = weight / height ** 2;
  const name = formElement.name.value;

  const listItem = document.createElement("div");
  listItem.classList.add("container__item");

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const deleteItem = document.createElement("button");

  p1.textContent = name;
  p2.textContent = bmi.toFixed(2);

  if (bmi < 18.5) {
    p3.textContent = "under-weight";
    p3.style.color = "red";
    console.log(1);
  } else if (18.5 < bmi && bmi < 25) {
    p3.textContent = "normal";
    p3.style.color = "green";
    console.log(2);
  } else if (25 < bmi && bmi < 30) {
    p3.textContent = "obese";
    p3.style.color = "orange";
    console.log(3);
  } else {
    p3.textContent = "over-weight";
    p3.style.color = "red";
    console.log(4);
  }

  deleteItem.textContent = "delete";
  deleteItem.style.backgroundColor = "red";
  deleteItem.style.fontStyle = "bold";

  listItem.append(p1);
  listItem.append(p2);
  listItem.append(p3);
  listItem.append(deleteItem);

  divContainer.append(listItem);

  listItem.addEventListener("click", (event) => {
    listItem.remove(listItem);
  });

  formElement.reset();
});
