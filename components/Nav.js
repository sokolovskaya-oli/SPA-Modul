

class Nav {
  constructor(){
    this.data = JSON.parse(localStorage.getItem('spadata'))
    console.log(this.data)
  }

    create(){
        this.element = document.createElement('nav')
        this.element.classList.add('nav')
        this.list =''
        this.data.forEach(item=> {
            this.list +=`<li><a href="#${item.slug}">${item.shortTitle}</a></li>`
        });

        this.element.innerHTML=`
        <ul class="header_menu"> 
          ${this.list}     
        </ul>`
        return this.element

    }
    init(){
        return this.create()

    }
}
const nav = new Nav().init()
export default nav 