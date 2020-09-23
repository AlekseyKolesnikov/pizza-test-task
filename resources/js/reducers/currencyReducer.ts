import * as Actions from '../actions/types';

export const initialState = false;

interface ICurrencyAction {
    type: string;
}

const reducer = (state = initialState, action: ICurrencyAction) => {
    switch (action.type) {
        case Actions.SWITCH_CURRENCY: return !state;
    }
    return state;
}

export default reducer;
