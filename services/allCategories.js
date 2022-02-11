import React from "react";
import axios from "axios";

export function allCategories() {
    const logoURL = `http://34.125.190.3/api/categories/`
    return   axios.get(`${logoURL}`).then((response) => response);

}