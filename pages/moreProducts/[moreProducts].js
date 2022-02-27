import React from "react";
import MoreProducts from "../../components/Layout/components/MoreProducts/MoreProducts";
import HeaderTop2 from "../../components/Layout/components/Header/HeaderTop2";

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