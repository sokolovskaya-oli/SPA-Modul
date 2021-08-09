class Cart {
    create(){
        this.element = document.createElement('div')
        this.element.classList.add('header_cart')

        this.element.innerHTML=`
        <div class="container_cart">
        <a href="/">
            <img src ="images/cart-big.png">
         </a>
        <div class="cart_header_body">
        <ul class="cart_header_list"> </ul>
        </div>
        </div>`
        return this.element

    }
    init(){
        return this.create()

    }
}
const cart = new Cart().init()
export default cart