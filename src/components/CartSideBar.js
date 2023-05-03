import { React, useState, useEffect } from "react";
import "./CartSideBar.css";
import SideBarItem from "./SideBarItem";

function CartSideBar({isCartHidden, cartArr, handleQuantityChange, handleClear}) {
    const [total, setTotal] = useState(0);

    const calculateTotal = () => {
        let runningTotal = 0;
        cartArr.forEach(item => {
            const itemTotal = item.price * item.quantity;
            runningTotal = runningTotal + itemTotal;
        });
        console.log('blamo')
        setTotal(runningTotal);
        
        
    }
    const cartItems = cartArr.map(item => {

        return (<SideBarItem item={item} handleQuantityChange={handleQuantityChange} key={item.key} calculateTotal={calculateTotal} handleClear={handleClear} />)
    })

    useEffect(() => {
        console.log(total)
    })
    return (
        <div id="sideBar" className={isCartHidden}>
            <div>
                {cartItems}
                <div id="total">
                    <p>total: {cartItems.length === 0 ? 0 :total}</p>
                </div>
            </div>
            <button>Checkout</button>
        </div>
    )
}

export default CartSideBar;