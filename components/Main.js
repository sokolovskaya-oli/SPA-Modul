class Main{
    create(){
        this.element = document.createElement('main')
        this.element.classList.add('main')
        this.element.innerHTML=`
        <div class = "container_main">
            <div class="main_slider">
            <h1>Style Furniture</h1>
            <p>Welcome to Style Furniture, your Miami home furniture store. We offer top quality, brand name furniture for every room of your home, and at the lowest prices in the country. Never to be undersold, or out-serviced, owner Steve Levin and his team provide budget-minded South Florida residents with an outstanding selection of essential bedroom and living room furniture plus tons of fun accent pieces.</p>
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