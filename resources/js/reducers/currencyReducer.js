import * as Actions from '../actions/types';

const initialState = false;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.SWITCH_CURRENCY: return !state;
    }
    return state;
}

export default reducer;
