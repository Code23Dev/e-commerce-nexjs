import React from "react";
import axios from "axios";

export function  productsPost(body) {
    const productsPost = 'http://34.125.190.3/api/products/'
    return  axios.post(`${productsPost}`,body).then((response) => response);
}

