import React from "react";
import axios from "axios";

export function phoneNumber() {
    const phoneNumberURL = 'http://34.125.190.3/api/number/'
    return   axios.get(`${phoneNumberURL}`).then((response) => response);
}