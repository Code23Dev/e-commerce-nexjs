import React from "react";
import axios from "axios";

export function allUserMessages() {
    const allUserMessagesURL = 'http://34.125.190.3/api/user-messages/'
    return  axios.post(`${allUserMessagesURL}`).then((response) => response);
}

