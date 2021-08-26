function CreateCart(){  
   
  this.create = (basketData) =>{
    this.element = document.createElement('div')
    this.element.classList.add('cart_wrapper')

    if(basketData.length == 0){
      this.element.innerHTML=`<h1>Корзина  пуста</h1>`
      console.log(this.element.innerHTML)
    }else{
      this.list=''
      console.log(basketData)
      this.totalPrice = 0
      this.element.innerHTML= " "

      basketData.forEach(basketProduct => {
        this.list += `<tr>
                      <td class="basket_title">${basketProduct.title}</td>
                      <td class="basket_counter"> ${basketProduct.count}</td>
                      <td class="basket_price"> ${basketProduct.price.toLocaleString()}</td>
                      </tr>            
        
        `
        this.totalPrice += basketProduct.price*basketProduct.count
      
      });
      this.element.innerHTML=`<div class='basket'>
                            <div class='basket__close'><i class="fa fa-times" aria-hidden="true"></i></div>
                            <table>${this.list}
                            <tr>
                            <td class="basket_title">Сумма:</td>
                            <td> </td>
                            <td class="basket_price_total">${this.totalPrice.toLocaleString()}</td>
                            </tr></table>
                            </div>
      `
    }  
 
    return this.element
  }

  this.init = () => {
    let basketData = JSON.parse(localStorage.getItem('basket')) || []
   return this.create(basketData)

  }
    

}
const cart = new CreateCart()
export default cart