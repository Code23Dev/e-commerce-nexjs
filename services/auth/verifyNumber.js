import React from "react";
import axios from "axios";

export function  verifyNumber(article) {
    const verifyNumberURL = 'http://34.125.190.3/api/auth/verify-number/'
    return  axios.post(`${verifyNumberURL}`,article).then((response) => response);
}

