import React from "react";
import axios from "axios";

export function subCategories() {
    const logoURL = 'http://34.125.190.3/api/sub-categories/'
    return   axios.get(`${logoURL}`).then((response) => response);
}