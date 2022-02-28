import React from "react";
import axios from "axios";

export function productByUserGet(p,s,productId) {
    const productByUserURL = `http://34.125.190.3/api/product-by-user-id/`
    return   axios.get(`${productByUserURL + productId}`).then((response) => response);

}