const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

ingredients.forEach((item) => {
  const li = document.createElement("li");
  li.classList.add("item");
  const p = document.createElement("p");

  p.textContent = item;

  li.append(p)
  list.append(li)
})