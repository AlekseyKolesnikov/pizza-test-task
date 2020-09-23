import * as Actions from '../actions/types';

export const initialState = {
    zone: 0,
    address: '',
    name: '',
    phone: '',
};

interface IBasketAction {
    type: string;
    payload: number | string;
}

const reducer = (state = initialState, action: IBasketAction) => {
    switch (action.type) {
        case Actions.SWITCH_ZONE: return {...state, zone: action.payload};
        case Actions.CHANGE_ADDRESS: return {...state, address: action.payload};
        case Actions.CHANGE_NAME: return {...state, name: action.payload};
        case Actions.CHANGE_PHONE: return {...state, phone: action.payload};
    }
    return state;
}

export default reducer;
