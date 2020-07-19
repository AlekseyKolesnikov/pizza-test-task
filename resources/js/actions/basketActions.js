import * as Actions from './types';
import store from '../store';

export const dispatchAddToBasket = (id) => {
    store.dispatch({
        type: Actions.ADD_TO_BASKET,
        id,
    });
}

export const dispatchRemoveFromBasket = (id) => {
    store.dispatch({
        type: Actions.REMOVE_FROM_BASKET,
        id,
    });
}
