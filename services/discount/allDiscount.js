import React from "react";
import axios from "axios";

export function allDiscount() {
    const logoURL = 'http://34.125.190.3/api/discounts/'
    return  axios.get(`${logoURL}`).then((response) => response);
}

