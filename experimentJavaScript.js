/* Header scroll background */

const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})



/* Menu */

let menu = document.querySelector('#menu-icon')
let navmenu = document.querySelector('.navmenu')

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}




const cartIcon = document.getElementById("cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.getElementById("close-cart");

// OpenCart
cartIcon.addEventListener("click", ()=> {
    cart.classList.toggle("active");
});

// CloseCart
closeCart.addEventListener("click", ()=> {
    cart.classList.remove("active");
});

// Cart Logic Javascript

if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}

function ready(){
    var reomveCartButtons = document.getElementsByClassName("cart-remove");
    console.log(reomveCartButtons);
    for(var i = 0; i < reomveCartButtons.length; i++){
        var button = reomveCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for(var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

    var addCart = document.getElementsByClassName("add-cart");
    for(var i = 0; i < addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    document.getElementsByClassName("buy-btn")[0].addEventListener("click", buyButtonClicked)
    document.getElementsByClassName("buynow")[0].addEventListener("click", BuyNowBtnClicked)
}
function BuyNowBtnClicked(){
    alert("You Bought this Item");
}
function buyButtonClicked(){
    alert("Your Order is Placed");
    var content = document.getElementsByClassName("cart-content")[0];
    while(content.hasChildNodes()){
        content.removeChild(content.firstChild);
    }
    updatetotal()
}

// RemoveCartItem
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

// QuantityChanged
function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value || input.value <= 0)){
        input.value = 1;
    }
    if(input.value <= 0){
        input.value = 1;
    }
    updatetotal()
}

// BtnaddCartClicked
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}

// AddProductToCart
function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement('div')
    cartShopBox.classList.add('cart-box')
    var cartItems = document.getElementsByClassName('cart-content')[0]
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title')
    for(var i = 0; i < cartItemsNames.length; i++){
        if (cartItemsNames[i].innerHTML == title) {
            alert("You Have already added this item to cart!");
            return;
        }
    }
    var cartBoxContent = `
                        <img class="cart-img" src="${productImg}">
                        <div class="detail-box">
                            <div class="cart-product-title">${title}</div>
                            <div class="cart-product-price">${price}</div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <i class='bx bxs-trash-alt cart-remove'></i>`;
    cartShopBox.innerHTML = cartBoxContent
    cartItems.append(cartShopBox)
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem)
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
}

// UpdateInformation
function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for(var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-product-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
        total = Math.round(total * 100) / 100;
        document.getElementsByClassName("total-price")[0].innerText = total + "KZT";
}