var cartList = JSON.parse(localStorage.getItem("cart"));
var cartContainer = document.getElementById("cart-container");
//console.log(cartList)

var totalPrice = 0;



showCart();
getTotalPrice();
function showCart(){
    if (cartList == null || cartList.length == 0){
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <p>Cart Is Empty</p>
            </div>`;
    }
    else {
        for(var i = 0; i < cartList.length; i++){
            cartContainer.innerHTML += `
            <div class="cart-box">
                    <p>Item : ${cartList[i].name}</p>
                    <p>Price : Rs ${cartList[i].price}</p>
                    <button class = "remove-from-cart" onclick = "removeFromCart(${i})">Remove Item</button>
            </div>
            `
        }
    }
}

function removeFromCart(i){
    cartList.splice(i,1);
    localStorage.setItem("cart", JSON.stringify(cartList));
    location.reload()
}

function checkout(){
    if (cartList == null || cartList.length == 0){
        alert('Your Cart is empty');
    }
    else{
        alert(`Order Placed Successfully Paid Rs ${totalPrice} `)
        localStorage.removeItem("cart");
        location.reload()

        //window.open(`https://www.payumoney.com/checkout/pgRedirectGateway?token=<PASSWORD>&key=3957`)
    }
}

function getTotalPrice(){
    if (cartList != null){
    for(var i = 0; i < cartList.length ; i++){
        totalPrice+=parseInt((cartList[i].price))
    }
    var overview = document.getElementById("overview");
    overview.innerHTML = `
        <p>Total Items : ${cartList.length}</p>
        <p>Total Price : ${totalPrice}</p>
        `
    }
}

function goToItems(){
    location.href=`${location.origin}/index.html`
}