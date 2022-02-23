import React from "react";
import axios from "axios";

export function  login(article) {
    const loginURL = 'http://34.125.190.3/api/auth/login/'
    return  axios.post(`${loginURL}`,article).then((response) => response);
}

