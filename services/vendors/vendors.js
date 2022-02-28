import React from "react";
import axios from "axios";

export function vendors() {
    const vendorsURL = 'http://34.125.190.3/api/auth/vendors/'
    return  axios.get(`${vendorsURL}`).then((response) => response);
}

