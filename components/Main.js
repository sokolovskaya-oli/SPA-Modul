class Main{
    constructor(){
        this.data = JSON.parse(localStorage.getItem('spadata'))
    }
    create(){
        this.element = document.createElement('main')
        this.element.classList.add('main')

        this.list =''
        this.data.forEach(item=> {
            this.list +=`<h1>${item.title}</h1>
                         <p>${item.content}</p>`
        });


        this.element.innerHTML=`
        <div class = "container_main">
            <div class="main_slider">
            ${this.list}
            </div>
        </div>
        `
        return this.element

    }
    init(){
        return this.create()
    }
}
const main = new Main().init()
export default main