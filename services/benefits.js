import React from "react";
import axios from "axios";

export function benefits() {
    const logoURL = `http://34.125.190.3/api/benefits/`
    return   axios.get(`${logoURL}`).then((response) => response);

}