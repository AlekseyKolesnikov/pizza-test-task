import * as Actions from '../actions/types';

const initialState = [];

const reducer = (state = initialState, action) => {
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
    }
    return state;
}

export default reducer;
