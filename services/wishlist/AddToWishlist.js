import React from "react";
import axios from "axios";

export function addToWishlist(data) {
    const userIdURL = `http://34.125.190.3/api/add-to-wishlist/ `
    return   axios.post(`${userIdURL}`,data).then((response) => response);

}