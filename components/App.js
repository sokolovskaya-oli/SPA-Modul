class App{
    
    create(){
        this.app = document.createElement('div')
        this.app.classList.add('app')
        document.body.appendChild(this.app)
    }

    init(){
        import ('./Head.js')
        .then((head)=>{
            let headTitle = head.title
            headTitle.innerHTML = "Style Furniture",

            import('./Data.js')
            .then(data => (data.default)
                .then(defaultData => {
                    localStorage.setItem('spadata',defaultData)
                    this.create()

                    import('./Header.js')
                    .then(header => {
                        let moduleHeader = header.default
                        moduleHeader.then(newHeader =>{
                            this.app.appendChild(newHeader)

                            this.cartBtn = document.querySelector('.header_counter')
                            if(this.cartBtn){
                                this.cartBtn.addEventListener('click',()=>{
                                    import('./Cart.js').then((cart)=>{
                                       this.cart = cart.default.init()
                                       console.log(this.cart )
                                       this.app.appendChild(this.cart)

                                       this.closeBtn = document.querySelector('.basket__close')
                                       this.closeBtn.addEventListener('click', ()=>{
                                        document.querySelector('.basket').remove();
                                       })
                                    })
                                })
                            }
    
                            import('./Main.js')
                            .then(main => {
                            let moduleMain = main.default
                            this.app.appendChild(moduleMain)
    
                                import('./Footer.js')
                                    .then(footer =>{
                                    let footerModule =footer.default
                                    this.app.appendChild(footerModule)
                                    })
                             })
                        })
                })
                            
                }))
         })
        }    
}

const app = new App().init()
export default app
