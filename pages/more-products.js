import React from "react";
import HeaderTop2 from "../components/Layout/components/Header/HeaderTop2";
import MoreProducts from "../components/Layout/components/MoreProducts/MoreProducts";

export default function MoreProductsData() {
    return (
        <div>
            <HeaderTop2/>
            <div className="mt-5 mb-5">
                <MoreProducts/>
            </div>
        </div>
    )
}