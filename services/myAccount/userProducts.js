import React from "react";
import axios from "axios";

export function userProducts() {
    const userProductsURL = 'http://34.125.190.3/api/product-by-user/'
    let  token = localStorage.getItem('username')
    return  axios.get(`${userProductsURL}`, { 'headers': { 'Authorization': `Bearer ${token}` } }
   ).then((response) => response);
}

