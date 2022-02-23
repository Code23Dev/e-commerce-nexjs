import React from "react";
import axios from "axios";

export function allProducts() {
    const allProductsURL = `http://34.125.190.3/api/products/`
    return   axios.get(`${allProductsURL}`).then((response) => response);

}