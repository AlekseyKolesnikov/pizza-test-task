import * as Actions from '../actions/types';
import { ICurrencyAction } from '../types';

export const initialState = false;

const reducer = (state = initialState, action: ICurrencyAction) => {
    switch (action.type) {
        case Actions.SWITCH_CURRENCY: return !state;
    }
    return state;
}

export default reducer;
