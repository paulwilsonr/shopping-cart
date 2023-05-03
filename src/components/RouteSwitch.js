import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";

function RouteSwitch({shopData, handleAddToCart}) {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage shopData={shopData} handleAddToCart={handleAddToCart}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;