import * as Actions from '../actions/types';
import { IOrderAction } from '../types';

export const initialState = {
    zone: 0,
    address: '',
    name: '',
    phone: '',
};

const reducer = (state = initialState, action: IOrderAction) => {
    switch (action.type) {
        case Actions.SWITCH_ZONE: return {...state, zone: action.payload};
        case Actions.CHANGE_ADDRESS: return {...state, address: action.payload};
        case Actions.CHANGE_NAME: return {...state, name: action.payload};
        case Actions.CHANGE_PHONE: return {...state, phone: action.payload};
    }
    return state;
}

export default reducer;
