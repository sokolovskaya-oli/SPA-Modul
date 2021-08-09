class Nav {
    create(){
        this.element = document.createElement('nav')
        this.element.classList.add('nav')

        this.element.innerHTML=`
        <ul class="header_menu">
        <li><a href="/home">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Contacts</a></li>        
        </ul>`
        return this.element

    }
    init(){
        return this.create()

    }
}
const nav = new Nav().init()
export default nav 