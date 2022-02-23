import React from "react";
import axios from "axios";

export function createProduct(article) {
    const createProductURL = `http://34.125.190.3/api/product/`
    return   axios.post(`${createProductURL}`,article).then((response) => response);

}