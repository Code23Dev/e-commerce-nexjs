import React from "react";
import axios from "axios";

export function filtersBySubsub(selectedOptionListId) {
        console.log(selectedOptionListId)
        const logoURL = `http://34.125.190.3/api/filters-by-subsub/${selectedOptionListId}/`
        return   axios.get(`${logoURL}`).then((response) => response);

}