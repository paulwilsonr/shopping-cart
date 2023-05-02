import React from "react";
import "./Items.css";

function Item({itemData}) {
    return (
        <div className="item">
            <h2 className="itemName">{itemData.items[0].name}</h2>
            <img className="itemPicture" src={itemData.items[0].images.icon} alt="Item"></img>
           <div className="itemPriceButton">            
            <h2 className="itemPrice">Price:{itemData.finalPrice}</h2>
            <button className="addtoCartButton">Add to Cart</button>
            </div>
            
        </div>
    )
}

export default Item;