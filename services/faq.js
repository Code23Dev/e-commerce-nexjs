import React from "react";
import axios from "axios";

export function faq() {
    const faqURL = 'http://34.125.190.3/api/faq/'
    return  axios.get(`${faqURL}`).then((response) => response);
}

