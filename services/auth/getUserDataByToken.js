import React from "react";
import axios from "axios";

export function  getUserDataByToken(article) {
    const getUserDataByToken = 'http://34.125.190.3/api/auth/user-data/'
    return  axios.post(`${getUserDataByToken}`,article).then((response) => response);
}

