class Main{
    constructor(){
        this.data = JSON.parse(localStorage.getItem('spadata'))
        this.basket = JSON.parse(localStorage.getItem('basket')) || []
    }

    create(){
        this.element = document.createElement('main')
        this.element.classList.add('main')

        this.render()
        window.addEventListener('hashchange', ()=>{
           this.render()
        })
        return this.element

    }

    render(){
        let hash = location.hash ? location.hash.slice(1): 'home';

        this.data.forEach(dataItem =>{
            if(hash.includes(dataItem.slug)){
                document.title = `${dataItem.title}`
                this.element.innerHTML =`
                <div class="container_main__wrapper">
                <div class = "container_main_box">
                    <span class ="container_main__title">${dataItem.title}</span>
                    <span class = "container_main__content">${dataItem.content}</span>
                    </div>
                    `
                
                if (dataItem.slug == 'catalog'){
                    if(location.hash.includes('/')) this.element.innerHTML=``
                    import('./Products.js')
                    .then(productData =>{
                        productData.default.init()
                     
                        .then((moduleProduct)=>{
                            this.products = JSON.parse(localStorage.getItem('productData'))
                                this.element.appendChild(moduleProduct)

                                let btnsAdd = document.querySelectorAll('.product__btn')
                                btnsAdd.forEach((bntAdd) =>{
                                     bntAdd.addEventListener('click', (event)=>{
                                        this.addProduct(event.target.id)
                                    }
                                 )}) 

                                let btn = document.getElementById('prev')
                                     if (btn){
                                        btn.addEventListener('click',()=>{
                                              location.hash ='catalog'
                                        })
                                    }
                                   
                        })

                      
                    })
                 
                }
            }
           
        });
        
    
    }

    addProduct(id){
        let idProduct = id - 1 
        let  productToCart =  this.products[idProduct]
        if(this.basket.length == 0){
            productToCart.count = 1;
            this.basket.push(this.products[idProduct])
            localStorage.setItem('basket', JSON.stringify(this.basket))
        }else if(this.basket.length > 0) {
            let flag = true
            this.basket.forEach((item)=>{
                if(item.id == id){
                    item.count += 1;  
                    localStorage.setItem('basket', JSON.stringify(this.basket))
                    flag = false                  
                }
            })

            if(flag){
                productToCart.count = 1;
                this.basket.push(this.products[idProduct])
                localStorage.setItem('basket', JSON.stringify(this.basket))
            }
        }
      
        
    }

    init(){
        return this.create()
    }
}
const main = new Main().init()
export default main