import CartIcon from "./CartIcon";
import React from "react";
import './NavBar.css'
function NavBar({toggleCart, isCartHidden}) {
    
    return (
        <div id="navBar">
            <a id="home" href="/">Home</a>
            <a id="shop" href="/shop">Shop</a>
            <CartIcon id="cartIcon" toggleCart={toggleCart} isCartHidden={isCartHidden}/>
        </div>
    )
}

export default NavBar;