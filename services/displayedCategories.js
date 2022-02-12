import React from "react";
import axios from "axios";

export function displayedCategories() {
    const logoURL = 'http://34.125.190.3/api/displayed-categories/'
    return   axios.get(`${logoURL}`).then((response) => response);
}