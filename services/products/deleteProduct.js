import React from "react";
import axios from "axios";

export function deleteProduct(productId) {
    const deleteProductURL = `http://34.125.190.3/api/product/`
    return   axios.delete(`${deleteProductURL + productId}`).then((response) => response);

}