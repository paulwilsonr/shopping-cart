import { React, useState, useEffect } from 'react';


function SideBarItem({item, handleQuantityChange, calculateTotal, handleClear}) {
    const [currentQuantity, setCurrentQuantity] = useState(item.quantity);
    const [itemTotal, setItemTotal] = useState(item.price * currentQuantity);
    useEffect(() => {
        calculateTotal()
    })
    return (
        <li >
            {item.name}
            <input type="number" name="quantity" min="0" max='100' value={currentQuantity} onChange={(e)=>{
                setCurrentQuantity(e.target.value)
                handleQuantityChange(item.name, e.target.value);
                setItemTotal(item.price * e.target.value);
                calculateTotal();
            }}></input>
            <p>${itemTotal}</p>
            <p onClick={() => {
                handleClear(item.name)
                calculateTotal();
            }}>clear</p>
        </li>
    )
}

export default SideBarItem;