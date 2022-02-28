import React from "react";
import axios from "axios";

export function postVendors() {
    const postVendorsURL = 'http://34.125.190.3/api/auth/vendors/'
    return  axios.post(`${postVendorsURL}`).then((response) => response);
}

