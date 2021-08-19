class Footer{
    create(){
        this.element = document.createElement('footer')
        this.element.classList.add('footer')
        
        this.element.innerHTML=`
        <div class="container_footer">
        <div class = "container_footer__logo">
        <a href="/">
            <img src ="images/logo1.png">
              </a>
        </div>
        <div class="container_footer__info">
            <span> Адрес: г. Минск, пр-т Дзержинского 19Б, нижний уровень</span>
            <span> Тел.: +375 29 666-66-66</span>
            <span>Email: info@moda.by</span>
        </div>
        <div class = "container_footer__social">
        <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-vk" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        <a href="#"><i class="fa fa-telegram" aria-hidden="true"></i></a>
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