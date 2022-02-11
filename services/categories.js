import React from "react";
import axios from "axios";

export function categories() {
    const logoURL = 'http://34.125.190.3/api/categories/'
        axios.get(`${logoURL}`).then((response) => response);
}

