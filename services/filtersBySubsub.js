import React from "react";
import axios from "axios";

export function filtersBySubsub(selectedOptionListTitle) {
        console.log(selectedOptionListTitle)
        const logoURL = `http://34.125.190.3/api/filters-by-subsub/${selectedOptionListTitle}/`
        return   axios.get(`${logoURL}`).then((response) => response);

}