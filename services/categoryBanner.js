import React from "react";
import axios from "axios";

export function categoryBanner() {
    const logoURL = `http://34.125.190.3/api/category-banner/`
    return   axios.get(`${logoURL}`).then((response) => response);

}