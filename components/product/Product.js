// Создаем прототип продукта
class Product {
  render () {
    // Переменная которая будет хранить в себе верстку
    let productLiElement = ''
    // Использкем цикл для того что бы мы могли пройти по всем элементам массива. 
    for (let i = 0; i < PRODUCT_CATALOG.length; i++) {
      // В переменную присваеваем значение из объектав
      productLiElement += `
      <li class='product_item'>
        <h4 class='product-title'>${PRODUCT_CATALOG[i].name}</h4>
        <div>
        <img class='product-img' src=${PRODUCT_CATALOG[i].img} loading='lazy'/>
        </div>
        <div class='product_price'>
        <del>${PRODUCT_CATALOG[i].oldPrice} $</del>
        <p>${PRODUCT_CATALOG[i].newPrice} $</p>
        </div>
        <button class='product-btn'>заказать игру</button>
      </li>
      `
    }
    // Создаем переменную она будет ul-тегом в нее ложим данные из переменной productLiElement
    const listWrapper = `
      <ul class='product_wrapper'>${productLiElement}</ul>
    `
    // Ложим нашь ul тег с li элементами в 
    PRODUCT_CONNECT.innerHTML = listWrapper
  }
}
// Создаем экземпляр продукта
const gameProduct = new Product()

gameProduct.render()

