import React from "react";
import axios from "axios";

export function  partners() {
    const partnersURL = 'http://34.125.190.3/api/partners/'
    return  axios.get(`${partnersURL}`).then((response) => response);
}

