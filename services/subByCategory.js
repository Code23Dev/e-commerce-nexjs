import React from "react";
import axios from "axios";

export function subByCategory(id) {
    const subByCategoryURL = 'http://34.125.190.3/api/sub-by-category/' + id
    return   axios.get(`${subByCategoryURL}`).then((response) => response);
}