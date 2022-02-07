import {FETCH_DATA} from '../action/index';

export default function(state = [], action){

    switch (action.type) {
        case FETCH_DATA:
            return action.payload.data
            break;
        default:
            return state;

    }
}