import React from "react";
import axios from "axios";

export function deleteProduct(productId) {
    const deleteProductURL = `http://34.125.190.3/api/product/`
    let  token = localStorage.getItem('username')
    return   axios.delete(`${deleteProductURL + productId}`,{ 'headers': { 'Authorization': `Bearer ${token}` }}).then((response) => response);

}