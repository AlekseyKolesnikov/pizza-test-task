import * as Actions from './types';

export const switchZoneAction = (zone: number) => {
    return {
        type: Actions.SWITCH_ZONE,
        payload: zone,
    };
}

export const changeAddressAction = (address: string) => {
    return {
        type: Actions.CHANGE_ADDRESS,
        payload: address,
    };
}

export const changeNameAction = (name: string) => {
    return {
        type: Actions.CHANGE_NAME,
        payload: name,
    };
}

export const changePhoneAction = (phone: string) => {
    return {
        type: Actions.CHANGE_PHONE,
        payload: phone,
    };
}
