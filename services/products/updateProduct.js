import React from "react";
import axios from "axios";

export function updateProduct(productId) {
    const updateProductURL = `http://34.125.190.3/api/product/`
    return   axios.patch(`${updateProductURL + productId}`).then((response) => response);

}