import * as Actions from './types';

export const switchZoneAction = (zone) => {
    return {
        type: Actions.SWITCH_ZONE,
        payload: zone,
    };
}

export const changeAddressAction = (address) => {
    return {
        type: Actions.CHANGE_ADDRESS,
        payload: address,
    };
}

export const changeNameAction = (name) => {
    return {
        type: Actions.CHANGE_NAME,
        payload: name,
    };
}

export const changePhoneAction = (phone) => {
    return {
        type: Actions.CHANGE_PHONE,
        payload: phone,
    };
}
