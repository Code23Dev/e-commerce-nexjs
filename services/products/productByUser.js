import React from "react";
import axios from "axios";

export function productByUser(productId,body) {
    const productByUserURL = `http://34.125.190.3/api/product-by-user-id/`
    return   axios.post(`${productByUserURL + productId}`,body).then((response) => response);

}