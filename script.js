    let cart = document.getElementsByClassName("cart")[0]

let dropDown = document.getElementsByClassName("drop-down")[0]
let itemTemplate = document.querySelector("[item-template]")
let emptyTemplate = document.querySelector("[empty-template")
let plus = document.getElementsByClassName("plus")[0]
let minus = document.getElementsByClassName("minus")[0]
let quantity = document.getElementsByClassName("quantity")[0]
let addToCart = document.getElementsByClassName("add-to-cart")[0]
let checkout = document.getElementsByClassName("checkout")[0]

plus.addEventListener("click", () => {
    quantity.innerHTML = parseInt(quantity.innerHTML) + 1
})

minus.addEventListener("click", () => {
    quantity.innerHTML = parseInt(quantity.innerHTML) - 1
})

addToCart.addEventListener("click", () => {
    
    let item = itemTemplate.content.cloneNode(true).children[0]
    let trashButton = item.children[2]
    trashButton.addEventListener("click", () => handleDelete(item))
    let itemPrice = item.children[1].children[1].children[0]
    itemPrice.innerHTML = `$125.00 x ${quantity.innerHTML}`
    let totalPrice = item.children[1].children[1].children[1]
    totalPrice.innerHTML = "$" + (125.00 * parseFloat(quantity.innerHTML)).toFixed(2)
    dropDown.children[1].replaceWith(item)
    
    if(dropDown.children[1].classList[0] == "item"){
        checkout.classList.remove("hidden")
    }
})

cart.addEventListener("click", () => {
    dropDown.classList.toggle("hidden")
})

function handleDelete(){
    let empty = emptyTemplate.content.cloneNode(true).children[0]
    checkout.classList.add("hidden");
    dropDown.children[1].replaceWith(empty)
}  

let thumbnails = document.getElementsByClassName("thumbnail")
let mainImage = document.getElementsByClassName("main-image")[0]
let bigImage = document.getElementsByClassName("focus")[0];

Array.from(thumbnails).forEach(thumbnail => {
    thumbnail.addEventListener("click", () => {

        let productNumber = thumbnail.src.substring(thumbnail.src.indexOf("thumbnail")-2, thumbnail.src.indexOf("thumbnail")-1);
        if(blackScreen.classList.contains("hidden")){
            mainImage.src = `./images/image-product-${productNumber}.jpg`
        }
        else{   
            bigImage.src = `./images/image-product-${productNumber}.jpg`
        }

        Array.from(thumbnails).forEach(th => {
            th.classList.remove("selected")
        })
        thumbnail.classList.add("selected")
    })    
})

let blackScreen = document.getElementsByClassName("black-screen")[0];

mainImage.addEventListener("click", () =>{
    blackScreen.classList.toggle("hidden");
    bigImage.src = mainImage.src
})

let closeButton = document.getElementsByClassName("close")[0]
closeButton.addEventListener("click", () =>{
    blackScreen.classList.toggle("hidden");
})

let leftButton = document.getElementsByClassName("left")[0]
let rightButton = document.getElementsByClassName("right")[0]

leftButton.addEventListener("click", () => {
    let productNumber = bigImage.src.substring(bigImage.src.indexOf("jpg")-2, bigImage.src.indexOf("jpg")-1);
    productNumber = parseInt(productNumber)
    bigImage.src = `./images/image-product-${(productNumber-1)%5}.jpg`
})

rightButton.addEventListener("click", () => {
    let productNumber = bigImage.src.substring(bigImage.src.indexOf("jpg")-2, bigImage.src.indexOf("jpg")-1)
    productNumber = parseInt(productNumber)
    bigImage.src = `./images/image-product-${(productNumber+1)%5}.jpg`
})

