import React from "react";
import axios from "axios";

export function allProducts(page,size) {
    let allProductsURL
    if (page,size){
         allProductsURL = `http://34.125.190.3/api/products/?p=${page}&page_size=${size}`
    } else {
         allProductsURL = `http://34.125.190.3/api/products/`
    }

    return   axios.get(`${allProductsURL}`).then((response) => response);

}