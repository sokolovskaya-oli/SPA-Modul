

class Header{
    create (navModule){
        this.element = document.createElement('header')
        this.element.classList.add('header')

        this.element.innerHTML = `
                                <div class="container">
                                    <div class = "header_logo">
                                        <a href="/">
                                            <img src ="images/logo1.png">
                                        </a>
                                        ${navModule.outerHTML}
                                    </div>
                                    <div class="header_counter"><i class="fa fa-shopping-cart" aria-hidden="true"></i></div>
                                                              
                                </div>`
                    return this.element            

    }
    getNav(){
        return import('./Nav.js')
        .then(nav => {
            let navModule = nav.default
            
           return this.create(navModule)
        })

    }
    init(){
        return this.getNav()

    }
}
const header = new Header().init()
export default header