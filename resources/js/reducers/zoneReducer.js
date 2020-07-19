import * as Actions from '../actions/types';

const initialState = 0;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.SWITCH_ZONE: return action.zone;
    }
    return state;
}

export default reducer;
