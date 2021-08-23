class Main{
    constructor(){
        this.data = JSON.parse(localStorage.getItem('spadata'))
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
                        /*import('./Cart.js')
                        let btn = document.querySelector('.header_counter')
                        btn.AddEventListener('click',()=>{
                            this.element.innerHTML=`${this.list}
                                                    <tr>
                                                    <td class ="cart_total">Total costs: <small>BYN</small></td>
                                                    </tr>`
                            
                            this.element.style.display = 'block'
                          console.log(this.element)
                                                    
                            })*/
                    

                        
                        .then((moduleProduct)=>{
                                      this.element.appendChild(moduleProduct)

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
    

    init(){
        return this.create()
    }
}
const main = new Main().init()
export default main