import React from "react";
import axios from "axios";

export function addToCard(data) {
    const addToCardURL = `http://34.125.190.3/api/add-to-cart/`
    return   axios.post(`${addToCardURL}`,data).then((response) => response);

}