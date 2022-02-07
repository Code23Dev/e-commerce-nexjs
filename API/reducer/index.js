import { combineReducers } from 'redux';

import ConditionReducer from '../reducer/reducer_data';

let DataReducer;
const rootReducer = combineReducers({
    data: DataReducer,
});

export default rootReducer;