import React from "react";
import axios from "axios";

export function aboutUs() {
    const aboutUsURL = 'http://34.125.190.3/api/about-us/'
    return  axios.get(`${aboutUsURL}`).then((response) => response);
}

