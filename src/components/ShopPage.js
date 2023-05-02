import React from "react";
import Item from "./Item";
import "./ShopPage.css";

function ShopPage({ shopData }) {

    return (
        <div id="shopContainer">
            Shop!
            {console.log(shopData)}
            {shopData.map(item => {
                return (
                    <div className="itemContainer">
                        <Item className="item" itemData={item} />
                    </div>
                )
            })}
        </div>
    )
}

export default ShopPage;