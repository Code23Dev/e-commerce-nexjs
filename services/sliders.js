import React from "react";
import axios from "axios";

export function sliders() {
    const logoURL = 'http://34.125.190.3/api/sliders/'
    return   axios.get(`${logoURL}`).then((response) => response);
}