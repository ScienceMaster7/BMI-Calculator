const formElement = document.querySelector(".content");
const pElement = document.querySelector(".text");

const mainElement = document.querySelector("main");
const divContainer = document.createElement("div");
divContainer.classList.add("list-container");
mainElement.append(divContainer);

let counter = 0;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  //variables that store the value of the input.
  const height = formElement.height.value;
  const weight = formElement.weight.value;
  const bmi = weight / height ** 2;
  const name = formElement.name.value;

  //creating a new list Item.
  const listItem = document.createElement("div");
  listItem.classList.add("container__item");

  // creating 3 paragraphs and button.
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const deleteItem = document.createElement("button");

  // asigning paragraph 1 and 2 their coresponding values from the input.
  p1.textContent = name;
  p2.textContent = bmi.toFixed(2);

  /* Conditional test to check if a person is underweight, normal, obese or 
  overweight and setting the coresponding text color. */
  if (bmi < 18.5) {
    p3.textContent = "under-weight";
    p3.style.color = "red";
  } else if (18.5 < bmi && bmi < 25) {
    p3.textContent = "normal";
    p3.style.color = "green";
  } else if (25 < bmi && bmi < 30) {
    p3.textContent = "obese";
    p3.style.color = "orange";
  } else {
    p3.textContent = "over-weight";
    p3.style.color = "red";
  }

  // Styling the delete Button.
  deleteItem.textContent = "delete";
  deleteItem.style.backgroundColor = "red";
  deleteItem.style.fontStyle = "bold";

  //appending the 3 new paragraphs and 1 button to the new list item.
  listItem.append(p1);
  listItem.append(p2);
  listItem.append(p3);
  listItem.append(deleteItem);

  // appending the list item to the parent container.
  divContainer.prepend(listItem);

  // If the delete button is clicked this list item is removed.
  listItem.addEventListener("click", (event) => {
    listItem.remove(listItem);
  });

  // counts how often the calculate button has been clicked.
  counter++;

  /* Conditional to check if the calculate button has been clicked 
  for the first time and then creates and styles the delete all button*/
  if (counter === 1) {
    const deleteAll = document.createElement("button");
    deleteAll.textContent = "Delete All";
    deleteAll.style.backgroundColor = "red";
    deleteAll.style.fontStyle = "bold";
    deleteAll.classList.add("deleteAll");

    divContainer.append(deleteAll);
  }

  // reseting the form if the Calculate button is clicked.
  formElement.reset();
});
