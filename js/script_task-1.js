const ulCategoryRef = document.querySelector("#categories");
const childrenNum = ulCategoryRef.children.length;
console.log(`В списке ${childrenNum} категории`);

const items = [...document.querySelectorAll("li.item")];
items
  .map((item) => {
    const title = item.firstElementChild.textContent;
    const liNum = item.querySelectorAll("ul li").length;
    return {
      title,
      liNum,
    };
  })
  .forEach((entry) => {
    console.log(
      `Категория: ${entry.title}\nКоличество элементов: ${entry.liNum}`
    );
  });
