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
            if(dataItem.slug == hash){
                document.title = `${dataItem.title}`
                this.element.innerHTML =`
                <div class="container_main__wrapper">
                <div class = "container_main_box">
                    <span class ="container_main__title">${dataItem.title}</span>
                    <span class = "container_main__content">${dataItem.content}</span>
                    </div>
                    <div class = "image_slider">
                        <div class = "image_slider_wrapper">
                        <div class = "image_slider_img">
                        <img src="images/slider1.jpg">
                        <span class = "image_slider_description"> «Вы должны иметь стиль. Он помогает спускаться по лестнице. Он помогает подняться по утрам. Это образ жизни. Без него вы – ничто. И сейчас я говорю не о количестве одежды». Диана Вриланд</span>
                        </div>

                        <div class = "image_slider_img">
                        <img src="images/slider2.jpg">
                        <span class = "image_slider_description"> «Стиль это единственное, что вы не можете купить. Он не зависит от того, какая у вас сумка, от ее бренда или цены. Стиль – это отражение нашей души, это эмоция». Альбер Эльбаз</span>
                        </div>
                        <div class = "image_slider_img">
                        <img src="images/slider3.jpg">
                        <span class = "image_slider_description">«Не следуйте трендам. Не дайте моде управлять вами. Решите, кто вы есть и что вы хотите выразить с помощью одежды и вашего образа жизни». Джанни Версаче</span>
                        </div>
                        </div>
                        </div>
                </div>`
            }
           
        });
        if (hash == 'catalog'){
            import('./Products.js')
            .then(producsData =>{
                producsData.default
                .then(moduleProduct =>{
                    this.element.appendChild(moduleProduct)
                })

            })
         
        }
    
    }
    

    init(){
        return this.create()
    }
}
const main = new Main().init()
export default main