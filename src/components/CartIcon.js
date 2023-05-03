import React from "react";
import shoppingCart from "./media/shopping-cart.png";
import "./CartIcon.css";

function CartIcon({toggleCart, isCartHidden}) {
    function checkhidden(){
        if (isCartHidden === 'hidden') {
            return 'seen';
        } else {
            return 'hidden';
        }
    }
return (
    <img id="shoppingCart" src={shoppingCart} alt="Show shopping cart" onClick={() => {
        toggleCart(checkhidden());
    }}></img>
)

}

export default CartIcon;