const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");
console.log(ingredientsRef);

ingredients.forEach((ingredient) => {
  const liRef = document.createElement("li");
  liRef.textContent = ingredient;
  ingredientsRef.appendChild(liRef);
});
