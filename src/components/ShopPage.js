import React from "react";
import Item from "./Item";
import "./ShopPage.css";

function ShopPage({ shopData, handleAddToCart }) {

    return (
        <div id="shopContainer">
            Shop!
            
            {shopData.map(item => {
        
                return (
                    <div className="itemContainer" key={item.key}>
                        <Item className="item" itemData={item} handleAddToCart={handleAddToCart}  />
                    </div>
                )
            })}
        </div>
    )
}

export default ShopPage;