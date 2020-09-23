import * as Actions from './types';
import store from '../store';

export const dispatchSwitchCurrency = () => {
    store.dispatch({
        type: Actions.SWITCH_CURRENCY,
    });
}
