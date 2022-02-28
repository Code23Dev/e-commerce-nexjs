import React from "react";
import axios from "axios";

export function subBySubsub(id) {
    const subByCategoryURL = 'http://34.125.190.3/api/sub-by-subsub/' + id
    return   axios.get(`${subByCategoryURL}`).then((response) => response);
}