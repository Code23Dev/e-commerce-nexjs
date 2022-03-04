import React from "react";
import axios from "axios";

export function getUserWishlist(userId) {
    const userIdURL = `http://34.125.190.3/api/wishlist/${userId} `
    return   axios.get(`${userIdURL}`).then((response) => response);

}