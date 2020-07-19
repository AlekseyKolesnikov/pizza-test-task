import * as Actions from './types';

export const switchZoneAction = (zone) => {
    return {
        type: Actions.SWITCH_ZONE,
        zone
    };
}
