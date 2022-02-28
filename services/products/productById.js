import React from "react";
import axios from "axios";

export function productById(productId) {
    const productByIdURL = `http://34.125.190.3/api/products/`
    return   axios.get(`${productByIdURL + productId}`).then((response) => response);

}