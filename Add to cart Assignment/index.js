var itemsContainer = document.getElementById("items-container");

var itemList = JSON.parse(localStorage.getItem("items"));
var cartList = JSON.parse(localStorage.getItem("cart"));

if(itemList != null){
    showItems()
    cartItems()
}




function addItem() {
    var itemName = $("#itemName").val();
    var itemPrice = $("#itemPrice").val();
    var obj = {
        "name": itemName,
        "price": parseInt(itemPrice),
    }
    if (itemList == null) {
        itemList = [];
        itemList.push(obj);
        localStorage.setItem("items", JSON.stringify(itemList));
    }
    else{
        itemList.push(obj);
        localStorage.setItem("items", JSON.stringify(itemList));
    }
    location.reload();
}

function showItems(){
    for(var i = 0 ; i < itemList.length ; i++){
        itemsContainer.innerHTML += `
        <div class="item-box">
            <p>Item : ${itemList[i].name}</p>
            <p>Price : Rs ${itemList[i].price}</p>
            <button class = "add-to-cart" onclick = "addToCart(${i})">Add To Cart</button>
        </div>
        `
    }
}

function addToCart(i){
    var obj = {
        "name": itemList[i].name,
        "price": parseInt(itemList[i].price),
    }
    if (cartList == null) {
        cartList = [];
        cartList.push(obj);
        localStorage.setItem("cart", JSON.stringify(cartList));
    }
    else{
        cartList.push(obj);
        localStorage.setItem("cart", JSON.stringify(cartList));
    }
    alert(`${itemList[i].name} added to cart!`);
    location.reload();
}

function goToCart(){
    location.href=`${location.origin}/cart.html`
}

function cartItems(){
    if (cartList != null){
    var cartQuantity = document.getElementById("cart-quantity")
    cartQuantity.innerHTML = `<p>Cart Items : ${cartList.length}</p>`
    }
}