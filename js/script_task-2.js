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

const createProductList = ingredients.map((ingredient) => {
  const liRef = document.createElement("li");
  liRef.textContent = ingredient;
  return liRef;
});

ingredientsRef.append(...createProductList);
