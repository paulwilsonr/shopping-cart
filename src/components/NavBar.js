import CartIcon from "./CartIcon";
import React from "react";
import './NavBar.css'
function NavBar() {
    return (
        <div id="navBar">
            <a id="home" href="/">Home</a>
            <a id="shop" href="/shop">Shop</a>
            <CartIcon />
        </div>
    )
}

export default NavBar;