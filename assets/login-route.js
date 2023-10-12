// route to login from cart when subscription items in cart and not already logged in - am

window.onload = function(){ 
    var loginRoute = document.getElementById("login-route");    // trigger from cart 
    var cartReturn = document.getElementById("cart-return");    // target to show
  
    // Login routes to cart onClick of checkout button in cart
    if (loginRoute != null){
      loginRoute.onclick = function() {
        cartReturn.classList.add('show-route');
        cartReturn.classList.remove('hide-route');
      }
    }
  
  }