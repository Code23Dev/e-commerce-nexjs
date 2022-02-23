import React from "react";
import axios from "axios";

export function  register(article) {
    const registerURL = 'http://34.125.190.3/api/auth/register/'
    return  axios.post(`${registerURL}`,article).then((response) => response);
}

