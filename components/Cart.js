function CreateCart(){

    this.create = (basket) =>{
   
        this.element = document.createElement('div')
        this.element.classList.add('cart_wrapper')
        this.list = ''
     
        
        let btnCart = document.querySelectorAll('.product__btn');

        btnCart.addEventListener('click',(basket)=>{
        let basketData = JSON.parse(localStorage.getItem('basket'))
        console.log(basketData)
      
              basketData.forEach(product => {
                this.list += `<tr class="cart_element">
                <td class = "cart_name"><a href ='/${location.hash}/${product.id}'>${product[1].title}</a></span>
                <td class = "cart_price">${product[1].price} <small>BYN</small></td>
                </tr>
               `
                             
        })
          
          
        });

        let btn = document.querySelector('.header_counter');
       
        

        



}
const cart = new CreateCart()
export default cart



