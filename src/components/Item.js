import React from "react";
import "./Items.css";

function Item({itemData, handleAddToCart}) {
    return (
        <div className="item" >
            <h2 className="itemName">{itemData.name}</h2>
            <img className="itemPicture" src={itemData.picture} alt="Item"></img>
           <div className="itemPriceButton">            
            <h2 className="itemPrice">Price:{itemData.price}</h2>
            <button className="addtoCartButton" onClick={()=>handleAddToCart(itemData.name, itemData.price)}>Add to Cart</button>
            </div>
            
        </div>
    )
}

export default Item;