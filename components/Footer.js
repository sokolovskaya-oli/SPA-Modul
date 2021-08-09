class Footer{
    create(){
        this.element = document.createElement('footer')
        this.element.classList.add('footer')
        
        this.element.innerHTML=`
        <div class="container">
        <div class = "header_logo">
        <a href="/">
            <img src ="images/logo2.jpg">
        
        </a>
        </div>
        <div class="footer_contact_info">
            <span>Address</span>
            <span>Phone</span>
            <span>Email</span>
        </div>
        </div>
        `
        return this.element

    }
    init(){

        return this.create()
    }
}
const footer = new Footer().init()
export default footer