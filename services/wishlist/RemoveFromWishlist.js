import React from "react";
import axios from "axios";

export function removeFromWishlist(data) {
    const userIdURL = `http://34.125.190.3/api/remove-from-wishlist/`
    return   axios.post(`${userIdURL}`,data).then((response) => response);

}