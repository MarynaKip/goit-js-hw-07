const categories = document.querySelectorAll('ul#categories')[0].children

console.log(`Number of categories: ${categories.length}`)

Object.values(categories).forEach(category => {
    if(category.classList.contains('item')) {
        const h2Element = category.querySelector('h2');
        const h2Text = h2Element.textContent;
        console.log(`Category: ${h2Text}`)
        const ulElementsLength = category.querySelector('ul').querySelectorAll('li').length;
        console.log(`Elements: ${ulElementsLength}`)
    }
});