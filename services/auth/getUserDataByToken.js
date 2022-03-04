import React from "react";
import axios from "axios";

export function getUserDataByToken() {
    const getUserDataByToken = 'http://34.125.190.3/api/auth/user-data/'
    let  token = localStorage.getItem('username')
    return  axios.post(`${getUserDataByToken}`, {},{ 'headers': { 'Authorization': `Bearer ${token}` } }
    ).then((response) => response);
}
