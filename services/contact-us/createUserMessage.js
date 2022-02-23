import React from "react";
import axios from "axios";

export function createUserMessage(article) {
    const createUserMessageURL = 'http://34.125.190.3/api/user-messages/'
    return  axios.post(`${createUserMessageURL}`,article).then((response) => response);
}

