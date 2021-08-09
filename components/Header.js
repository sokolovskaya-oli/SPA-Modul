import nav from './Nav.js'
import cart from './Cart.js'
class Header{
    create (){
        this.element = document.createElement('header')
        this.element.classList.add('header')

        this.element.innerHTML = `
                                <div class="container">
                                    <div class = "header_logo">
                                        <a href="/">
                                            <img src ="images/logo2.jpg">
                                        </a>
                                        ${nav.outerHTML}
                                    </div>
                              
                                    ${cart.outerHTML}
                                </div>`
                    return this.element            

    }

    init(){
        return this.create()

    }
}
const header = new Header().init()
export default header