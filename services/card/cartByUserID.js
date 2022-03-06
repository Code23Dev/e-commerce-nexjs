import React from "react";
import axios from "axios";

export function cartByUserID(userId) {
    const cartByUserIDURL = `http://34.125.190.3/api/user-cart/${userId}`
    return   axios.get(`${cartByUserIDURL}`).then((response) => response);

}