function Products(){

    
this.getProductsData = async () =>{
    if(localStorage.getItem('productData')){
        let localData = JSON.parse(localStorage.getItem('productData'))
        return this.create(localData)
    }else{

    await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                localStorage.setItem('productData', JSON.stringify(json))
                this.create(json)
            })
    }
}
    
this.create = (dataJson) =>{
    this.data=dataJson;
    this.element = document.createElement('div')
    this.element.classList.add('products')

    this.list = ''
    dataJson.forEach(product => {
        this.list += `<li class="product_element">
        <span class = "product_element__name"><a href ='/${location.hash}/${product.id}'>${product.title}</a></span>
        <img class="product_element__img" src = ${product.image}>
        
        <span class = "product_element__price">💰${product.price} <small>BYN</small></span>
        <button class="product__btn" id=${product.id}>Добавить в корзину</button>
        </li>`
      
      
    });
    this.element.innerHTML=`<ul class ="products_container">
    ${this.list}
    </ul>`
    return this.element
}

this.product = (hash)=>{
    let id=hash.split('/')[1]
    let product = this.data.filter((item)=>{
        return item.id == id
    })
    this.element.innerHTML=`
        <button id="prev">Back home</button>
        <div class="product_box">
        <div class="product_card">
        <img class="product_card__img"src="${product[0].image}"> 
        </div>
        <div class="product_card_caption">
        <span class = "product_card__description">${product[0].description}</span>
        <span class = "product_card__price">${product[0].price} <small>BYN</small></span>
        
        </div>
        </div>
        `
        
    document.title=`${product[0].title}`
   
    return this.element
}

this.init = () =>{
    
        return this.getProductsData().then(data =>{
            if(location.hash.includes('/')){
                return this.product(location.hash)
            }
            return this.element
    
        })
    }

    
}



const products = new Products()
export default products