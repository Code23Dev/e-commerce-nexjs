import React from "react";
import axios from "axios";

export function productFilter(body) {
    const productFilterURL = 'http://34.125.190.3/api/product-filter/'
    return   axios.post(`${productFilterURL}`,body).then((response) => response);
}