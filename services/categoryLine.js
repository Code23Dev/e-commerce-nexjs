import React from "react";
import axios from "axios";

export function categoryLine() {
    const logoURL = `http://34.125.190.3/api/category-line/`
    return   axios.get(`${logoURL}`).then((response) => response);

}