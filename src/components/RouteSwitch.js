import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";

function RouteSwitch({shopData}) {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage shopData={shopData}/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;