import React from "react";
import axios from "axios";

export function removeFromCart(data) {
    const userProductsURL = `http://34.125.190.3/api/remove-from-cart/`
    let  token = localStorage.getItem('username')
    return  axios.post(`${userProductsURL}`,data, { 'headers': { 'Authorization': `Bearer ${token}` } }
    ).then((response) => response);
}