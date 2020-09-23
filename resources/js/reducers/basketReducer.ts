import * as Actions from '../actions/types';
import { IBasketItem } from '../types';

export const initialState: Array<IBasketItem> = [];

interface IBasketAction {
    type: string;
    id: number;
}

const reducer = (state = initialState, action: IBasketAction) => {
    switch (action.type) {
        case Actions.ADD_TO_BASKET: {
            const basket = [...state];
            let basketItem = basket.find(el => el.id == action.id);
            if (basketItem) {
                basketItem.qnt++;
            } else {
                basketItem = {id: action.id, qnt: 1};
                basket.push(basketItem);
            }
            return basket;
        }
        case Actions.REMOVE_FROM_BASKET: {
            const basket = [...state];
            let basketItem = basket.find(el => el.id == action.id);
            if (basketItem) {
                basketItem.qnt--;
            }
            return basket;
        }
        case Actions.CLEAR_BASKET: {
            return initialState;
        }
    }
    return state;
}

export default reducer;
