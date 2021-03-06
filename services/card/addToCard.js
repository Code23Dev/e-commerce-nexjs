import React from "react";
import axios from "axios";

export function addToCard(data) {
    const userProductsURL = `http://34.125.190.3/api/add-to-cart/`
    let  token = localStorage.getItem('username')
    return  axios.post(`${userProductsURL}`,data, { 'headers': { 'Authorization': `Bearer ${token}` } }
    ).then((response) => response);
}